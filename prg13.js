App.js


import React, { useState } from "react";

function App() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [feedback, setFeedback] = useState("");
const [error, setError] = useState("");
const [success, setSuccess] = useState("");


const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (name.trim() === "") {
        setError("Please enter your name.");
        return;
    }

    if (email.trim() === "") {
        setError("Please enter your email.");
        return;
    }

    if (!email.includes("@")) {
        setError("Please enter a valid email address.");
        return;
    }

    if (feedback.trim() === "") {
        setError("Please enter your feedback.");
        return;
    }

    setSuccess("Feedback submitted successfully.");

    setName("");
    setEmail("");
    setFeedback("");
};

return (
    <div className="container">
        <h1>Student Feedback Form</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>

            <br />

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>

            <br />

            <div>
                <label htmlFor="feedback">Feedback:</label>
                <br />
                <textarea
                    id="feedback"
                    rows="5"
                    placeholder="Enter your feedback"
                    value={feedback}
                    onChange={(event) => setFeedback(event.target.value)}
                />
            </div>

            <br />

            {error && <p style={{ color: "red" }}>{error}</p>}

            {success && <p style={{ color: "green" }}>{success}</p>}

            <button type="submit">Submit Feedback</button>
        </form>
    </div>
);


}

export default App;


index.js


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <App />
);