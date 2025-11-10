import useName from "./hooks/useName";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setFirstName, setLastName] = useName();
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="first name"
          value={null}
          onChange={(event) => {}}
        />
        <input
          type="text"
          placeholder="last name"
          value={null}
          onChange={(event) => {}}
        />
      </form>
      <h2>The full name:</h2>
      <output>{name}</output>
    </>
  );
}
