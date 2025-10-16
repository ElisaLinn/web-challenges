console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newListElement = document.createElement("li");
  newListElement.classList.add("toast-container__message");
  newListElement.textContent = "I'm a toast message";
  toastContainer.append(newListElement);
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
  // Exercise: Clear the stack of toast messages
});
//  newListElement.textContent = toastInput.value || "Standard Toast-Nachricht";
//   toastContainer.append(newListElement);
//   toastInput.value = ""; // Input-Feld nach dem Hinzufügen leeren
