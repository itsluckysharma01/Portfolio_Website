import React from "react";
import { SEOHelmet } from "../../utils/SEOHelmet";
import "./css/Contact.css";
import BackButton from "../../components/BackButton";

const Contact = () => {
  return (
    <>
      <SEOHelmet
        title="Contact Lucky Sharma (itsluckysharma01) - Hire Full Stack Developer & AI Engineer"
        description="Contact Lucky Sharma (luckysharma, itsluckysharma01) for freelance projects, job opportunities, or collaborations. Hire a professional Full Stack Developer & AI/ML Engineer for React, Python, and Machine Learning projects."
        keywords="Contact Lucky Sharma, hire Lucky Sharma, luckysharma contact, itsluckysharma01 contact, lucky sharma contact, LuckySharma, LUCKYSHARMA, freelance developer, hire full stack developer, hire AI engineer, project inquiries, professional contact, available for work"
        url="https://itsluckysharma01.in/contact"
        type="article"
      />
      <div className="contact-container">
        <BackButton position="top-left" size="medium" />
        <div className="contact-content">
          <h1 className="contact-title">Get In Touch</h1>

          <div className="contact-card">
            <p className="contact-intro">
              I'd love to hear from you! Whether you have a project in mind or
              just want to connect.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon email">📧</div>
                <div>
                  <h3>Email</h3>
                  <p>itsluckysharma001@gmail.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon phone">📱</div>
                <div>
                  <h3>Phone</h3>
                  <p>+91 88945 99977</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon linkedin">💼</div>
                <div>
                  <h3>LinkedIn</h3>
                  <p>www.linkedin.com/in/lucky-sharma918894599977</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-button-container">
            <button className="contact-button">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
