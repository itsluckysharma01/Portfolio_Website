import React, { useState, useEffect } from "react";
import "./css/skillHub.css";
import BackButton from "../../components/BackButton";

const SkillHub = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [skillLevels, setSkillLevels] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);

  const skillsData = {
    webDevelopment: {
      title: "Web Development",
      icon: "🌐",
      color: "#667eea",
      skills: [
        { name: "React.js", level: 85, experience: "1+ year", projects: 2 },
        {
          name: "JavaScript (ES6+)",
          level: 85,
          experience: "1+ year",
          projects: 3,
        },
        { name: "HTML5 & CSS3", level: 90, experience: "1+ year", projects: 3 },
        { name: "Node.js", level: 75, experience: "1+ year", projects: 2 },
        { name: "TypeScript", level: 70, experience: "6 months", projects: 1 },
        { name: "Flask", level: 80, experience: "1+ year", projects: 1 },
      ],
    },
    dataScienceAI: {
      title: "Data Science & AI",
      icon: "🤖",
      color: "#f093fb",
      skills: [
        { name: "Python", level: 90, experience: "1+ year", projects: 4 },
        {
          name: "Machine Learning",
          level: 85,
          experience: "6 months",
          projects: 3,
        },
        {
          name: "Deep Learning",
          level: 85,
          experience: "6 months",
          projects: 2,
        },
        {
          name: "TensorFlow & Keras",
          level: 85,
          experience: "6 months",
          projects: 1,
        },
        {
          name: "Pandas & NumPy",
          level: 85,
          experience: "1+ year",
          projects: 3,
        },
        {
          name: "Scikit-learn",
          level: 85,
          experience: "6 months",
          projects: 2,
        },
        {
          name: "Computer Vision (OpenCV)",
          level: 80,
          experience: "6 months",
          projects: 1,
        },
        {
          name: "Data Visualization (Matplotlib, Seaborn)",
          level: 85,
          experience: "1+ year",
          projects: 2,
        },
      ],
    },
    tools: {
      title: "Developer Tools & Platforms",
      icon: "🛠️",
      color: "#4facfe",
      skills: [
        {
          name: "Python (C++, Java)",
          level: 85,
          experience: "1+ year",
          projects: 4,
        },
        { name: "Git & GitHub", level: 85, experience: "1+ year", projects: 5 },
        {
          name: "VS Code & PyCharm",
          level: 90,
          experience: "1+ year",
          projects: 5,
        },
        { name: "SQL & MySQL", level: 80, experience: "1+ year", projects: 2 },
        { name: "Docker", level: 70, experience: "6 months", projects: 1 },
        {
          name: "Jupyter Notebook",
          level: 85,
          experience: "1+ year",
          projects: 3,
        },
        {
          name: "Oracle Cloud Platform",
          level: 75,
          experience: "3 months",
          projects: 1,
        },
        {
          name: "PowerBI & Excel",
          level: 75,
          experience: "6 months",
          projects: 1,
        },
      ],
    },
  };

  const categories = [
    { id: "all", name: "All Skills", icon: "🌟" },
    { id: "webDevelopment", name: "Web Development", icon: "🌐" },
    { id: "dataScienceAI", name: "Data Science & AI", icon: "🤖" },
    { id: "tools", name: "Developer Tools", icon: "🛠️" },
  ];

  const filteredSkills = () => {
    if (activeCategory === "all") {
      return Object.values(skillsData).flatMap((category) =>
        category.skills.map((skill) => ({
          ...skill,
          category: category.title,
          color: category.color,
        })),
      );
    }
    return (
      skillsData[activeCategory]?.skills.map((skill) => ({
        ...skill,
        category: skillsData[activeCategory].title,
        color: skillsData[activeCategory].color,
      })) || []
    );
  };

  const searchFilteredSkills = filteredSkills().filter((skill) =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    // Animate skill levels on component mount
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const getSkillLevelColor = (level) => {
    if (level >= 90) return "#10b981";
    if (level >= 80) return "#3b82f6";
    if (level >= 70) return "#f59e0b";
    return "#ef4444";
  };

  const getSkillLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <div className="skillhub-container">
      <BackButton position="top-left" size="medium" />
      <div className="skillhub-content">
        {/* Header Section */}
        <div className="skillhub-header">
          <h1 className="skillhub-title">
            My <span className="gradient-text">Technical Skills</span>
          </h1>
          <p className="skillhub-subtitle">
            Showcasing my expertise in Web Development, Data Science, and
            Developer Tools
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
            <svg
              className="search-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-filter ${activeCategory === category.id ? "active" : ""}`}
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
              style={{ "--skill-color": skill.color }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-header">
                <div className="skill-icon">
                  <div
                    className="skill-icon-bg"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.name.charAt(0)}
                  </div>
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-category">{skill.category}</span>
                </div>
                <div
                  className="skill-level-badge"
                  style={{ backgroundColor: getSkillLevelColor(skill.level) }}
                >
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
                        width: isAnimating ? `${skill.level}%` : "0%",
                        backgroundColor: getSkillLevelColor(skill.level),
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
                    <p>
                      Successfully completed {skill.projects} projects using{" "}
                      {skill.name}
                    </p>
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
            <div className="summary-number">
              {Object.values(skillsData).reduce(
                (total, category) => total + category.skills.length,
                0,
              )}
            </div>
          </div>
          <div className="summary-card">
            <h3>Categories</h3>
            <div className="summary-number">
              {Object.keys(skillsData).length}
            </div>
          </div>
          <div className="summary-card">
            <h3>Total Projects</h3>
            <div className="summary-number">
              {Object.values(skillsData).reduce(
                (total, category) =>
                  total +
                  category.skills.reduce(
                    (sum, skill) => sum + skill.projects,
                    0,
                  ),
                0,
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
          <h2>Interested in My Work?</h2>
          <p>
            Check out my projects and get in touch with me to discuss
            opportunities
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">View My Projects</button>
            <button className="btn-secondary">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillHub;
