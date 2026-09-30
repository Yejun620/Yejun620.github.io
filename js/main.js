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
