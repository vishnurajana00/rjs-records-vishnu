App.js


import React from "react"; 
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link 
} from "react-router-dom"; 
 
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Contact from "./pages/Contact"; 
 
function App() { 
  return ( 
    <BrowserRouter> 
      <div className="app"> 
        <header className="header"> 
          <h1>My Website</h1> 
 
          <nav className="navbar"> 
            <Link to="/">Home</Link> 
            <Link to="/aboutus">About Us</Link> 
            <Link to="/contactus">Contact Us</Link> 
          </nav> 
        </header> 
 
        <main className="main-content"> 
          <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/aboutus" element={<About />} /> 
            <Route path="/contactus" element={<Contact />} /> 
          </Routes> 
        </main> 
 
        <footer className="footer"> 
          <p>© 2026 My Website. All rights reserved.</p> 
        </footer> 
      </div> 
    </BrowserRouter> 
  ); 
} 
 
export default App;



index.css


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f4f7fb;
  color: #333;
  line-height: 1.6;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #1e3a8a;
  color: white;
  text-align: center;
  padding: 25px 15px;
}

.header h1 {
  margin-bottom: 18px;
  font-size: 32px;
}

.navbar {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.navbar a:hover {
  background-color: #3b82f6;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 20px;
}

.page {
  width: 100%;
  max-width: 800px;
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.page h2 {
  color: #1e3a8a;
  margin-bottom: 20px;
  font-size: 28px;
}

.page p {
  margin-bottom: 15px;
  font-size: 17px;
}

.contact-details {
  margin-top: 25px;
  padding: 20px;
  background-color: #eff6ff;
  border-radius: 8px;
}

.footer {
  background-color: #1e293b;
  color: white;
  text-align: center;
  padding: 18px;
}

.footer p {
  margin: 0;
}

@media (max-width: 600px) {
  .header h1 {
    font-size: 26px;
  }

  .navbar {
    gap: 8px;
  }

  .navbar a {
    font-size: 14px;
    padding: 8px;
  }

  .main-content {
    padding: 25px 15px;
  }

  .page {
    padding: 25px 20px;
  }

  .page h2 {
    font-size: 24px;
  }
}




index.js


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);