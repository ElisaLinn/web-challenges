console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

// Error-Message initial verstecken
hideTosError();

// Event Listener für Checkbox - sofortige Reaktion auf Änderungen
tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  
  // Prüfe ob TOS-Checkbox angehakt ist
  if (!tosCheckbox.checked) {
    showTosError();
    return; // Early return - Alert wird nicht ausgeführt
  }
  
  hideTosError();

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
