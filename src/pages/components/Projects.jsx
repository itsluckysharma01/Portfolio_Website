import React, { useState, useEffect } from 'react';
import BackButton from '../../components/BackButton';
import './css/Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectsData = [
    {
      id: 1,
      title: 'Potato Leaf Diseases Detection',
      category: 'ai-ml',
      type: 'Machine Learning',
      status: 'Completed',
      year: '2024',
      image: require('./images/projectimg/project1.png'),
      description: 'An AI-powered computer vision system for detecting and classifying potato leaf diseases using deep learning techniques. The system achieves 99.8% accuracy in disease detection and provides real-time analysis for farmers.',
      longDescription: 'This project addresses a critical agricultural challenge by developing an intelligent system that can identify various potato leaf diseases with high accuracy. The system uses advanced computer vision techniques and deep learning models to analyze leaf images and provide instant disease diagnosis. This helps farmers take timely action to prevent crop loss and improve yield.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Flask', 'NumPy', 'Pandas'],
      features: [
        'Real-time disease detection',
        '99.8% accuracy rate',
        'Mobile-friendly interface',
        'Batch processing capability',
        'Detailed disease reports',
        'Integration with farming apps'
      ],
      challenges: [
        'Handling diverse lighting conditions in field images',
        'Managing large datasets of leaf images',
        'Optimizing model performance for mobile deployment',
        'Ensuring accuracy across different disease types'
      ],
      solutions: [
        'Implemented advanced image preprocessing techniques',
        'Used data augmentation to improve model robustness',
        'Optimized model architecture for mobile deployment',
        'Created comprehensive training dataset with expert annotations'
      ],
      results: [
        '99.8% accuracy in disease detection',
        'Reduced diagnosis time from hours to seconds',
        'Successfully deployed on Hugging Face Spaces',
        'Positive feedback from agricultural community'
      ],
      liveUrl: 'https://huggingface.co/spaces/itsluckysharma01/Potato_Diseases_Detection_with_Deep_Learning',
      githubUrl: 'https://github.com/itsluckysharma01/Potato_Leaf_Diseases_Detection_with_Deep-Learning-Tenserflow.git',
      demoUrl: 'https://huggingface.co/spaces/itsluckysharma01/Potato_Diseases_Detection_with_Deep_Learning',
      screenshots: [
        require('./images/projectimg/project1.png')
      ],
      metrics: {
        accuracy: '99.8%',
        processingTime: '< 2 seconds',
        modelSize: '15MB',
        trainingEpochs: '50'
      }
    },
    {
      id: 2,
      title: 'Full-Stack Authentication System',
      category: 'web-dev',
      type: 'Full-Stack',
      status: 'Completed',
      year: '2024',
      image: require('./images/projectimg/project2.png'),
      description: 'A complete full-stack authentication system with React frontend and Express backend, featuring secure user registration, login, password reset, and session management.',
      longDescription: 'This comprehensive authentication system provides a secure and scalable solution for user management. Built with modern web technologies, it includes advanced security features like JWT tokens, password hashing, email verification, and role-based access control. The system is designed to handle high traffic and provides a seamless user experience.',
      technologies: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'JWT', 'Bcrypt', 'Nodemailer'],
      features: [
        'User registration and login',
        'Email verification system',
        'Password reset functionality',
        'JWT-based authentication',
        'Role-based access control',
        'Session management',
        'Input validation and sanitization'
      ],
      challenges: [
        'Implementing secure password hashing',
        'Managing JWT token expiration',
        'Handling concurrent user sessions',
        'Ensuring data validation and security'
      ],
      solutions: [
        'Used bcrypt for secure password hashing',
        'Implemented refresh token mechanism',
        'Created session management system',
        'Added comprehensive input validation'
      ],
      results: [
        '100% secure authentication flow',
        'Successfully deployed on Vercel',
        'Handles 1000+ concurrent users',
        'Zero security vulnerabilities'
      ],
      liveUrl: 'https://sign-up-form-lo8dkmb3l-lucky-sharmas-projects-d189830d.vercel.app/signup',
      githubUrl: 'https://github.com/itsluckysharma01/full-stack-authentication-system-Signup-login-Form.git',
      demoUrl: 'https://sign-up-form-lo8dkmb3l-lucky-sharmas-projects-d189830d.vercel.app/signup',
      screenshots: [
        require('./images/projectimg/project2.png')
      ],
      metrics: {
        users: '1000+',
        responseTime: '< 200ms',
        uptime: '99.9%',
        securityScore: 'A+'
      }
    },
    {
      id: 3,
      title: 'Quick Sign - Digital Signature App',
      category: 'web-dev',
      type: 'Frontend',
      status: 'Completed',
      year: '2023',
      image: require('./images/projectimg/project3.png'),
      description: 'A web-based digital signature application built with HTML, CSS, and JavaScript that allows users to create, customize, and save digital signatures with various tools and options.',
      longDescription: 'Quick Sign is an intuitive digital signature application that provides a comprehensive solution for creating and managing digital signatures. The application features a responsive design, multiple drawing tools, signature customization options, and the ability to save signatures in various formats. It\'s perfect for businesses and individuals who need to create professional digital signatures quickly and easily.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'Local Storage'],
      features: [
        'Digital signature creation',
        'Multiple drawing tools (pen, brush, marker)',
        'Color and thickness customization',
        'Signature saving and loading',
        'Export to various formats',
        'Responsive design',
        'Touch support for mobile devices'
      ],
      challenges: [
        'Implementing smooth drawing on canvas',
        'Handling different input devices (mouse, touch)',
        'Managing signature data storage',
        'Creating intuitive user interface'
      ],
      solutions: [
        'Used HTML5 Canvas with optimized drawing algorithms',
        'Implemented touch and mouse event handling',
        'Created local storage system for signatures',
        'Designed user-friendly interface with clear controls'
      ],
      results: [
        'Smooth drawing experience across devices',
        'Successfully deployed on GitHub Pages',
        'Positive user feedback',
        'Mobile-responsive design'
      ],
      liveUrl: 'https://itsluckysharma01.github.io/Project-Quick-Signature/',
      githubUrl: 'https://github.com/itsluckysharma01/Project-Quick-Signature.git',
      demoUrl: 'https://itsluckysharma01.github.io/Project-Quick-Signature/',
      screenshots: [
        require('./images/projectimg/project3.png')
      ],
      metrics: {
        users: '500+',
        loadTime: '< 1 second',
        compatibility: '95%',
        userRating: '4.8/5'
      }
    },
    {
      id: 4,
      title: 'Comprehensive Dataset Collection',
      category: 'data-science',
      type: 'Data Science',
      status: 'Ongoing',
      year: '2024',
      image: require('./images/projectimg/project4.png'),
      description: 'A comprehensive collection of 15+ datasets spanning various domains including healthcare, entertainment, transportation, demographics, and more. All datasets are cleaned, processed, and ready for analysis.',
      longDescription: 'This project involves curating, cleaning, and organizing datasets from various domains to create a comprehensive data repository. Each dataset is carefully processed to ensure quality, consistency, and usability. The collection includes datasets for machine learning, statistical analysis, and research purposes, making it valuable for data scientists, researchers, and students.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Jupyter', 'SQL', 'CSV', 'JSON'],
      features: [
        '15+ diverse datasets',
        'Data cleaning and preprocessing',
        'Multiple data formats (CSV, JSON, SQL)',
        'Comprehensive documentation',
        'Data quality validation',
        'Easy integration with analysis tools',
        'Regular updates and maintenance'
      ],
      challenges: [
        'Ensuring data quality and consistency',
        'Handling different data formats',
        'Creating comprehensive documentation',
        'Maintaining dataset updates'
      ],
      solutions: [
        'Implemented automated data validation',
        'Created standardized processing pipeline',
        'Developed detailed documentation system',
        'Established regular update schedule'
      ],
      results: [
        '15+ high-quality datasets',
        'Used by 100+ data scientists',
        'Regular contributions from community',
        'Open source and freely available'
      ],
      liveUrl: 'https://github.com/itsluckysharma01/Datasets.git',
      githubUrl: 'https://github.com/itsluckysharma01/Datasets.git',
      demoUrl: 'https://github.com/itsluckysharma01/Datasets.git',
      screenshots: [
        require('./images/projectimg/project4.png')
      ],
      metrics: {
        datasets: '15+',
        downloads: '1000+',
        contributors: '5+',
        stars: '50+'
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🚀', count: projectsData.length },
    { id: 'ai-ml', name: 'AI/ML', icon: '🤖', count: projectsData.filter(project => project.category === 'ai-ml').length },
    { id: 'web-dev', name: 'Web Development', icon: '🌐', count: projectsData.filter(project => project.category === 'web-dev').length },
    { id: 'data-science', name: 'Data Science', icon: '📊', count: projectsData.filter(project => project.category === 'data-science').length },
    { id: 'mobile', name: 'Mobile', icon: '📱', count: projectsData.filter(project => project.category === 'mobile').length },
    { id: 'desktop', name: 'Desktop', icon: '💻', count: projectsData.filter(project => project.category === 'desktop').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const searchFilteredProjects = filteredProjects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'ai-ml': return '#ff6b6b';
      case 'web-dev': return '#4ecdc4';
      case 'data-science': return '#45b7d1';
      case 'mobile': return '#96ceb4';
      case 'desktop': return '#feca57';
      default: return '#95a5a6';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#10b981';
      case 'In Progress': return '#f59e0b';
      case 'Ongoing': return '#3b82f6';
      case 'Planned': return '#6b7280';
      default: return '#6b7280';
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="projects-container">
      <BackButton position="top-left" size="medium" />
      <div className="projects-content">
        {/* Header Section */}
        <div className="projects-header">
          <h1 className="projects-title">
            My <span className="gradient-text">Best Projects</span>
          </h1>
          <p className="projects-subtitle">
            A showcase of my most impactful projects, demonstrating expertise across AI/ML, web development, and data science domains.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="projects-stats">
          <div className="stat-card">
            <div className="stat-number">{projectsData.length}</div>
            <div className="stat-label">Total Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{new Set(projectsData.map(project => project.category)).size}</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{projectsData.filter(project => project.status === 'Completed').length}</div>
            <div className="stat-label">Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{projectsData.reduce((total, project) => total + project.technologies.length, 0)}</div>
            <div className="stat-label">Technologies Used</div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="projects-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="project-search-input"
            />
            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-button ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
                style={{ '--category-color': getCategoryColor(category.id) }}
              >
                <span className="filter-icon">{category.icon}</span>
                <span className="filter-text">{category.name}</span>
                <span className="filter-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {searchFilteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => openModal(project)}
              style={{ '--category-color': getCategoryColor(project.category) }}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <span className="view-icon">👁️</span>
                    <span className="view-text">View Details</span>
                  </div>
                </div>
                <div className="project-status" style={{ backgroundColor: getStatusColor(project.status) }}>
                  {project.status}
                </div>
                <div className="project-year">{project.year}</div>
              </div>
              
              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-type">
                    <span className="type-icon">🔧</span>
                    <span className="type-text">{project.type}</span>
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag more">+{project.technologies.length - 4}</span>
                  )}
                </div>
                
                <div className="project-metrics">
                  {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="metric">
                      <span className="metric-value">{value}</span>
                      <span className="metric-label">{key}</span>
                    </div>
                  ))}
                </div>
                
                <div className="project-actions">
                  <button 
                    className="action-btn primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.liveUrl, '_blank');
                    }}
                  >
                    Live Demo
                  </button>
                  <button 
                    className="action-btn secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, '_blank');
                    }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <div className="project-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <span>✕</span>
              </button>
              
              <div className="modal-header">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <div className="modal-meta">
                  <span className="modal-type">{selectedProject.type}</span>
                  <span className="modal-year">{selectedProject.year}</span>
                  <span 
                    className="modal-status"
                    style={{ backgroundColor: getStatusColor(selectedProject.status) }}
                  >
                    {selectedProject.status}
                  </span>
                </div>
              </div>
              
              <div className="modal-body">
                <div className="modal-image-container">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="modal-image"
                  />
                </div>
                
                <div className="modal-details">
                  <div className="modal-description">
                    <h4>Project Overview</h4>
                    <p>{selectedProject.longDescription}</p>
                  </div>
                  
                  <div className="modal-features">
                    <h4>Key Features</h4>
                    <ul className="features-list">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="modal-technologies">
                    <h4>Technologies Used</h4>
                    <div className="technologies-list">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-metrics">
                    <h4>Project Metrics</h4>
                    <div className="metrics-grid">
                      {Object.entries(selectedProject.metrics).map(([key, value]) => (
                        <div key={key} className="metric-item">
                          <span className="metric-value">{value}</span>
                          <span className="metric-label">{key}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-actions">
                    <button 
                      className="btn-primary"
                      onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                    >
                      View Live Demo
                    </button>
                    <button 
                      className="btn-secondary"
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                    >
                      View Source Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;