import React from 'react'
import './css/About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">
          About Me
        </h1>
        
        <div className="about-main">
          <div className="about-avatar">
            JD
          </div>
          
          <div className="about-info">
            <h2 className="about-name">Lucky Sharma</h2>
            <p className="about-description">
              I'm a passionate full-stack developer with over 3 years of experience creating 
              beautiful and functional web applications. I love turning complex problems into 
              simple, beautiful, and intuitive solutions.
            </p>
            
            <div className="about-tags">
              <span className="about-tag">
                Problem Solver
              </span>
              <span className="about-tag">
                Creative Thinker
              </span>
              <span className="about-tag">
                Team Player
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
