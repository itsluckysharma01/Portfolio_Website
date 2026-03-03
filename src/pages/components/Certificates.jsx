import React, { useState, useEffect } from "react";
import "./css/Certificates.css";
import BackButton from "../../components/BackButton";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificatesData = [
    {
      id: 1,
      title: "Oracle Professional Data Science",
      issuer: "Oracle",
      date: "2025",
      category: "oracle",
      image: "/images/Certificates/01_Oracle_Professional_Data_Science.jpg",
      description:
        "Professional certification in data science methodologies, machine learning algorithms, and statistical analysis using Oracle Cloud Infrastructure.",
      skills: [
        "Data Science",
        "Machine Learning",
        "Oracle Cloud",
        "Statistics",
      ],
      verificationUrl: "#",
      level: "Professional",
    },
    {
      id: 2,
      title: "Oracle Cloud Infrastructure",
      issuer: "Oracle",
      date: "2025",
      category: "oracle",
      image: "/images/Certificates/02_Oracle_Cloud_Infrastructure.jpg",
      description:
        "Comprehensive certification covering Oracle Cloud Infrastructure services, architecture, and best practices for cloud deployment.",
      skills: ["Cloud Computing", "Oracle Cloud", "Infrastructure", "DevOps"],
      verificationUrl: "#",
      level: "Professional",
    },
    {
      id: 3,
      title: "Oracle AI Agent",
      issuer: "Oracle",
      date: "2025",
      category: "oracle",
      image: "/images/Certificates/03_Oracle_Ai_Agent.jpg",
      description:
        "Advanced certification in Oracle AI Agent development, automation, and intelligent system design.",
      skills: ["AI Agents", "Automation", "Oracle AI", "Intelligent Systems"],
      verificationUrl: "#",
      level: "Advanced",
    },
    {
      id: 4,
      title: "NIELIT Internship Certificate",
      issuer: "NIELIT",
      date: "2025",
      category: "government",
      image: "/images/Certificates/04_NIELIT-Internship_Certificate.jpg",
      description:
        "Official internship completion certificate from National Institute of Electronics and Information Technology.",
      skills: [
        "Internship",
        "Government Certification",
        "Professional Development",
      ],
      verificationUrl: "#",
      level: "Internship",
    },
    {
      id: 5,
      title: "Data Science Projects",
      issuer: "Udemy",
      date: "2025",
      category: "udemy",
      image: "/images/Certificates/05_Udemy_Data_Science_Projects.jpg",
      description:
        "Hands-on data science projects covering real-world applications, data analysis, and machine learning implementations.",
      skills: ["Data Science", "Projects", "Machine Learning", "Python"],
      verificationUrl: "#",
      level: "Intermediate",
    },
    {
      id: 6,
      title: "Data Science Fundamentals",
      issuer: "Udemy",
      date: "2025",
      category: "udemy",
      image: "/images/Certificates/06_Udemy_Data_Science.jpg",
      description:
        "Comprehensive data science course covering statistics, data analysis, visualization, and machine learning fundamentals.",
      skills: ["Data Science", "Statistics", "Data Analysis", "Visualization"],
      verificationUrl: "#",
      level: "Intermediate",
    },
    {
      id: 7,
      title: "Python Programming",
      issuer: "Udemy",
      date: "2024",
      category: "udemy",
      image: "/images/Certificates/07_Udemy_Python.jpg",
      description:
        "Complete Python programming course covering syntax, data structures, algorithms, and advanced Python concepts.",
      skills: ["Python", "Programming", "Data Structures", "Algorithms"],
      verificationUrl: "#",
      level: "Intermediate",
    },
    {
      id: 8,
      title: "Zidio Training Certificate",
      issuer: "Zidio",
      date: "2025",
      category: "training",
      image: "/images/Certificates/08_Zidio_Tranning Certificate.jpg",
      description:
        "Professional training certificate from Zidio covering modern development practices and industry standards.",
      skills: [
        "Professional Training",
        "Development Practices",
        "Industry Standards",
      ],
      verificationUrl: "#",
      level: "Training",
    },
    {
      id: 9,
      title: "Web Development",
      issuer: "Zidio",
      date: "2025",
      category: "training",
      image: "/images/Certificates/09_Zidio_WEB_Development.jpg",
      description:
        "Comprehensive web development certification covering frontend and backend technologies, frameworks, and best practices.",
      skills: ["Web Development", "Frontend", "Backend", "Frameworks"],
      verificationUrl: "#",
      level: "Intermediate",
    },
    {
      id: 10,
      title: "Frontend Microservices",
      issuer: "Edyoda",
      date: "2024",
      category: "edtech",
      image: "/images/Certificates/10_Edyoda_Frontend_Micro.png",
      description:
        "Advanced frontend development with microservices architecture, modern frameworks, and scalable application design.",
      skills: [
        "Frontend",
        "Microservices",
        "Modern Frameworks",
        "Scalable Design",
      ],
      verificationUrl: "#",
      level: "Advanced",
    },
    {
      id: 11,
      title: "Cisco Cybersecurity",
      issuer: "Cisco",
      date: "2025",
      category: "cisco",
      image: "/images/Certificates/11_Cisco_Cybersecurity.jpg",
      description:
        "Cisco cybersecurity certification covering network security, threat detection, and security best practices.",
      skills: [
        "Cybersecurity",
        "Network Security",
        "Threat Detection",
        "Security Practices",
      ],
      verificationUrl: "#",
      level: "Professional",
    },
    {
      id: 12,
      title: "Cisco Cybersecurity Completion",
      issuer: "Cisco",
      date: "2025",
      category: "cisco",
      image: "/images/Certificates/12_Cisco_Cybersecurity_Completeion.jpg",
      description:
        "Completion certificate for comprehensive Cisco cybersecurity program covering advanced security concepts.",
      skills: [
        "Cybersecurity",
        "Advanced Security",
        "Cisco Technologies",
        "Security Management",
      ],
      verificationUrl: "#",
      level: "Professional",
    },
    {
      id: 13,
      title: "Cybersecurity Skill India",
      issuer: "Skill India",
      date: "2025",
      category: "government",
      image: "/images/Certificates/13_Cybersecurity _Skillindia.jpg",
      description:
        "Government of India cybersecurity certification under Skill India initiative covering national security standards.",
      skills: [
        "Cybersecurity",
        "National Standards",
        "Government Certification",
        "Security Protocols",
      ],
      verificationUrl: "#",
      level: "Professional",
    },
    {
      id: 14,
      title: "Git & GitHub",
      issuer: "Udemy",
      date: "2023",
      category: "udemy",
      image: "/images/Certificates/14_Udemy_Git_Github.jpg",
      description:
        "Version control and collaboration using Git and GitHub, covering branching, merging, and collaborative development.",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
      verificationUrl: "#",
      level: "Intermediate",
    },
    {
      id: 15,
      title: "Hackathon Hackbverse",
      issuer: "Hackbverse",
      date: "2025",
      category: "competition",
      image: "/images/Certificates/15_Hackthon_Hackbverse.jpg",
      description:
        "Participation certificate from Hackbverse hackathon, showcasing problem-solving and rapid development skills.",
      skills: [
        "Hackathon",
        "Problem Solving",
        "Rapid Development",
        "Innovation",
      ],
      verificationUrl: "#",
      level: "Participation",
    },
    {
      id: 16,
      title: "Trading in Zone",
      issuer: "Trading Academy",
      date: "2025",
      category: "finance",
      image: "/images/Certificates/16_Trading_in_Zone.jpg",
      description:
        "Financial trading and investment strategies certification covering market analysis and trading psychology.",
      skills: [
        "Trading",
        "Investment",
        "Market Analysis",
        "Financial Strategies",
      ],
      verificationUrl: "#",
      level: "Intermediate",
    },
    {
      id: 17,
      title: "Data Science with Python",
      issuer: "SMARTED",
      date: "2025",
      category: "Data Science",
      image:
        "/images/Certificates/17_DATA_SCIENCE_WITH_PYTHON-Lucky_Sharm_SMARTED.jpg",
      description:
        "Comprehensive Python-based data science certification covering data analysis, visualization, and machine learning with Python libraries.",
      skills: [
        "Data Science",
        "Python",
        "Data Analysis",
        "Machine Learning",
        "Pandas",
        "NumPy",
      ],
      verificationUrl: "#",
      level: "Intermediate",
    },
    {
      id: 18,
      title: "AI ML Engineer",
      issuer: "Reliance Skilling Academy",
      date: "2025",
      category: "Training",
      image:
        "/images/Certificates/19_AI ML Engineer Reliance Skilling Acadmy.jpg.jpg",
      description:
        "Professional AI and Machine Learning Engineer certification from Reliance Skilling Academy covering advanced ML algorithms and AI systems.",
      skills: [
        "AI",
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Engineering",
      ],
      verificationUrl: "#",
      level: "Professional",
    },
    {
      id: 19,
      title: "AI ML Engineer",
      issuer: "Skill India",
      date: "2025",
      category: "Government",
      image: "/images/Certificates/20_AI ML Engineer Skillindia.jpg",
      description:
        "Government of India AI & ML Engineer certification under Skill India initiative covering artificial intelligence and machine learning engineering.",
      skills: [
        "AI",
        "Machine Learning",
        "Government Certification",
        "ML Engineering",
        "AI Systems",
      ],
      verificationUrl: "#",
      level: "Professional",
    },
    {
      id: 20,
      title: "Data Science for Everyone",
      issuer: "Reliance",
      date: "2025",
      category: "Training",
      image: "/images/Certificates/21_Data Science for Everyone_Reliance.jpg",
      description:
        "Foundational data science certification from Reliance covering basic data analysis, statistics, and data-driven decision making.",
      skills: [
        "Data Science",
        "Statistics",
        "Data Analysis",
        "Decision Making",
        "Fundamentals",
      ],
      verificationUrl: "#",
      level: "Intermediate",
    },
    {
      id: 21,
      title: "Data Science for Everyone",
      issuer: "Skill India",
      date: "2025",
      category: "government",
      image: "/images/Certificates/22_Data Science for Everyone_Skillindia.jpg",
      description:
        "Government of India data science certification making data science accessible to everyone with foundational concepts.",
      skills: [
        "Data Science",
        "Basics",
        "Government Certification",
        "Analytics",
        "Statistics",
      ],
      verificationUrl: "#",
      level: "Intermediate",
    },
    {
      id: 22,
      title: "Code Clash 2.0",
      issuer: "Code Clash",
      date: "2025",
      category: "Hackthon",
      image: "/images/Certificates/23Code_Clash2.0.jpeg",
      description:
        "Participation certificate from Code Clash 2.0 coding competition showcasing competitive programming and problem-solving skills.",
      skills: [
        "Competitive Programming",
        "Problem Solving",
        "Coding",
        "Algorithms",
        "Competition",
      ],
      verificationUrl: "#",
      level: "Participation",
    },
    {
      id: 23,
      title: "Tata Crucible Quiz",
      issuer: "Tata Crucible",
      date: "2025",
      category: "competition",
      image: "/images/Certificates/24_Tata Crucible Quiz.jpg",
      description:
        "Participation certificate from prestigious Tata Crucible Quiz competition demonstrating knowledge and quick thinking.",
      skills: [
        "Quiz",
        "General Knowledge",
        "Competition",
        "Quick Thinking",
        "Business Knowledge",
      ],
      verificationUrl: "#",
      level: "Participation",
    },
    {
      id: 24,
      title: "Student Ambassador",
      issuer: "Organization",
      date: "2025",
      category: "leadership",
      image: "/images/Certificates/25_Student_Ambasddor.jpg",
      description:
        "Student Ambassador recognition certificate for leadership, communication, and community building activities.",
      skills: [
        "Leadership",
        "Communication",
        "Community Building",
        "Outreach",
        "Networking",
      ],
      verificationUrl: "#",
      level: "Achievement",
    },
    {
      id: 25,
      title: "Professional Certificate",
      issuer: "Professional Body",
      date: "2025",
      category: "professional",
      image: "/images/Certificates/26_Lucky Sharma (1)_page-0001.jpg",
      description:
        "Professional certification demonstrating expertise and commitment to professional development and excellence.",
      skills: [
        "Professional Development",
        "Excellence",
        "Industry Standards",
        "Best Practices",
      ],
      verificationUrl: "#",
      level: "Professional",
    },
    {
      id: 26,
      title: "30 Days of Code - Web Development",
      issuer: "30 Days Challenge",
      date: "2025",
      category: "challenge",
      image: "/images/Certificates/27_30DC_Web_Dev.png",
      description:
        "30 Days of Code challenge completion certificate focusing on web development technologies and daily coding practice.",
      skills: [
        "Web Development",
        "Coding Challenge",
        "Daily Practice",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      verificationUrl: "#",
      level: "Intermediate",
    },
    {
      id: 27,
      title: "Professional Achievement Certificate",
      issuer: "Certification Authority",
      date: "2025",
      category: "professional",
      image:
        "/images/Certificates/28_3d601a8f-092b-4fde-bf3c-3a123f3a9385 (Medium).jpeg",
      description:
        "Professional achievement certificate recognizing skills, dedication, and contribution to the field.",
      skills: [
        "Professional Skills",
        "Achievement",
        "Excellence",
        "Industry Recognition",
      ],
      verificationUrl: "#",
      level: "Professional",
    },
    {
      id: 28,
      title: "Technical Certification",
      issuer: "Technical Institute",
      date: "2025",
      category: "technical",
      image: "/images/Certificates/29_2cb63f4b-0088-4f5b-b4d3-313d04c8f5dd.jpg",
      description:
        "Technical certification covering advanced technical concepts and practical applications.",
      skills: [
        "Technical Skills",
        "Advanced Concepts",
        "Practical Application",
        "Problem Solving",
      ],
      verificationUrl: "#",
      level: "Advanced",
    },
    {
      id: 29,
      title: "Data Science & Analytics",
      issuer: "Analytics Institute",
      date: "2025",
      category: "Data Science",
      image: "/images/Certificates/30_Data Science & Analytics_page-0001.jpg",
      description:
        "Comprehensive Data Science and Analytics certification covering data analysis, statistical methods, and analytics tools.",
      skills: [
        "Data Science",
        "Analytics",
        "Statistical Analysis",
        "Data Visualization",
        "Business Intelligence",
      ],
      verificationUrl: "#",
      level: "Professional",
    },
    {
      id: 30,
      title: "Critical Thinking in the AI Era",
      issuer: "AI Education Institute",
      date: "2025",
      category: "ai",
      image:
        "/images/Certificates/31_Critical Thinking in the AI Era_page-0001.jpg",
      description:
        "Critical thinking and problem-solving in the AI era, covering ethical AI, decision-making, and analytical thinking.",
      skills: [
        "Critical Thinking",
        "AI Ethics",
        "Problem Solving",
        "Analytical Thinking",
        "Decision Making",
      ],
      verificationUrl: "#",
      level: "Advanced",
    },
    {
      id: 31,
      title: "Professional Development Certificate",
      issuer: "Development Authority",
      date: "2025",
      category: "professional",
      image: "/images/Certificates/32_a8e6f82e-124d-422c-97aa-76b254fd828d.jpg",
      description:
        "Professional development certification focusing on career growth, skills enhancement, and industry best practices.",
      skills: [
        "Professional Development",
        "Career Growth",
        "Skill Enhancement",
        "Industry Standards",
      ],
      verificationUrl: "#",
      level: "Professional",
    },
    {
      id: 32,
      title: "Technical Skills Certificate",
      issuer: "Tech Academy",
      date: "2025",
      category: "technical",
      image: "/images/Certificates/33_671c0a4c-401d-463d-9d1a-7720769a0b6c.jpg",
      description:
        "Technical skills certification demonstrating proficiency in modern technologies and development practices.",
      skills: [
        "Technical Skills",
        "Modern Technologies",
        "Development Practices",
        "Engineering",
      ],
      verificationUrl: "#",
      level: "Intermediate",
    },
    {
      id: 33,
      title: "Data Analysis with Python",
      issuer: "freeCodeCamp",
      date: "2025",
      category: "edtech",
      image:
        "/images/Certificates/34_freecodecamp_data_Analysis_Certificate.png",
      description:
        "freeCodeCamp Data Analysis with Python certification covering data manipulation, visualization, and statistical analysis.",
      skills: [
        "Data Analysis",
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Data Visualization",
      ],
      verificationUrl: "#",
      level: "Intermediate",
    },
    {
      id: 34,
      title: "Machine Learning Premium Mastery",
      issuer: "ML Institute",
      date: "2025",
      category: "ai",
      image: "/images/Certificates/35_MLPremium mastry_page-0001.jpg",
      description:
        "Premium Machine Learning mastery program covering advanced ML algorithms, deep learning, and real-world applications.",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "Advanced Algorithms",
        "AI Applications",
      ],
      verificationUrl: "#",
      level: "Advanced",
    },
    {
      id: 35,
      title: "Machine Learning Fundamentals",
      issuer: "Skill Up",
      date: "2025",
      category: "ai",
      image: "/images/Certificates/36_machine LEarning_Skill_Up.jpg",
      description:
        "Machine Learning fundamentals certification covering supervised and unsupervised learning, algorithms, and applications.",
      skills: [
        "Machine Learning",
        "Supervised Learning",
        "Unsupervised Learning",
        "ML Algorithms",
        "Model Training",
      ],
      verificationUrl: "#",
      level: "Intermediate",
    },
    {
      id: 36,
      title: "Professional Certification",
      issuer: "Certification Institute",
      date: "2025",
      category: "professional",
      image:
        "/images/Certificates/37_certificate-rmej6yt575qb-1770205254_page-0001.jpg",
      description:
        "Professional certification recognizing expertise, skills, and professional achievements in the field.",
      skills: [
        "Professional Expertise",
        "Industry Skills",
        "Professional Standards",
        "Best Practices",
      ],
      verificationUrl: "#",
      level: "Professional",
    },
    {
      id: 37,
      title: "Advanced Professional Certificate",
      issuer: "Professional Academy",
      date: "2025",
      category: "professional",
      image:
        "/images/Certificates/38_certificate-36hwi5gc4uei-1770204308_page-0001.jpg",
      description:
        "Advanced professional certificate demonstrating mastery of professional skills and industry expertise.",
      skills: [
        "Advanced Skills",
        "Professional Mastery",
        "Industry Expertise",
        "Leadership",
      ],
      verificationUrl: "#",
      level: "Advanced",
    },
    {
      id: 38,
      title: "Data Science with Python - Advanced",
      issuer: "SMARTED",
      date: "2025",
      category: "Data Science",
      image:
        "/images/Certificates/18_DATA_SCIENCE_WITH_PYTHON-Lucky_Sharm_SMARTED.jpg.jpg",
      description:
        "Advanced Data Science with Python certification from SMARTED covering in-depth data analysis, machine learning algorithms, and practical implementation.",
      skills: [
        "Data Science",
        "Python",
        "Advanced Analytics",
        "Machine Learning",
        "Data Engineering",
        "Python Libraries",
      ],
      verificationUrl: "#",
      level: "Advanced",
    },
  ];

  const categories = [
    {
      id: "all",
      name: "All Certificates",
      icon: "🏆",
      count: certificatesData.length,
    },
    {
      id: "oracle",
      name: "Oracle",
      icon: "🔵",
      count: certificatesData.filter((cert) => cert.category === "oracle")
        .length,
    },
    {
      id: "udemy",
      name: "Udemy",
      icon: "🎓",
      count: certificatesData.filter((cert) => cert.category === "udemy")
        .length,
    },
    {
      id: "cisco",
      name: "Cisco",
      icon: "🔒",
      count: certificatesData.filter((cert) => cert.category === "cisco")
        .length,
    },
    {
      id: "government",
      name: "Government",
      icon: "🏛️",
      count: certificatesData.filter((cert) => cert.category === "government")
        .length,
    },
    {
      id: "training",
      name: "Training",
      icon: "📚",
      count: certificatesData.filter((cert) => cert.category === "training")
        .length,
    },
    {
      id: "edtech",
      name: "EdTech",
      icon: "💻",
      count: certificatesData.filter((cert) => cert.category === "edtech")
        .length,
    },
    {
      id: "competition",
      name: "Competition",
      icon: "🏅",
      count: certificatesData.filter((cert) => cert.category === "competition")
        .length,
    },
    {
      id: "finance",
      name: "Finance",
      icon: "💰",
      count: certificatesData.filter((cert) => cert.category === "finance")
        .length,
    },
    {
      id: "Data Science",
      name: "Data Science",
      icon: "📊",
      count: certificatesData.filter((cert) => cert.category === "Data Science")
        .length,
    },
    {
      id: "ai",
      name: "AI & ML",
      icon: "🤖",
      count: certificatesData.filter((cert) => cert.category === "ai").length,
    },
    {
      id: "professional",
      name: "Professional",
      icon: "👔",
      count: certificatesData.filter((cert) => cert.category === "professional")
        .length,
    },
    {
      id: "technical",
      name: "Technical",
      icon: "⚙️",
      count: certificatesData.filter((cert) => cert.category === "technical")
        .length,
    },
    {
      id: "leadership",
      name: "Leadership",
      icon: "👥",
      count: certificatesData.filter((cert) => cert.category === "leadership")
        .length,
    },
    {
      id: "challenge",
      name: "Challenge",
      icon: "🎯",
      count: certificatesData.filter((cert) => cert.category === "challenge")
        .length,
    },
    {
      id: "Hackthon",
      name: "Hackathon",
      icon: "💡",
      count: certificatesData.filter((cert) => cert.category === "Hackthon")
        .length,
    },
  ];

  const filteredCertificates =
    activeFilter === "all"
      ? certificatesData
      : certificatesData.filter((cert) => cert.category === activeFilter);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Professional":
        return "#10b981";
      case "Advanced":
        return "#3b82f6";
      case "Intermediate":
        return "#f59e0b";
      case "Training":
        return "#8b5cf6";
      case "Internship":
        return "#06b6d4";
      case "Participation":
        return "#ef4444";
      case "Achievement":
        return "#22c55e";
      default:
        return "#6b7280";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "oracle":
        return "#ff6b35";
      case "udemy":
        return "#a435f0";
      case "cisco":
        return "#1ba1e2";
      case "government":
        return "#2ecc71";
      case "training":
        return "#f39c12";
      case "edtech":
        return "#e74c3c";
      case "competition":
        return "#9b59b6";
      case "finance":
        return "#27ae60";
      case "Data Science":
        return "#3498db";
      case "ai":
        return "#e91e63";
      case "professional":
        return "#34495e";
      case "technical":
        return "#16a085";
      case "leadership":
        return "#d35400";
      case "challenge":
        return "#c0392b";
      case "Hackthon":
        return "#8e44ad";
      case "Training":
        return "#f39c12";
      case "Government":
        return "#2ecc71";
      default:
        return "#95a5a6";
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <div className="certificates-container">
      <BackButton position="top-left" size="medium" />
      <div className="certificates-content">
        {/* Header Section */}
        <div className="certificates-header">
          <h1 className="certificates-title">
            My <span className="gradient-text">Achievements</span> &
            Certifications
          </h1>
          <p className="certificates-subtitle">
            A comprehensive collection of professional certifications, training
            programs, and achievements that demonstrate my commitment to
            continuous learning and professional development.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="certificates-stats">
          <div className="stat-card">
            <div className="stat-number">{certificatesData.length}</div>
            <div className="stat-label">Total Certificates</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{categories.length - 1}</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {new Set(certificatesData.map((cert) => cert.issuer)).size}
            </div>
            <div className="stat-label">Issuing Organizations</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {
                certificatesData.filter((cert) => cert.level === "Professional")
                  .length
              }
            </div>
            <div className="stat-label">Professional Level</div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="certificates-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-button ${activeFilter === category.id ? "active" : ""}`}
              onClick={() => setActiveFilter(category.id)}
              style={{ "--category-color": getCategoryColor(category.id) }}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-text">{category.name}</span>
              <span className="filter-count">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {filteredCertificates.map((certificate) => (
            <div
              key={certificate.id}
              className="certificate-card"
              onClick={() => openModal(certificate)}
              style={{
                "--category-color": getCategoryColor(certificate.category),
              }}
            >
              <div className="certificate-image-container">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                  loading="lazy"
                />
                <div className="certificate-overlay">
                  <div className="overlay-content">
                    <span className="view-icon">👁️</span>
                    <span className="view-text">View Details</span>
                  </div>
                </div>
                <div
                  className="certificate-level"
                  style={{ backgroundColor: getLevelColor(certificate.level) }}
                >
                  {certificate.level}
                </div>
              </div>

              <div className="certificate-info">
                <div className="certificate-header">
                  <h3 className="certificate-title">{certificate.title}</h3>
                  <div className="certificate-issuer">
                    <span className="issuer-icon">🏢</span>
                    <span className="issuer-name">{certificate.issuer}</span>
                  </div>
                </div>

                <div className="certificate-meta">
                  <div className="certificate-date">
                    <span className="date-icon">📅</span>
                    <span className="date-text">{certificate.date}</span>
                  </div>
                  <div className="certificate-category">
                    <span
                      className="category-badge"
                      style={{
                        backgroundColor: getCategoryColor(certificate.category),
                      }}
                    >
                      {certificate.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                <p className="certificate-description">
                  {certificate.description}
                </p>

                <div className="certificate-skills">
                  {certificate.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                  {certificate.skills.length > 3 && (
                    <span className="skill-tag more">
                      +{certificate.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedCertificate && (
          <div className="certificate-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <span>✕</span>
              </button>

              <div className="modal-header">
                <h2 className="modal-title">{selectedCertificate.title}</h2>
                <div className="modal-issuer">
                  <span className="issuer-icon">🏢</span>
                  <span className="issuer-name">
                    {selectedCertificate.issuer}
                  </span>
                </div>
              </div>

              <div className="modal-body">
                <div className="modal-image-container">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="modal-image"
                  />
                </div>

                <div className="modal-details">
                  <div className="detail-row">
                    <span className="detail-label">Date:</span>
                    <span className="detail-value">
                      {selectedCertificate.date}
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Level:</span>
                    <span
                      className="detail-value level-badge"
                      style={{
                        backgroundColor: getLevelColor(
                          selectedCertificate.level,
                        ),
                      }}
                    >
                      {selectedCertificate.level}
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Category:</span>
                    <span
                      className="detail-value category-badge"
                      style={{
                        backgroundColor: getCategoryColor(
                          selectedCertificate.category,
                        ),
                      }}
                    >
                      {selectedCertificate.category.toUpperCase()}
                    </span>
                  </div>

                  <div className="modal-description">
                    <h4>Description</h4>
                    <p>{selectedCertificate.description}</p>
                  </div>

                  <div className="modal-skills">
                    <h4>Skills Covered</h4>
                    <div className="skills-list">
                      {selectedCertificate.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-actions">
                    <button
                      className="btn-primary"
                      onClick={() =>
                        window.open(
                          selectedCertificate.verificationUrl,
                          "_blank",
                        )
                      }
                    >
                      Verify Certificate
                    </button>
                    <button
                      className="btn-secondary"
                      onClick={() =>
                        window.open(selectedCertificate.image, "_blank")
                      }
                    >
                      Download Image
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

export default Certificates;
