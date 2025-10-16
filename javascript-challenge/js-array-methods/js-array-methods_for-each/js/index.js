const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

// Task 1: Using forEach with arrow function
colors.forEach((color) => {
  // Create a new div element
  const colorBox = document.createElement("div");
  
  // Add the 'color-box' class
  colorBox.classList.add("color-box");
  
  // Set the background color to the current hex code
  colorBox.style.backgroundColor = color;
  
  // Add the element to the page (body)
  document.body.appendChild(colorBox);
});

// Task 2: Using forEach with function reference
function renderColorBox(color) {
  // Create a new div element
  const colorBox = document.createElement("div");
  
  // Add the 'color-box' class
  colorBox.classList.add("color-box");
  
  // Set the background color to the current hex code
  colorBox.style.backgroundColor = color;
  
  // Add the element to the page (body)
  document.body.appendChild(colorBox);
}

// Use forEach with the function reference
colors.forEach(renderColorBox);
