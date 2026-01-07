// Year
document.getElementById("y").textContent = new Date().getFullYear();

// Reveal on scroll
const els = Array.from(document.querySelectorAll(".reveal"));
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  }
}, { threshold: 0.12 });

els.forEach(el => io.observe(el));

// Theme system
const root = document.documentElement;
const btn = document.getElementById("themeToggle");
const themeMeta = document.getElementById("themeColor");

const setTheme = (t) => {
  root.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);

  // Theme-color for mobile browser UI
  themeMeta.setAttribute("content", (t === "light") ? "#f6f8fb" : "#0b1220");
};

const getStored = () => localStorage.getItem("theme"); // light | dark | auto | null
const cycle = (t) => (t === "dark") ? "light" : (t === "light") ? "auto" : "dark";

// Init
setTheme(getStored() || "auto");

// Click cycles Dark → Light → Auto → Dark
btn.addEventListener("click", () => {
  const next = cycle(root.getAttribute("data-theme") || "auto");
  setTheme(next);
});
