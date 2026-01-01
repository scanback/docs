---
title: Search
layout: default
permalink: /search/
---

<h1>Search</h1>

<label for="search-input" class="visually-hidden">Search</label>
<input
  id="search-input"
  type="search"
  name="q"
  placeholder="Search…"
  style="width:100%;max-width:640px;padding:0.6rem;font-size:1rem;border:1px solid #ddd;border-radius:8px"
/>

<p id="search-meta" style="margin:0.5rem 0 1rem;color:#666;"></p>
<div id="search-results" aria-live="polite" aria-busy="false"></div>

<!-- Lunr first -->
<script src="https://cdn.jsdelivr.net/npm/lunr/lunr.min.js"></script>
<!-- Your search logic -->
<script src="{{ "/assets/js/search.js" | relative_url }}"></script>

<style>
.visually-hidden{position:absolute;left:-9999px}
.search-hit{padding:0.75rem 0;border-bottom:1px solid #eee}
.search-hit a{font-weight:600;text-decoration:none}
.search-hit p{margin:0.25rem 0 0;color:#444}
mark{background:#ffff00;}
</style>
