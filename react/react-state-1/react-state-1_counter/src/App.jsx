import "./styles.css";
import { useState } from "react";

export default function App() {
  

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={(handleCountDown) => {
            console.log("🤔");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={(handleCountUp) => {
            console.log("🤔");
          }}
          
        >
          +
        </button>
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  function handleCountUp() {
    setCount(count + 1);
  }
  function handleCountDown() {
    setCount(count - 1);
  }
}
