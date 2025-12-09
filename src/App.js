import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavBar from "./navBar";
import HomePage from "./pages/components/homePage";
import About from "./pages/components/About";
import ResumeContact from "./pages/components/resumeContact";
import SkillHub from "./pages/components/skillHub";
import Certificates from "./pages/components/Certificates";
import Login from "./pages/components/Login";
import Contact from "./pages/components/Contact";
import Projects from "./pages/components/Projects";
import "./App.css";

// Scroll to top component for smooth navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    // Enable smooth scroll behavior globally
    document.documentElement.style.scrollBehavior = "smooth";

    // Handle anchor link clicks for smooth scrolling
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (target && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute("href"));
        if (element) {
          const offset = 80; // Offset for fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL || "/"}>
      <ScrollToTop />
      <NavBar />
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
