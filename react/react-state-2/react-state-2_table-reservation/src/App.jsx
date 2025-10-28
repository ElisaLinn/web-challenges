import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

const [people, setPeople] = useState(0);

  function increase (){
       setPeople(people + 1);
  }

function decrease (){
      setPeople(people - 1);}



export default function App() {
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter />
      <p>You are going to reserve a table for 2 people.</p>
    </div>
  );
}
