const menuToggle = document.getElementById("mobilenav");
const mobileNav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

// Optional: Close menu when a link is clicked
mobileNav.querySelectorAll("a, button").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.add("hidden");
  });
});