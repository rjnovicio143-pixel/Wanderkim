// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Vlogs from "./pages/Vlogs";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Booking from "./pages/Booking";


import './App.css';

function App() {
  return (
    <Router>
      {/* mao ni back ground vid nato na function */}
      <div className="video-container">
        <video autoPlay muted loop className="video-bg">
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>

      
  <div className="page-wrapper">
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vlogs" element={<Vlogs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
