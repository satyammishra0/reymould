// ---------------------
// Accordion JS
// ---------------------

document.addEventListener("click", (e) => {
  if (!e.target.matches("#toggle-btn")) return;
  const accordion = e.target.closest(".accordion");
  const accordionContent = accordion.querySelector(".accordion-content");
  accordionContent.classList.toggle("show");
  e.target.innerText = e.target.innerText === "+" ? "-" : "+";
});

// ---------------------
// Header Transformation
// ---------------------

const mobileNav = document.querySelector(".mobile-navbar-btn");

const header = document.querySelector(".header");

function toggleMobileNav() {
  console.log("active ");
  header.classList.toggle("active");
}

mobileNav.addEventListener("click", () => toggleMobileNav());
