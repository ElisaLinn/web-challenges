console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const toggleModeButton = document.querySelector('[data-js="toggle-button"]');

toggleModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});