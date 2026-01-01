---
---
// search.js - client-side search using Lunr and search.json

(function () {
  const INPUT = document.getElementById("search-input");
  const RESULTS = document.getElementById("search-results");
  const META = document.getElementById("search-meta");

  // Jekyll expands this to /docs/search.json
  const INDEX_URL = "{{ "/search.json" | relative_url }}";

  let documents = [];
  let idx = null;
  let indexError = false;

  function debounce(fn, ms) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), ms);
    };
  }

  function getURLQuery() {
    const params = new URLSearchParams(window.location.search);
    return (params.get("q") || "").trim();
  }

  async function loadIndex() {
    try {
      const res = await fetch(INDEX_URL);
      if (!res.ok) throw new Error("Failed to fetch search index");
      documents = await res.json();

      idx = lunr(function () {
        this.ref("url");
        this.field("title", { boost: 10 });
        this.field("content");
        documents.forEach(doc => this.add(doc));
      });
    } catch (e) {
      console.error("Search index load error:", e);
      indexError = true;
      if (META) META.textContent = "Could not load search index.";
    }
  }

  function highlight(text, terms) {
    if (!terms.length) return text;
    try {
      const term = terms[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(`(${term})`, "ig");
      return text.replace(re, "<mark>$1</mark>");
    } catch {
      return text;
    }
  }

  function snippet(content, terms, maxLen = 180) {
    if (!content) return "";
    const lower = content.toLowerCase();
    let iHit = -1;
    for (const t of terms) {
      const i = lower.indexOf(t.toLowerCase());
      if (i !== -1) { iHit = i; break; }
    }
    let start = Math.max(0, iHit - 60);
    let snip = content.slice(start, start + maxLen);
    if (start > 0) snip = "…" + snip;
    if (start + maxLen < content.length) snip = snip + "…";
    return highlight(snip, terms);
  }

  function render(results, terms) {
    if (!RESULTS || !META) return;
    RESULTS.innerHTML = "";

    if (!results.length) {
      META.textContent = "No results";
      return;
    }

    META.textContent = `${results.length} result${results.length > 1 ? "s" : ""}`;

    results.slice(0, 50).forEach(({ ref }) => {
      const doc = documents.find(d => d.url === ref);
      if (!doc) return;

      const div = document.createElement("div");
      div.className = "search-hit";

      const a = document.createElement("a");
      a.href = doc.url;
      a.innerHTML = highlight(doc.title, terms);

      const p = document.createElement("p");
      p.innerHTML = snippet(doc.content, terms);

      div.appendChild(a);
      div.appendChild(p);
      RESULTS.appendChild(div);
    });
  }

  const runSearch = debounce(() => {
    if (!INPUT || !META || indexError) return;

    const q = INPUT.value.trim();
    if (!q) {
      META.textContent = "";
      RESULTS.innerHTML = "";
      return;
    }

    if (!idx) {
      META.textContent = "Index loading…";
      return;
    }

    try {
      const terms = q.split(/\s+/).filter(Boolean);
// Before: const query = terms.map(t => `${t}*`).join(" ");
const query = terms.join(" ");
const results = idx.search(query);
      render(results, terms);
    } catch (e) {
      console.warn("Search error:", e);
      META.textContent = "Search error.";
    }
  }, 120);

  async function init() {
    if (!INPUT) return;

    // Prefill from ?q= if present
    const initial = getURLQuery();
    if (initial) {
      INPUT.value = initial;
    }

    // Start loading index in background
    await loadIndex();

    // If we already have a query (from ?q= or user typing before index finished), run it now
    if (INPUT.value.trim()) {
      runSearch();
    }

    // Now normal live search
    INPUT.addEventListener("input", runSearch);
  }

  window.addEventListener("load", init);
})();
