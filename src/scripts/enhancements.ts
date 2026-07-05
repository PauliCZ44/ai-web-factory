const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");

if (revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  revealItems.forEach((item) => observer.observe(item));
}

const nav = document.querySelector<HTMLElement>("[data-sticky-nav]");

if (nav) {
  const updateNav = () => {
    nav.dataset.scrolled = window.scrollY > 12 ? "true" : "false";
  };

  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });
}

const themeSwitcher = document.querySelector<HTMLSelectElement>(
  "select[data-theme-switcher]",
);

if (themeSwitcher) {
  const storageKey = "site-theme";
  const savedTheme = window.localStorage.getItem(storageKey);

  if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
    themeSwitcher.value = savedTheme;
  }

  themeSwitcher.addEventListener("change", () => {
    document.documentElement.dataset.theme = themeSwitcher.value;
    window.localStorage.setItem(storageKey, themeSwitcher.value);
  });
}
