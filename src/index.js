import React, { useState } from "react";
import ReactDOM from "react-dom";
import eff from "./eff";
import "./styles.css";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);
  const [total1, setTotal1] = useState(number1 + number2);
  const [total2, setTotal2] = useState(number1 + number2);

  function calculateTotal() {
    setTotal(number1 + number2);
  }
  function calculateTotal1() {
    setTotal1(number1 - number2);
  }
  function calculateTotal2() {
    setTotal2(number1 * number2);
  }

  return (
    <div className="App">
      <h1>Add subtract multiply</h1>

      <div className="number-inputs">
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
          placeholder="0"
        />
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
          placeholder="0"
        />
      </div>

      <button onClick={calculateTotal}>Add Them!</button>

      <button onClick={calculateTotal1}>subtract Them!</button>

      <button onClick={calculateTotal2}>multiply Them!</button>
      <h2>{total}</h2>
      <h2>{total1}</h2>
      <h2>{total2}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
