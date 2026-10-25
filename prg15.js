App.js


import React from "react";
import useToggle from "./useToggle";

function App() {

  const [isOn, toggle] = useToggle(false);

  return (
    <div className="container">

      <h1>Custom Toggle Hook</h1>

      <div className="card">

        <h2>
          Status:
          <span data-testid="status">
            {isOn ? " ON" : " OFF"}
          </span>
        </h2>

        <button onClick={toggle}>
          Toggle
        </button>

      </div>

    </div>
  );
}

export default App;



index.css


body {
margin: 0;
font-family: Arial, sans-serif;
}

#root {
min-height: 100vh;
}


index.js

import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);