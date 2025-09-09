import React from 'react'
import './css/resumeContact.css'

const ResumeContact = () => {
  return (
    <div className="resume-container">
      <div className="resume-content">
        <h1 className="resume-title">
          My Resume
        </h1>
        <div className="resume-section">
          <h2>Professional Summary</h2>
          <p className="resume-description">
            Experienced web developer with expertise in modern technologies and frameworks.
          </p>
        </div>
        
        <div className="resume-section">
          <h2>Skills</h2>
          <ul className="resume-skills-list">
            <li className="resume-skill-item">• React.js & JavaScript</li>
            <li className="resume-skill-item">• HTML5 & CSS3</li>
            <li className="resume-skill-item">• Node.js & Express</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ResumeContact
