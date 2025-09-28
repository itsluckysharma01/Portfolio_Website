import React, { useState, useEffect } from 'react';
import './css/skillHub.css';
import BackButton from '../../components/BackButton';

const SkillHub = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [skillLevels, setSkillLevels] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);

  const skillsData = {
    frontend: {
      title: 'Frontend Development',
      icon: '🎨',
      color: '#667eea',
      skills: [
        { name: 'React.js', level: 95, experience: '2+ years', projects: 15 },
        { name: 'JavaScript (ES6+)', level: 90, experience: '2+ years', projects: 25 },
        { name: 'HTML5 & CSS3', level: 95, experience: '4+ years', projects: 30 },
        { name: 'Vue.js', level: 80, experience: '2+ years', projects: 8 },
        { name: 'Tailwind CSS', level: 85, experience: '2+ years', projects: 12 },
        { name: 'Responsive Design', level: 90, experience: '4+ years', projects: 20 },
        { name: 'TypeScript', level: 75, experience: '1+ years', projects: 5 },
        { name: 'Next.js', level: 70, experience: '1+ years', projects: 3 }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: '⚙️',
      color: '#764ba2',
      skills: [
        { name: 'Node.js', level: 85, experience: '3+ years', projects: 12 },
        { name: 'Express.js', level: 80, experience: '3+ years', projects: 10 },
        { name: 'Python', level: 90, experience: '4+ years', projects: 20 },
        { name: 'MongoDB', level: 75, experience: '2+ years', projects: 8 },
        { name: 'MySQL', level: 70, experience: '2+ years', projects: 6 },
        { name: 'RESTful APIs', level: 85, experience: '3+ years', projects: 15 },
        { name: 'GraphQL', level: 65, experience: '1+ years', projects: 4 },
        { name: 'Docker', level: 60, experience: '1+ years', projects: 3 }
      ]
    },
    dataScience: {
      title: 'Data Science & AI',
      icon: '🤖',
      color: '#f093fb',
      skills: [
        { name: 'Machine Learning', level: 85, experience: '3+ years', projects: 10 },
        { name: 'Deep Learning', level: 80, experience: '2+ years', projects: 8 },
        { name: 'TensorFlow', level: 75, experience: '2+ years', projects: 6 },
        { name: 'Keras', level: 80, experience: '2+ years', projects: 7 },
        { name: 'Pandas', level: 90, experience: '3+ years', projects: 15 },
        { name: 'NumPy', level: 85, experience: '3+ years', projects: 12 },
        { name: 'Scikit-learn', level: 80, experience: '2+ years', projects: 8 },
        { name: 'Computer Vision', level: 75, experience: '2+ years', projects: 5 }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: '🛠️',
      color: '#4facfe',
      skills: [
        { name: 'Git & GitHub', level: 90, experience: '4+ years', projects: 40 },
        { name: 'VS Code', level: 95, experience: '4+ years', projects: 50 },
        { name: 'Figma', level: 70, experience: '2+ years', projects: 8 },
        { name: 'Postman', level: 80, experience: '3+ years', projects: 15 },
        { name: 'AWS', level: 60, experience: '1+ years', projects: 3 },
        { name: 'Vercel', level: 85, experience: '2+ years', projects: 12 },
        { name: 'Netlify', level: 80, experience: '2+ years', projects: 10 },
        { name: 'Linux', level: 70, experience: '2+ years', projects: 8 }
      ]
    }
  };

  const categories = [
    { id: 'all', name: 'All Skills', icon: '🌟' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'dataScience', name: 'Data Science', icon: '🤖' },
    { id: 'tools', name: 'Tools', icon: '🛠️' }
  ];

  const filteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(skillsData).flatMap(category => 
        category.skills.map(skill => ({ ...skill, category: category.title, color: category.color }))
      );
    }
    return skillsData[activeCategory]?.skills.map(skill => ({ 
      ...skill, 
      category: skillsData[activeCategory].title, 
      color: skillsData[activeCategory].color 
    })) || [];
  };

  const searchFilteredSkills = filteredSkills().filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // Animate skill levels on component mount
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const getSkillLevelColor = (level) => {
    if (level >= 90) return '#10b981';
    if (level >= 80) return '#3b82f6';
    if (level >= 70) return '#f59e0b';
    return '#ef4444';
  };

  const getSkillLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="skillhub-container">
      <BackButton position="top-left" size="medium" />
      <div className="skillhub-content">
        {/* Header Section */}
        <div className="skillhub-header">
          <h1 className="skillhub-title">
            My <span className="gradient-text">Technical Arsenal</span>
          </h1>
          <p className="skillhub-subtitle">
            A comprehensive showcase of my technical skills, experience, and expertise across multiple domains
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="skillhub-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="skill-search-input"
            />
            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                <span className="filter-text">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {searchFilteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="skill-card"
              style={{ '--skill-color': skill.color }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-header">
                <div className="skill-icon">
                  <div className="skill-icon-bg" style={{ backgroundColor: skill.color }}>
                    {skill.name.charAt(0)}
                  </div>
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-category">{skill.category}</span>
                </div>
                <div className="skill-level-badge" style={{ backgroundColor: getSkillLevelColor(skill.level) }}>
                  {getSkillLevelText(skill.level)}
                </div>
              </div>

              <div className="skill-details">
                <div className="skill-stats">
                  <div className="stat">
                    <span className="stat-value">{skill.level}%</span>
                    <span className="stat-label">Proficiency</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{skill.experience}</span>
                    <span className="stat-label">Experience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{skill.projects}</span>
                    <span className="stat-label">Projects</span>
                  </div>
                </div>

                <div className="skill-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: isAnimating ? `${skill.level}%` : '0%',
                        backgroundColor: getSkillLevelColor(skill.level)
                      }}
                    />
                  </div>
                  <span className="progress-text">{skill.level}%</span>
                </div>
              </div>

              {hoveredSkill === skill.name && (
                <div className="skill-hover-info">
                  <div className="hover-content">
                    <h4>Recent Projects</h4>
                    <p>Successfully completed {skill.projects} projects using {skill.name}</p>
                    <div className="hover-stats">
                      <span>Experience: {skill.experience}</span>
                      <span>Level: {getSkillLevelText(skill.level)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="skills-summary">
          <div className="summary-card">
            <h3>Total Skills</h3>
            <div className="summary-number">{Object.values(skillsData).reduce((total, category) => total + category.skills.length, 0)}</div>
          </div>
          <div className="summary-card">
            <h3>Categories</h3>
            <div className="summary-number">{Object.keys(skillsData).length}</div>
          </div>
          <div className="summary-card">
            <h3>Total Projects</h3>
            <div className="summary-number">
              {Object.values(skillsData).reduce((total, category) => 
                total + category.skills.reduce((sum, skill) => sum + skill.projects, 0), 0
              )}
            </div>
          </div>
          <div className="summary-card">
            <h3>Years Experience</h3>
            <div className="summary-number">4+</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="skillhub-cta">
          <h2>Ready to Work Together?</h2>
          <p>Let's discuss how my technical expertise can help bring your project to life</p>
          <div className="cta-buttons">
            <button className="btn-primary">Start a Project</button>
            <button className="btn-secondary">View My Work</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillHub;
