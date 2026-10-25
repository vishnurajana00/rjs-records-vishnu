
App.css

.App {
  text-align: center;
  margin-top: 100px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #222;
  font-size: 32px;
}

h2 {
  font-size: 28px;
  margin: 25px 0;
}

button {
  padding: 10px 25px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
}

button:hover {
  background-color: #0056b3;
}




App.js

import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1>Counter Application</h1>

      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;




index.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);