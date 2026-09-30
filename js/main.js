// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the menu after picking a link
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Dark mode toggle (the initial theme is set by the inline script in <head>)
const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.classList.add("theme-transition");
  root.setAttribute("data-theme", next);
  setTimeout(() => root.classList.remove("theme-transition"), 600);
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
});

// Highlight the nav link of the section currently in view
const navAnchors = document.querySelectorAll(".nav-links a");
const sections = [...navAnchors]
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAnchors.forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`)
        );
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));
