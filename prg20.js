App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BlogLayout from "./components/BlogLayout";
import Blog from "./pages/Blog";
import Post1 from "./pages/Post1";
import Post2 from "./pages/Post2";
import Post3 from "./pages/Post3";
import "./index.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<Blog />} />
          <Route path="post1" element={<Post1 />} />
          <Route path="post2" element={<Post2 />} />
          <Route path="post3" element={<Post3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


index.css


* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f2f5f9;
  color: #222;
}

header {
  background: #243b55;
  color: white;
  padding: 20px;
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 15px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

.content {
  max-width: 750px;
  margin: 30px auto;
  padding: 25px;
  background: white;
  border-radius: 8px;
  line-height: 1.7;
}

.post-list li {
  margin: 12px 0;
}

.post-list a {
  color: #1756a9;
  text-decoration: none;
}

.post-list a:hover {
  text-decoration: underline;
}

.button {
  display: inline-block;
  background: #243b55;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  text-decoration: none;
}

footer {
  background: #243b55;
  color: white;
  padding: 15px;
  text-align: center;
  margin-top: 40px;
}

@media (max-width: 600px) {
  .content {
    margin: 15px;
    padding: 18px;
  }
}



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