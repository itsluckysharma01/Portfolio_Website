import React from 'react'
import './css/skillHub.css'

const SkillHub = () => {
  return (
    <div className="skillhub-container">
      <div className="skillhub-content">
        <h1 className="skillhub-title">
          Skill Hub
        </h1>
        
        <div className="skillhub-grid">
          <div className="skillhub-card frontend">
            <h3>Frontend Development</h3>
            <ul className="skillhub-skills-list">
              <li className="skillhub-skill-item">• React.js</li>
              <li className="skillhub-skill-item">• JavaScript (ES6+)</li>
              <li className="skillhub-skill-item">• HTML5 & CSS3</li>
              <li className="skillhub-skill-item">• Responsive Design</li>
            </ul>
          </div>
          
          <div className="skillhub-card backend">
            <h3>Backend Development</h3>
            <ul className="skillhub-skills-list">
              <li className="skillhub-skill-item">• Node.js</li>
              <li className="skillhub-skill-item">• Express.js</li>
              <li className="skillhub-skill-item">• Database Management</li>
              <li className="skillhub-skill-item">• API Development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillHub
