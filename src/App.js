import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./navBar";
import HomePage from "./pages/homePage";
import About from "./pages/About";
import ResumeContact from "./pages/resumeContact";
import SkillHub from "./pages/skillHub";
import TechBlog from "./pages/techBlog";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/skillhub" element={<SkillHub />} />
        <Route path="/techblog" element={<TechBlog />} />
        <Route path="/resume" element={<ResumeContact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
