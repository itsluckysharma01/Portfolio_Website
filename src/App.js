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
          path="/techblog"
          element={
            <>
              <NavBar />
              <TechBlog />
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
