import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../navBar'
import './css/homePage.css'

const HomePage = () => {
  const [typewriterText, setTypewriterText] = useState('')
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const navigate = useNavigate()

  const phrases = ['Code with Purpose', 'Build with Precision', 'Create with Passion']

  useEffect(() => {
    const typeWriter = () => {
      const current = phrases[currentPhrase]
      
      if (isDeleting) {
        setTypewriterText(current.substring(0, currentChar - 1))
        setCurrentChar(prev => prev - 1)
      } else {
        setTypewriterText(current.substring(0, currentChar + 1))
        setCurrentChar(prev => prev + 1)
      }
      
      let typeSpeed = isDeleting ? 50 : 100
      
      if (!isDeleting && currentChar === current.length) {
        typeSpeed = 2000
        setIsDeleting(true)
      } else if (isDeleting && currentChar === 0) {
        setIsDeleting(false)
        setCurrentPhrase((prev) => (prev + 1) % phrases.length)
        typeSpeed = 500
      }
      
      setTimeout(typeWriter, typeSpeed)
    }

    const timer = setTimeout(typeWriter, 1000)
    return () => clearTimeout(timer)
  }, [currentPhrase, currentChar, isDeleting, phrases])

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    }, observerOptions)
    
    // Observe all cards and sections
    document.querySelectorAll('.card, section').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        {/* Background Pattern */}
        <div className="hero-background">
          <div className="background-pattern"></div>
        </div>
        
        {/* Code Visualization Background */}
        <div className="code-background">
          <pre className="code-text">
            <code>{`const developer = {
  name: 'Lucky Sharma',
  passion: 'Building digital solutions that matter',
  expertise: ['Data Science', 'Machine Learning', 'Python'],
  philosophy: 'Code with purpose, build with precision',
  
  createSolution: (problem) => {
    const analysis = this.analyzeProblem(problem);
    const architecture = this.designArchitecture(analysis);
    const implementation = this.buildWithExcellence(architecture);
    return this.deliverValue(implementation);
  },
  
  continuousLearning: () => {
    while (technology.evolves) {
      this.learn(newTechnologies);
      this.adapt(bestPractices);
      this.innovate(solutions);
    }
  }
};`}</code>
          </pre>
        </div>
        
        <div className="hero-content">
          <div className="hero-text animate-fade-in">
            {/* Typewriter Effect Headline */}
            <h1 className="hero-title">
              <span className="typewriter-text">{typewriterText}</span>
              <br />
              <span className="hero-subtitle">Build with Precision</span>
            </h1>
            
            <p className="hero-description">
              Python AI & ML crafting scalable solutions that bridge innovative technology with exceptional user experiences
            </p>
            
            {/* CTA Buttons */}
            <div className="hero-buttons">
              <button 
                className="btn-primary"
                onClick={() => navigate('/projects')}
              >
                <span>Explore My Work</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>
              <button 
                className="btn-secondary"
                onClick={() => navigate('/contact')}
              >
                <span>Let's Connect</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </button>
            </div>
            
            {/* Performance Metrics */}
            <div className="performance-metrics">
              <div className="metric">
                <div className="metric-value">98%</div>
                <div className="metric-label">Lighthouse Score</div>
              </div>
              <div className="metric">
                <div className="metric-value">&lt;1s</div>
                <div className="metric-label">Load Time</div>
              </div>
              <div className="metric">
                <div className="metric-value">A+</div>
                <div className="metric-label">Code Quality</div>
              </div>
              <div className="metric">
                <div className="metric-value">100%</div>
                <div className="metric-label">Accessibility</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </section>

      {/* Interactive Skills Demonstration */}
      <section id="skills-demo" className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="gradient-text">Technical Excellence</span> in Action
            </h2>
            <p className="section-description">
              Interactive demonstrations of core competencies across the full development stack
            </p>
          </div>
          
          <div className="skills-grid">
            {/* Frontend Frameworks */}
            <div className="skill-card card">
              <div className="skill-header">
                <div className="skill-icon">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.992-1.36-1.56z"/>
                  </svg>
                </div>
                <h3 className="skill-title">Frontend Frameworks</h3>
              </div>
              <p className="skill-description">React, Vue.js, and modern JavaScript frameworks with responsive design patterns</p>
              <div className="code-preview">
                <div className="code-comment">// Live Component Preview</div>
                <div className="code-line">const Button = ({`{ children, variant }`}) =&gt; (</div>
                <div className="code-line code-indent">&lt;button className={`btn-${`{variant}`}`}&gt;</div>
                <div className="code-line code-indent-2">{`{children}`}</div>
                <div className="code-line code-indent">&lt;/button&gt;</div>
                <div className="code-line">);</div>
              </div>
              <button 
                className="skill-link"
                onClick={() => navigate('/skillhub')}
              >
                <span>Explore Frontend Skills</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
            
            {/* Backend Architecture */}
            <div className="skill-card card">
              <div className="skill-header">
                <div className="skill-icon backend">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                  </svg>
                </div>
                <h3 className="skill-title">Backend Architecture</h3>
              </div>
              <p className="skill-description">Node.js, Python, and cloud-native solutions with scalable database design</p>
              <div className="code-preview">
                <div className="code-comment">// API Architecture Flow</div>
                <div className="code-line">app.post('/api/users', async (req, res) =&gt; {`{`}</div>
                <div className="code-line code-indent">const user = await User.create(req.body);</div>
                <div className="code-line code-indent">res.status(201).json({`{ user }`});</div>
                <div className="code-line">{`}`});</div>
              </div>
              <button 
                className="skill-link backend"
                onClick={() => navigate('/skillhub')}
              >
                <span>Explore Backend Skills</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
            
            {/* Full-Stack Integration */}
            <div className="skill-card card">
              <div className="skill-header">
                <div className="skill-icon fullstack">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                  </svg>
                </div>
                <h3 className="skill-title">Full-Stack Integration</h3>
              </div>
              <p className="skill-description">End-to-end solutions connecting frontend experiences with robust backend systems</p>
              <div className="code-preview">
                <div className="code-comment">// API Integration Demo</div>
                <div className="code-line">const fetchUserData = async () =&gt; {`{`}</div>
                <div className="code-line code-indent">const response = await fetch('/api/users');</div>
                <div className="code-line code-indent">return response.json();</div>
                <div className="code-line">{`}`};</div>
              </div>
              <button 
                className="skill-link fullstack"
                onClick={() => navigate('/skillhub')}
              >
                <span>Explore Integration</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section id="featured-projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Featured <span className="gradient-text">Project Showcase</span>
            </h2>
            <p className="section-description">
              Comprehensive case studies demonstrating problem-solving approach and technical execution
            </p>
          </div>
          
          <div className="projects-grid">
            {/* Project 1: E-commerce Platform */}
            <div className="project-card card">
              <div className="project-image">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="E-commerce Platform Dashboard" 
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  }}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">E-commerce Platform</h3>
                <p className="project-description">Full-stack marketplace with real-time inventory, payment processing, and advanced analytics dashboard</p>
                
                <div className="tech-stack">
                  <span className="tech-tag primary">React</span>
                  <span className="tech-tag secondary">Node.js</span>
                  <span className="tech-tag accent">MongoDB</span>
                  <span className="tech-tag primary">AWS</span>
                </div>
                
                <div className="project-stats">
                  <div className="stat">
                    <div className="stat-value primary">40%</div>
                    <div className="stat-label">Performance Boost</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value secondary">99.9%</div>
                    <div className="stat-label">Uptime</div>
                  </div>
                </div>
                
                <div className="project-actions">
                  <button 
                    className="btn-primary small"
                    onClick={() => navigate('/projects')}
                  >
                    Case Study
                  </button>
                  <button className="btn-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Project 2: SaaS Analytics Dashboard */}
            <div className="project-card card">
              <div className="project-image">
                <img 
                  src="https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg" 
                  alt="Analytics Dashboard Interface" 
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">SaaS Analytics Dashboard</h3>
                <p className="project-description">Real-time data visualization platform with custom charts, automated reporting, and team collaboration</p>
                
                <div className="tech-stack">
                  <span className="tech-tag secondary">Vue.js</span>
                  <span className="tech-tag primary">Python</span>
                  <span className="tech-tag accent">PostgreSQL</span>
                  <span className="tech-tag secondary">Docker</span>
                </div>
                
                <div className="project-stats">
                  <div className="stat">
                    <div className="stat-value secondary">60%</div>
                    <div className="stat-label">Faster Insights</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value primary">10K+</div>
                    <div className="stat-label">Daily Users</div>
                  </div>
                </div>
                
                <div className="project-actions">
                  <button 
                    className="btn-secondary small"
                    onClick={() => navigate('/projects')}
                  >
                    Case Study
                  </button>
                  <button className="btn-icon">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Project 3: Mobile-First PWA */}
            <div className="project-card card">
              <div className="project-image">
                <img 
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Mobile Progressive Web App" 
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">Mobile-First PWA</h3>
                <p className="project-description">Progressive web application with offline functionality, push notifications, and native app experience</p>
                
                <div className="tech-stack">
                  <span className="tech-tag accent">React</span>
                  <span className="tech-tag primary">Service Worker</span>
                  <span className="tech-tag secondary">Firebase</span>
                  <span className="tech-tag accent">PWA</span>
                </div>
                
                <div className="project-stats">
                  <div className="stat">
                    <div className="stat-value accent">95%</div>
                    <div className="stat-label">Mobile Score</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value primary">80%</div>
                    <div className="stat-label">Offline Usage</div>
                  </div>
                </div>
                
                <div className="project-actions">
                  <button 
                    className="btn-accent small"
                    onClick={() => navigate('/projects')}
                  >
                    Case Study
                  </button>
                  <button className="btn-icon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="section-footer">
            <button 
              className="btn-primary"
              onClick={() => navigate('/projects')}
            >
              <span>View All Projects</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* GitHub Integration & Social Proof */}
      <section id="social-proof" className="social-proof-section">
        <div className="container">
          <div className="social-proof-grid">
            {/* GitHub Activity */}
            <div className="github-activity">
              <h2 className="section-title">
                Continuous <span className="gradient-text">Development</span>
              </h2>
              <p className="section-description">
                Active open-source contributor with consistent coding practice and community engagement
              </p>
              
              <div className="github-stats">
                <div className="stat">
                  <div className="stat-value primary">847</div>
                  <div className="stat-label">Contributions This Year</div>
                </div>
                <div className="stat">
                  <div className="stat-value secondary">23</div>
                  <div className="stat-label">Open Source Projects</div>
                </div>
                <div className="stat">
                  <div className="stat-value accent">156</div>
                  <div className="stat-label">Repository Stars</div>
                </div>
                <div className="stat">
                  <div className="stat-value primary">42</div>
                  <div className="stat-label">Pull Requests</div>
                </div>
              </div>
              
              <button className="btn-primary">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>View GitHub Profile</span>
              </button>
            </div>
            
            {/* Recent Blog Posts */}
            <div className="blog-posts">
              <h3 className="blog-title">Latest Technical Insights</h3>
              <div className="blog-list">
                <article className="blog-post primary">
                  <h4 className="blog-post-title">
                    <button onClick={() => navigate('/techblog')}>
                      Building Scalable React Applications with Modern Architecture Patterns
                    </button>
                  </h4>
                  <p className="blog-post-excerpt">Exploring advanced patterns for maintainable React codebases including compound components, render props, and custom hooks...</p>
                  <div className="blog-post-meta">December 15, 2025 • 8 min read</div>
                </article>
                
                <article className="blog-post secondary">
                  <h4 className="blog-post-title">
                    <button onClick={() => navigate('/techblog')}>
                      Optimizing Node.js Performance: From Development to Production
                    </button>
                  </h4>
                  <p className="blog-post-excerpt">Comprehensive guide to Node.js optimization techniques, monitoring strategies, and deployment best practices...</p>
                  <div className="blog-post-meta">December 8, 2025 • 12 min read</div>
                </article>
                
                <article className="blog-post accent">
                  <h4 className="blog-post-title">
                    <button onClick={() => navigate('/techblog')}>
                      The Future of Web Development: Trends Shaping 2025
                    </button>
                  </h4>
                  <p className="blog-post-excerpt">Analysis of emerging technologies, frameworks, and methodologies that will define the next generation of web applications...</p>
                  <div className="blog-post-meta">November 28, 2025 • 10 min read</div>
                </article>
              </div>
              
              <button 
                className="blog-link"
                onClick={() => navigate('/techblog')}
              >
                <span>Read All Articles</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Build Something <span className="gradient-text">Extraordinary</span>?
            </h2>
            <p className="cta-description">
              Let's collaborate on your next project. From concept to deployment, I'll help bring your vision to life with clean code and exceptional user experiences.
            </p>
            
            <div className="cta-buttons">
              <button 
                className="btn-primary"
                onClick={() => navigate('/contact')}
              >
                <span>Start a Project</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </button>
              <button 
                className="btn-secondary"
                onClick={() => navigate('/about')}
              >
                <span>Learn More About Me</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
