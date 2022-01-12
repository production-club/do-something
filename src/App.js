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
import FAQ from './pages/Faq';
import FAQEs from './pages/Faq_es'
import FAQCh from './pages/Faq_ch'
import Gallery from './pages/Gallery'

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
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/faq-es" element={<FAQEs />} />
        <Route path="/faq-ch" element={<FAQCh />} />
      </Routes>
    </div>
  );
}

export default App;
