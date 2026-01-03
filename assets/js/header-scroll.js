document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 150 && currentScrollY > lastScrollY) {
      // scrolling down
      header.classList.add("is-hidden");
    } else {
      // scrolling up
      header.classList.remove("is-hidden");
    }

    lastScrollY = currentScrollY;
  });
});
