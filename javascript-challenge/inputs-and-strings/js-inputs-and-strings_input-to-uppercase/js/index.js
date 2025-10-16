console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const ButtonUppercase = document.querySelector('[data-js="button-uppercase"]');

firstInput.value; //evaluates to Mario
ButtonUppercase.addEventListener("click", () => {
  firstInput.value = firstInput.value = "Luigi";
});
