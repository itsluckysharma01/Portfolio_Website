import React, { useState, useEffect } from 'react';
import './css/resumeContact.css';
import resumePreview from './images/resume/Lucky_Sharma_Resume_Preview.jpg';
import BackButton from '../../components/BackButton';


const ResumeContact = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    budget: '',
    priority: 'normal',
    technologies: [],
    description: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'technologies[]') {
        setFormData(prev => ({
          ...prev,
          technologies: checked 
            ? [...prev.technologies, value]
            : prev.technologies.filter(tech => tech !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const downloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/resume/Lucky_Sharma_Resume.pdf';  // In real implementation, this would be the actual PDF data
    link.download = 'Lucky_Sharma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('Resume download started!', 'success');
  };

  const viewInteractiveResume = () => {
    showNotification('Interactive resume feature coming soon!', 'info');
  };

  const openCalendar = () => {
    showNotification('Calendar booking integration coming soon!', 'info');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'projectType', 'description'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      showNotification('Please fill in all required fields.', 'error');
      return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        projectType: '',
        timeline: '',
        budget: '',
        priority: 'normal',
        technologies: [],
        description: '',
        additionalInfo: ''
      });
      showNotification('Thank you! Your project inquiry has been sent. I\'ll respond within 24 hours.', 'success');
    }, 2000);
  };

  const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button onclick="this.parentElement.parentElement.remove()" class="notification-close">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.classList.add('notification-show');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      notification.classList.add('notification-hide');
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 300);
    }, 5000);
  };

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      if (e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="resume-contact">
      <BackButton position="top-left" size="medium" />
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <div className="nav-logo">
              <a href="/" className="logo-link">
                <svg className="logo-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="logo-text">Lucky Sharma</span>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="nav-desktop">
              <div className="nav-links">
                <a href="/home" className="nav-link">Home</a>
                <a href="/resume" className="nav-link">Resume</a>
                <a href="/skillhub" className="nav-link">SkillHub</a>
                <a href="/Certificates" className="nav-link">Certificates</a>
                <a href="/Projects" className="nav-link">Projects</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/contact" className="nav-link">Contact</a>
                <a href="/login" className="nav-link nav-link-active">Login</a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="nav-mobile-toggle">
              <button onClick={toggleMobileMenu} className="mobile-menu-button">
                <svg className="mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`nav-mobile ${mobileMenuOpen ? 'nav-mobile-open' : ''}`}>
          <div className="nav-mobile-content">
            <a href="/" className="nav-mobile-link">Home</a>
            <a href="/resume" className="nav-mobile-link">Resume</a>
            <a href="/skillhub" className="nav-mobile-link">SkillHub</a>
            <a href="/Certificates" className="nav-mobile-link">Certificates</a>
            <a href="/Projects" className="nav-mobile-link">Projects</a>
            <a href="/about" className="nav-mobile-link">About</a>
            <a href="/contact" className="nav-mobile-link nav-mobile-link-active">Contact</a>
            <a href="/login" className="nav-link nav-link-active">Login</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Let's Build Something <span className="text-gradient">Amazing Together</span>
            </h1>
            <p className="hero-description">
              Ready to collaborate on your next project? Download my resume, explore my professional timeline, or get in touch directly.
            </p>
            
            {/* Quick Actions */}
            <div className="hero-actions">
              <button onClick={downloadResume} className="btn-primary">
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-4-4m4 4l4-4m-6 8h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span>Download Resume</span>
              </button>
              <a href="#contact-form" className="btn-secondary">
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                <span>Start a Project</span>
              </a>
            </div>
          </div>
          
          {/* Availability Status */}
          <div className="availability-status">
            <div className="card">
              <div className="availability-header">
                <div className="status-indicator"></div>
                <span className="status-text">Available for New Projects</span>
              </div>
              <p className="availability-description">
                Currently accepting new client projects and collaboration opportunities. Next availability: <span className="highlight">December 2025</span>
              </p>
              <div className="services-grid">
                <div className="service-item">
                  <div className="service-title primary">Full-Stack Development</div>
                  <div className="service-subtitle">Web Applications</div>
                </div>
                <div className="service-item">
                  <div className="service-title secondary">Data Science and Analytics</div>
                  <div className="service-subtitle">Data Analysis & Manipulation</div>
                </div>
                <div className="service-item">
                  <div className="service-title accent">Code Reviews</div>
                  <div className="service-subtitle">Quality Assurance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume & Professional Timeline */}
      <section id="resume-timeline" className="resume-timeline-section">
        <div className="container">
          <div className="resume-timeline-grid">
            {/* Resume Download & Preview */}
            <div className="resume-section">
              <h2 className="section-title">
                Professional <span className="text-gradient">Resume</span>
              </h2>
              
              {/* Resume Preview Card */}
              <div className="resume-preview-card card">
                <div className="resume-preview">
                  <div className="resume-content" onClick={downloadResume}>
                    <img 
                      src={resumePreview} 
                      alt="Lucky Sharma Resume Preview" 
                      className="resume-image-preview" 
                      loading="lazy"
                    />
                  </div>
                  <div className="resume-overlay"></div>
                </div>
                
                <div className="resume-header">
                  <h3 className="resume-name">Lucky Sharma</h3>
                  <p className="resume-role">Full-Stack Developer And Data Analytics</p>
                  
                </div>
                
                {/* <div className="resume-sections">
                  <div className="resume-section-item">
                    <h4 className="resume-section-title secondary">Experience</h4>
                    <div className="resume-section-content">
                      <p>B.Tech Computer Science and Engineering</p>
                      <p>Govt. College Dharamshala-HPTU (2022-Present)</p>
                    </div>
                  </div>
                  <div className="resume-section-item">
                    <h4 className="resume-section-title secondary">Skills</h4>
                    <div className="resume-section-content">
                      <p>Computer Science Engineering</p>
                    </div>
                  </div>
                </div> */}
                
                <div className="resume-actions">
                  <button onClick={downloadResume} className="btn-primary flex-1">
                    <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-4-4m4 4l4-4m-6 8h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    Download PDF
                  </button>
                  <button onClick={viewInteractiveResume} className="btn-secondary flex-1">
                    <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    View Interactive
                  </button>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number primary">1</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number secondary">10+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
              </div>
            </div>
            
            {/* Professional Timeline */}
            <div className="timeline-section">
              <h2 className="section-title">
                Career <span className="text-gradient">Timeline</span>
              </h2>
              
              <div className="timeline">
                {/* Timeline Item 1 */}
                <div className="timeline-item">
                  <div className="timeline-icon primary">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3 className="timeline-title">B.Tech (Bachelor of Technology) - HPTU</h3>
                      <span className="timeline-badge primary">Current</span>
                    </div>
                    <p className="timeline-company">Govt. College Dharamshala School of Computer Science and Engineering Kangra-HP | • 2022 - Present</p>
                    <p className="timeline-description">Developing and implementing software solutions for academic projects. Collaborating with peers on complex programming assignments and group projects. Applying foundational knowledge of data structures, algorithms, and modern software development practices.</p>
                    <div className="timeline-tags">
                      <span className="tag primary">Computer Science and Engineering</span>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Item 2 */}
                <div className="timeline-item">
                  <div className="timeline-icon secondary">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Senior Secondary - HP BOARD</h3>
                    <p className="timeline-company">GSSS Kachhiari | Kangra-HP | • 2019 - 2021</p>
                    <p className="timeline-description">Completed Senior Secondary education with a focus on Physics, Chemistry, and Mathematics (PCM). This provided a strong foundation in core scientific principles and honed analytical and problem-solving skills.</p>
                    <div className="timeline-tags">
                      <span className="tag secondary">Physics</span>
                      <span className="tag secondary">Chemistry</span>
                      <span className="tag secondary">Math</span>
                      <span className="tag secondary">English</span>
                      <span className="tag secondary">Physical Education</span>
                      
                    </div>
                  </div>
                </div>
                
                {/* Timeline Item 3 */}
                <div className="timeline-item">
                  <div className="timeline-icon accent">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Matriculation - HP BOARD</h3>
                    <p className="timeline-company">Govt. High School Sinyur | Chamba-HP |• March 2019</p>
                    <p className="timeline-description">Attained Secondary School Certificate (SSC), demonstrating a strong foundation in core subjects including Mathematics, Science, and Social Studies. Developed essential skills in problem-solving and critical thinking.</p>
                    <div className="timeline-tags">
                      <span className="tag accent">Sports</span>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & References */}
      <section id="credentials" className="credentials-section">
        <div className="container">
          <h2 className="section-title">
            Technical <span className="text-gradient">Certifications</span>
          </h2>
          
          <div className="certifications-list">
                {/* Certification 1 */}
                <div className="certification-card card">
                  <div className="certification-image-container">
                    <img src="/images/Certificates/01_Oracle_Professional_Data_Science.jpg" alt="Oracle Data Science" className="certification-logo" loading="lazy" onClick={() => window.open('/images/Certificates/01_Oracle_Professional_Data_Science.jpg','_blank')} />
                  </div>
                  <div className="certification-content">
                    <div className="certification-header">
                      <div className="certification-info">
                        <div>
                          <h3 className="certification-title">Oracle Cloud Infrastructure 2025 Certified Data Science Professional</h3>
                          <p className="certification-issuer">Oracle University</p>
                        </div>
                        <span className="certification-badge primary">Valid</span>
                      </div>
                    </div>
                    <p className="certification-description">Professional level certification demonstrating expertise in data science, machine learning, and analytics using Oracle technologies.</p>
                    <div className="certification-footer">
                      <span className="certification-date">Issued: Sep. 2025</span>
                      <a className="certification-verify primary">Verify Certificate</a>
                    </div>
                  </div>
                </div>
                
                {/* Certification 2 */}
                <div className="certification-card card" >
                  <div className="certification-image-container">
                    <img src="/images/Certificates/02_Oracle_Cloud_Infrastructure.jpg" alt="Oracle Data Science" className="certification-logo" loading="lazy" onClick={() => window.open('/images/Certificates/02_Oracle_Cloud_Infrastructure.jpg','_blank')} />
                  </div>
                  <div className="certification-content">
                    <div className="certification-header">
                      <div className="certification-info">
                        <div>
                          <h3 className="certification-title">Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</h3>
                          <p className="certification-issuer">Oracle University</p>
                        </div>
                        <span className="certification-badge secondary">Valid</span>
                      </div>
                    </div>
                    <p className="certification-description">The Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate certification validates your foundational knowledge of AI, Machine Learning, and Generative AI, including Large Language Models (LLMs).</p>
                    <div className="certification-footer">
                      <span className="certification-date">Issued: Sep.-2025</span>
                      <a  className="certification-verify secondary">Verify Certificate</a>
                    </div>
                  </div>
                </div>
                
                {/* Certification 3 */}
                <div className="certification-card card">
                  <div className="certification-image-container">
                    <img src="/images/Certificates/04_NIELIT-Internship_Certificate.jpg" alt="Oracle Data Science" className="certification-logo" loading="lazy" onClick={() => window.open('/images/Certificates/04_NIELIT-Internship_Certificate.jpg','_blank')} />
                  </div>
                  <div className="certification-content">
                    <div className="certification-header">
                      <div className="certification-info">
                        <div>
                          <h3 className="certification-title">Data Curation Using Python</h3>
                          <p className="certification-issuer">NIELIT-Ropar(IndiaAi)</p>
                        </div>
                        <span className="certification-badge accent">Valid</span>
                      </div>
                    </div>
                    <p className="certification-description">Demonstrated expertise in data curation using Python, proficiently employing Pandas and NumPy to clean, transform, and organize large datasets for analysis.</p>
                    <div className="certification-footer">
                      <span className="certification-date">Issued: July 2025</span>
                      <a className="certification-verify accent">Verify Certificate</a>
                    </div>
                  </div>
                </div>

                {/* Certification 4 */}
                <div className="certification-card card">
                  <div className="certification-image-container">
                    <img src="/images/Certificates/07_Udemy_Python.jpg" alt="Oracle Data Science" className="certification-logo" loading="lazy" onClick={() => window.open('/images/Certificates/07_Udemy_Python.jpg','_blank')} />
                  </div>
                  <div className="certification-content">
                    <div className="certification-header">
                      <div className="certification-info">
                        <div>
                          <h3 className="certification-title">Complete Python Bootcamp for Everyone from Zero to Hero</h3>
                          <p className="certification-issuer">Udemy</p>
                        </div>
                        <span className="certification-badge primary">Valid</span>
                      </div>
                    </div>
                    <p className="certification-description">Applied theoretical knowledge to build practical, project-based applications, demonstrating the ability to write clean, efficient, and well-documented code to solve real-world problems.</p>
                    <div className="certification-footer">
                      <span className="certification-date">Issued: June 2024</span>
                      <a className="certification-verify primary">Verify Certificate</a>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </section>

      {/* Contact Form & Methods */}
      <section id="contact-form" className="contact-section">
        <div className="container">
          <div className="contact-header">
            <h2 className="section-title">
              Start Your <span className="text-gradient">Project Today</span>
            </h2>
            <p className="section-description">
              Ready to collaborate? Choose your preferred way to get in touch and let's discuss how we can bring your vision to life.
            </p>
          </div>
          
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="card">
                <h3 className="form-title">Project Inquiry Form</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  {/* Personal Information */}
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">First Name *</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        required 
                        className="form-input" 
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">Last Name *</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        required 
                        className="form-input" 
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="form-input" 
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company" className="form-label">Company/Organization</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        className="form-input" 
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="projectType" className="form-label">Project Type *</label>
                      <select 
                        id="projectType" 
                        name="projectType" 
                        required 
                        className="form-input"
                        value={formData.projectType}
                        onChange={handleInputChange}
                      >
                        <option value="">Select project type</option>
                        <option value="web-application">Web Application</option>
                        <option value="mobile-app">Mobile Application</option>
                        <option value="e-commerce">E-commerce Platform</option>
                        <option value="api-development">API Development</option>
                        <option value="consulting">Technical Consulting</option>
                        <option value="code-review">Code Review</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="timeline" className="form-label">Project Timeline</label>
                      <select 
                        id="timeline" 
                        name="timeline" 
                        className="form-input"
                        value={formData.timeline}
                        onChange={handleInputChange}
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP (Rush project)</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-months-plus">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="budget" className="form-label">Budget Range</label>
                      <select 
                        id="budget" 
                        name="budget" 
                        className="form-input"
                        value={formData.budget}
                        onChange={handleInputChange}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under Rs.-5,000</option>
                        <option value="5k-15k">Rs.-5,000 - Rs.-15,000</option>
                        <option value="15k-30k">Rs.-15,000 - Rs.-30,000</option>
                        <option value="30k-50k">Rs.-30,000 - Rs.-50,000</option>
                        <option value="50k-plus">Rs.-50,000+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="priority" className="form-label">Priority Level</label>
                      <select 
                        id="priority" 
                        name="priority" 
                        className="form-input"
                        value={formData.priority}
                        onChange={handleInputChange}
                      >
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Technical Requirements */}
                  <div className="form-group">
                    <label className="form-label">Preferred Technologies</label>
                    <div className="technologies-grid">
                      {['react', 'vue', 'nodejs', 'python', 'aws', 'docker', 'mongodb', 'postgresql'].map(tech => (
                        <label key={tech} className="tech-checkbox">
                          <input 
                            type="checkbox" 
                            name="technologies[]" 
                            value={tech}
                            checked={formData.technologies.includes(tech)}
                            onChange={handleInputChange}
                          />
                          <span>{tech.charAt(0).toUpperCase() + tech.slice(1)}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Description */}
                  <div className="form-group">
                    <label htmlFor="description" className="form-label">Project Description *</label>
                    <textarea 
                      id="description" 
                      name="description" 
                      rows="5" 
                      required 
                      className="form-textarea" 
                      placeholder="Please describe your project, goals, target audience, and any specific requirements or challenges you're facing..."
                      value={formData.description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  
                  {/* Additional Information */}
                  <div className="form-group">
                    <label htmlFor="additionalInfo" className="form-label">Additional Information</label>
                    <textarea 
                      id="additionalInfo" 
                      name="additionalInfo" 
                      rows="3" 
                      className="form-textarea" 
                      placeholder="Any additional details, existing systems to integrate with, team structure, or specific questions..."
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="form-footer">
                    <p className="form-note">
                      * Required fields. I'll respond within 24 hours.
                    </p>
                    <button type="submit" className="btn-primary" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <svg className="btn-icon animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                          </svg>
                          Send Project Inquiry
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Contact Methods & Calendar */}
            <div className="contact-sidebar">
              {/* Direct Contact Methods */}
              <div className="card">
                <h3 className="sidebar-title">Direct Contact</h3>
                <div className="contact-methods">
                  <a href="mailto:alex.rodriguez@devportfolio.pro" className="contact-method">
                    <div className="contact-icon primary">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-label">Email</div>
                      <div className="contact-value">itsluckysharma001@gmail.com</div>
                    </div>
                  </a>
                  
                  <a href="#" className="contact-method">
                    <div className="contact-icon secondary">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-label">LinkedIn</div>
                      <div className="contact-value">Lucky Sharma</div>
                    </div>
                  </a>
                  
                  <a href="tel:+15551234567" className="contact-method">
                    <div className="contact-icon accent">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-label">Phone</div>
                      <div className="contact-value">+91 88945 99977</div>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Calendar Booking */}
              <div className="card">
                <h3 className="sidebar-title">Schedule a Call</h3>
                <p className="calendar-description">
                  Book a free 30-minute consultation to discuss your project requirements and explore how we can work together.
                </p>
                
                {/* Calendar Widget Placeholder */}
                <div className="calendar-widget">
                  <svg className="calendar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <h4 className="calendar-title">Available Time Slots</h4>
                  <p className="calendar-hours">Monday - Friday, 9 AM - 5 PM PST</p>
                  <button onClick={openCalendar} className="btn-secondary calendar-button">
                    Book Consultation Call
                  </button>
                </div>
                
                {/* Response Time */}
                <div className="response-time">
                  <div className="response-info">
                    <svg className="response-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Typical response time: 24 hours</span>
                  </div>
                </div>
              </div>
              
              {/* Communication Preferences */}
              <div className="card">
                <h3 className="sidebar-title">Communication Style</h3>
                <div className="communication-list">
                  <div className="communication-item">
                    <svg className="communication-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Clear project requirements discussion</span>
                  </div>
                  <div className="communication-item">
                    <svg className="communication-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Regular progress updates</span>
                  </div>
                  <div className="communication-item">
                    <svg className="communication-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Collaborative development approach</span>
                  </div>
                  <div className="communication-item">
                    <svg className="communication-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Transparent timeline management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <svg className="footer-logo-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="footer-logo-text">Lucky Sharma Portfolio</span>
              </div>
              <p className="footer-description">
                Crafting exceptional digital experiences through clean code, thoughtful design, and innovative problem-solving.
              </p>
              <div className="footer-social">
                <a href="https://github.com/itsluckysharma01" target="_blank" className="social-link">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/lucky-sharma918894599977" target="_blank" className="social-link">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="footer-links">
              <h4 className="footer-links-title">Quick Links</h4>
              <ul className="footer-links-list">
                <li><a href="/about" className="footer-link">About</a></li>
                <li><a href="/skills" className="footer-link">Skills</a></li>
                <li><a href="/projects" className="footer-link">Projects</a></li>
                <li><a href="/Certificates" className="footer-link">Certificates</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div className="footer-links">
              <h4 className="footer-links-title">Get in Touch</h4>
              <ul className="footer-links-list">
                <li><a href="/contact" className="footer-link">Contact</a></li>
                <li><a href="/resume" className="footer-link">Resume</a></li>
                <li><a href="#" className="footer-link">Schedule Call</a></li>
                <li><a href="#" className="footer-link">Collaboration</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Lucky Sharma. All Rights Reserved. Built with passion and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResumeContact;
