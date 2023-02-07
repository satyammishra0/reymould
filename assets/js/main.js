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
