import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../navBar'
import './css/homePage.css'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    // After 2.5 seconds, show the main content
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(loadingTimer)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="redirect-container">
        <div className="logo">Lucky Sharma Portfolio Website</div>
        <div className="loading-text">Loading Lucky Sharma Portfolio Website...</div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <>
      <NavBar />
      <div className="homepage-main-content">
        <div className="hero-section">
          <h1 className="hero-title">Lucky Sharma</h1>
          <h2 className="hero-subtitle">Interactive Developer Showcase</h2>
          <p className="hero-description">
            Welcome to my portfolio! I'm a passionate developer creating amazing web experiences. 
            Explore my work, skills, and get in touch!
          </p>
          <div className="hero-buttons">
            <button 
              className="cta-button primary"
              onClick={() => navigate('/about')}
            >
              About Me
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => navigate('/skillhub')}
            >
              View My Skills
            </button>
            <button 
              className="cta-button tertiary"
              onClick={() => navigate('/contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
