App. js

import React, { useState, useEffect } from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        setMessage("Welcome! The page has loaded successfully.");
    }, []);


Index. js


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <App />
);
 return (
        <div>
            <h1>React useEffect Practical</h1>

            <p id="message">
                {message}
            </p>
        </div>
    );
}

export default App;