import React from 'react'
import './css/Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">
          Get In Touch
        </h1>
        
        <div className="contact-card">
          <p className="contact-intro">
            I'd love to hear from you! Whether you have a project in mind or just want to connect.
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon email">
                📧
              </div>
              <div>
                <h3>Email</h3>
                <p>itsluckysharma001@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon phone">
                📱
              </div>
              <div>
                <h3>Phone</h3>
                <p>+91 88945 99977</p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon linkedin">
                💼
              </div>
              <div>
                <h3>LinkedIn</h3>
                <p>www.linkedin.com/in/lucky-sharma918894599977</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-button-container">
          <button className="contact-button">
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
