import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Volunteer from "./pages/Volunteer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/volunteer" exact element={<Volunteer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
