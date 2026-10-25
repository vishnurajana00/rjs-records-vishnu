
App.css

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
 
}
.title{
 
  text-align: center;
  margin-top: 15%;
}
.container {
  text-align: center;
  margin-top: 200px;
}

input {
  padding: 10px;
  width: 220px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

h1 {
  color: #333;
}


App.js

import React, { useRef, useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const inputRef = useRef();
  const handleLogin = () => {
    setName(inputRef.current.value);
    setLoggedIn(true);
  };

  return (
    <div className="title">
      {loggedIn ? (
        <h1>Welcome Student {name}</h1>
      ) : (
        <>
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter your name"
          />
          <button onClick={handleLogin}>
            Login
          </button>
        </>
      )}
    </div>
   
  );
}

export default App;


index.css

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}



index.js

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);