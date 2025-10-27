import { renderElement } from "./utils.js";

console.clear();

const url = "https://swapi.py4e.com/api/people";

// function fetchData(url) {
//   console.log(renderElement);
// }

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
}


fetchData();
