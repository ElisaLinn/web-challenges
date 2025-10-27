import React from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  return (
    <main className="flex-container">
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
      <div>
        <boxes color="#007bff"></boxes>
        <Boxes color="#fc3" />
        <Boxes color="#ff3333" />
      </div>
    </main>
  );
}

function Boxes({ color }) {
  return <box color={color}></box>;
}
