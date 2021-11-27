import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Sidebar from "./components/Navbar/Sidebar";
import Thankyou from "./pages/Thankyou";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </div>
  );
}

export default App;
