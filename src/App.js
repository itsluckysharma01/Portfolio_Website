import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./navBar";
import HomePage from "./pages/components/homePage";
import About from "./pages/components/About";
import ResumeContact from "./pages/components/resumeContact";
import SkillHub from "./pages/components/skillHub";
import Certificates from "./pages/components/Certificates";
import Login from "./pages/components/Login";
import Contact from "./pages/components/Contact";
import Projects from "./pages/components/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/contact"
          element={
            <>
              <NavBar />
              <Contact />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <NavBar />
              <About />
            </>
          }
        />
        <Route
          path="/skillhub"
          element={
            <>
              <NavBar />
              <SkillHub />
            </>
          }
        />
        <Route
          path="/Certificates"
          element={
            <>
              <NavBar />
              <Certificates />
            </>
          }
        />
        <Route
          path="/resume"
          element={
            <>
              <NavBar />
              <ResumeContact />
            </>
          }
        />
        <Route
          path="/Projects"
          element={
            <>
              <NavBar />
              <Projects />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <NavBar />
              <Login />
            </>
          }
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
