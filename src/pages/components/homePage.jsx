import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../navBar";
import "./css/homePage.css";
import profileImage from "./images/profile/my_image.jpg";
import project1Img from "./images/projectimg/project1.png";
import project2Img from "./images/projectimg/project2.png";
import project3Img from "./images/projectimg/project3.png";
import project4Img from "./images/projectimg/project4.png";

const HomePage = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const phrases = useMemo(
    () => ["Code with Purpose", "Build with Precision", "Create with Passion"],
    []
  );

  useEffect(() => {
    let timeoutId;

    const typeWriter = () => {
      const current = phrases[currentPhrase];

      if (!isDeleting && currentChar < current.length) {
        // Typing forward
        setTypewriterText(current.substring(0, currentChar + 1));
        setCurrentChar((prev) => prev + 1);
        timeoutId = setTimeout(typeWriter, 50);
      } else if (!isDeleting && currentChar === current.length) {
        // Pause at end, then start deleting
        timeoutId = setTimeout(() => setIsDeleting(true), 600);
      } else if (isDeleting && currentChar > 0) {
        // Deleting backward
        setTypewriterText(current.substring(0, currentChar - 1));
        setCurrentChar((prev) => prev - 1);
        timeoutId = setTimeout(typeWriter, 20);
      } else if (isDeleting && currentChar === 0) {
        // Switch to next phrase
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        timeoutId = setTimeout(typeWriter, 200);
      }
    };

    timeoutId = setTimeout(typeWriter, 500);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentPhrase, currentChar, isDeleting, phrases]);

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll(".card, section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Certificates data and functions
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
  ];

  const filteredCertificates =
    activeFilter === "all"
      ? certificatesData.slice(0, 6)
      : certificatesData
          .filter((cert) => cert.category === activeFilter)
          .slice(0, 6);

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
    <>
      <NavBar />

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-container">
          <div className="hero-content animate-fade-in-up">
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Lucky Sharma</span>
            </h1>
            <div className="typewriter-container">
              <span className="typewriter-text">{typewriterText}</span>
              <span className="typewriter-cursor">|</span>
            </div>
            <p className="hero-description" aria-label="About Lucky Sharma">
              Front-End developer crafting clean, accessible UIs. Comfortable
              with JavaScript, React, HTML/CSS, Python, and Java. Ethical
              hacking and deep learning enthusiast.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => navigate("/contact")}
              >
                Get In Touch
              </button>
              <button
                className="btn-secondary"
                onClick={() => navigate("/Projects")}
              >
                View Projects
              </button>
            </div>
          </div>
          <div className="hero-image animate-fade-in-right">
            <img
              src={profileImage}
              alt="Portrait of Lucky Sharma"
              className="profile-image"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </div>
      </section>

      {/* Interactive Skills Demonstration */}
      <section id="skills-demo" className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="gradient-text">Technical Excellence</span> in
              Action
            </h2>
            <p className="section-description">
              Interactive demonstrations of core competencies across the full
              development stack
            </p>
          </div>

          <div className="skills-grid">
            {/* Frontend Frameworks */}
            <div className="skill-card card">
              <div className="skill-header">
                <div className="skill-icon">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0  0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.992-1.36-1.56z" />
                  </svg>
                </div>
                <h3 className="skill-title">AI/ML</h3>
              </div>
              <p className="skill-description">
                Machine learning models, data preprocessing, and AI algorithms
                with Python and TensorFlow
              </p>
              <div className="code-preview">
                <div className="code-comment">{"//"} Model Train</div>
                <div className="code-line">history = model.fit {"("}</div>
                <div className="code-line code-indent">
                  train_ds,<br></br>epochs=EPOCHS ,
                </div>
                <div className="code-line code-indent">
                  batch_size=BATCH_SIZE,<br></br> verbose=1,
                </div>
                <div className="code-line">
                  validation_data=val_ds
                  {")"}
                </div>
              </div>
              <button
                className="skill-link"
                onClick={() => navigate("/skillhub")}
              >
                <span>Explore Ai and Machine Learning Libraries</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Backend Architecture */}
            <div className="skill-card card">
              <div className="skill-header">
                <div className="skill-icon backend">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="skill-title">Backend Architecture</h3>
              </div>
              <p className="skill-description">
                Node.js, Python, and cloud-native solutions with scalable
                database design
              </p>
              <div className="code-preview">
                <div className="code-comment">{"//"} API Architecture Flow</div>
                <div className="code-line">
                  app.post('/api/users', async (req, res) =&gt; {`{`}
                </div>
                <div className="code-line code-indent">
                  const user = await User.create(req.body);
                </div>
                <div className="code-line code-indent">
                  res.status(201).json({`{ user }`});
                </div>
                <div className="code-line">{`}`});</div>
              </div>
              <button
                className="skill-link backend"
                onClick={() => navigate("/skillhub")}
              >
                <span>Explore Backend Skills</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Full-Stack Integration */}
            <div className="skill-card card">
              <div className="skill-header">
                <div className="skill-icon fullstack">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <h3 className="skill-title">Full-Stack Integration</h3>
              </div>
              <p className="skill-description">
                End-to-end solutions connecting frontend experiences with robust
                backend systems
              </p>
              <div className="code-preview">
                <div className="code-comment">{"//"} API Integration Demo</div>
                <div className="code-line">
                  const fetchUserData = async () =&gt; {`{`}
                </div>
                <div className="code-line code-indent">
                  const response = await fetch('/api/users');
                </div>
                <div className="code-line code-indent">
                  return response.json();
                </div>
                <div className="code-line">{`}`};</div>
              </div>
              <button
                className="skill-link fullstack"
                onClick={() => navigate("/skillhub")}
              >
                <span>Explore Integration</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            {/* Data Science and Analytics */}
            <div className="skill-card card">
              <div className="skill-header">
                <div className="skill-icon fullstack">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <h3 className="skill-title">Data Science and Analytics</h3>
              </div>
              <p className="skill-description">
                End-to-end data analysis workflows from data ingestion and
                cleaning to predictive modeling and visualization
              </p>
              <div className="code-preview">
                <div className="code-comment">{"//"} Model Train</div>
                <div className="code-line">history = model.fit {"("}</div>
                <div className="code-line code-indent">
                  train_ds,<br></br>epochs=EPOCHS ,
                </div>
                <div className="code-line code-indent">
                  batch_size=BATCH_SIZE,<br></br> verbose=1,
                </div>
                <div className="code-line">
                  validation_data=val_ds
                  {")"}
                </div>
              </div>
              <button
                className="skill-link fullstack"
                onClick={() => navigate("/skillhub")}
              >
                <span>Explore Integration</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="certificates-section">
        <div className="container">
          {/* Header Section */}
          <div className="section-header">
            <h2 className="section-title">
              My <span className="gradient-text">Achievements</span> &
              Certifications
            </h2>
            <p className="section-description">
              A comprehensive collection of professional certifications,
              training programs, and achievements that demonstrate my commitment
              to continuous learning and professional development.
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
                  certificatesData.filter(
                    (cert) => cert.level === "Professional"
                  ).length
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
                className={`filter-button ${
                  activeFilter === category.id ? "active" : ""
                }`}
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
                    style={{
                      backgroundColor: getLevelColor(certificate.level),
                    }}
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
                          backgroundColor: getCategoryColor(
                            certificate.category
                          ),
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

          <div className="section-footer">
            <button
              className="btn-primary"
              onClick={() => navigate("/certificates")}
            >
              <span>View All Certificates</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </button>
          </div>
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
                          selectedCertificate.level
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
                          selectedCertificate.category
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
                          "_blank"
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
      </section>

      {/* Featured Projects Carousel */}
      <section id="featured-projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Featured <span className="gradient-text">Project Showcase</span>
            </h2>
            <p className="section-description">
              Interactive case studies demonstrating problem-solving approach
              and technical execution. Click on any project to explore more.
            </p>
          </div>

          <div className="projects-grid">
            {/* Dataset*/}
            <div
              className="project-card card interactive-card"
              onClick={() => navigate("/projects")}
              style={{ cursor: "pointer" }}
            >
              <div className="project-image">
                <img
                  src={project4Img}
                  alt="Comprehensive Dataset Collection"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
                  }}
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span>View Details</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">
                  Comprehensive Dataset Collection
                </h3>
                <p className="project-description">
                  A curated repository of 15+ high-quality datasets spanning
                  healthcare, entertainment, transportation, and demographics.
                  Perfect for data science projects, machine learning
                  experiments, and analytical research.
                </p>

                <div className="tech-stack">
                  <span className="tech-tag secondary">Dataset</span>
                  <span className="tech-tag primary">Open Source</span>
                  <span className="tech-tag accent">Python</span>
                  <span className="tech-tag secondary">Data Science</span>
                </div>

                <div className="project-stats">
                  <div className="stat">
                    <div className="stat-value secondary">15+</div>
                    <div className="stat-label">Datasets</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value primary">100%</div>
                    <div className="stat-label">Compatible</div>
                  </div>
                </div>

                <div
                  className="project-actions"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="btn-secondary small"
                    onClick={() =>
                      window.open(
                        "https://github.com/itsluckysharma01/Datasets.git",
                        "_blank"
                      )
                    }
                  >
                    View Repository
                  </button>
                  <button
                    className="btn-icon"
                    onClick={() =>
                      window.open(
                        "https://github.com/itsluckysharma01/Datasets.git",
                        "_blank"
                      )
                    }
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Project 1: Potato Leaf Diseases Detection */}
            <div
              className="project-card card interactive-card"
              onClick={() => navigate("/projects")}
              style={{ cursor: "pointer" }}
            >
              <div className="project-image">
                <img
                  src={project1Img}
                  alt="Potato Leaf Diseases Detection"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                  }}
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span>Explore AI Model</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">
                  AI-Powered Plant Disease Detection
                </h3>
                <p className="project-description">
                  Revolutionary computer vision system using deep learning to
                  identify potato leaf diseases with 99.8% accuracy. Features
                  real-time image processing, disease classification, and
                  treatment recommendations.
                </p>

                <div className="tech-stack">
                  <span className="tech-tag primary">Python</span>
                  <span className="tech-tag secondary">TensorFlow</span>
                  <span className="tech-tag accent">Keras</span>
                  <span className="tech-tag primary">Flask</span>
                </div>

                <div className="project-stats">
                  <div className="stat">
                    <div className="stat-value primary">99.8%</div>
                    <div className="stat-label">Accuracy</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value secondary">50</div>
                    <div className="stat-label">Epochs</div>
                  </div>
                </div>

                <div
                  className="project-actions"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="btn-primary small"
                    onClick={() =>
                      window.open(
                        "https://huggingface.co/spaces/itsluckysharma01/Potato_Diseases_Detection_with_Deep_Learning",
                        "_blank"
                      )
                    }
                  >
                    Live Demo
                  </button>
                  <button
                    className="btn-icon"
                    onClick={() =>
                      window.open(
                        "https://github.com/itsluckysharma01/Potato_Leaf_Diseases_Detection_with_Deep-Learning-Tenserflow.git",
                        "_blank"
                      )
                    }
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2: Form Validation with Full-Stack Authentication*/}
            <div
              className="project-card card interactive-card"
              onClick={() => navigate("/projects")}
              style={{ cursor: "pointer" }}
            >
              <div className="project-image">
                <img
                  src={project2Img}
                  alt="Form Validation with Full-Stack Authentication"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
                  }}
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>Secure Authentication</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">
                  Full-Stack Authentication System
                </h3>
                <p className="project-description">
                  Enterprise-grade authentication system featuring secure user
                  registration, login, password validation, and session
                  management. Built with React frontend and Express.js backend
                  with MongoDB integration.
                </p>

                <div className="tech-stack">
                  <span className="tech-tag secondary">React.js</span>
                  <span className="tech-tag primary">Express.js</span>
                  <span className="tech-tag accent">Node.js</span>
                  <span className="tech-tag secondary">MongoDB</span>
                </div>

                <div className="project-stats">
                  <div className="stat">
                    <div className="stat-value secondary">JWT</div>
                    <div className="stat-label">Secure Tokens</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value primary">BCrypt</div>
                    <div className="stat-label">Password Hash</div>
                  </div>
                </div>

                <div
                  className="project-actions"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="btn-secondary small"
                    onClick={() =>
                      window.open(
                        "https://sign-up-form-lo8dkmb3l-lucky-sharmas-projects-d189830d.vercel.app/signup",
                        "_blank"
                      )
                    }
                  >
                    Live Demo
                  </button>
                  <button
                    className="btn-icon"
                    onClick={() =>
                      window.open(
                        "https://github.com/itsluckysharma01/full-stack-authentication-system-Signup-login-Form.git",
                        "_blank"
                      )
                    }
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Project 3: Quick Sign Project */}
            <div
              className="project-card card interactive-card"
              onClick={() => navigate("/projects")}
              style={{ cursor: "pointer" }}
            >
              <div className="project-image">
                <img
                  src={project3Img}
                  alt="Quick Sign Digital Signature Tool"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
                  }}
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                    <span>Digital Signature</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">
                  Quick Sign - Digital Signature Tool
                </h3>
                <p className="project-description">
                  Intuitive web-based digital signature application with smooth
                  drawing capabilities, customizable pen styles, and instant
                  download functionality. Perfect for document signing and
                  digital artwork creation.
                </p>

                <div className="tech-stack">
                  <span className="tech-tag accent">HTML5</span>
                  <span className="tech-tag primary">CSS3</span>
                  <span className="tech-tag secondary">JavaScript</span>
                  <span className="tech-tag accent">Canvas API</span>
                </div>

                <div className="project-stats">
                  <div className="stat">
                    <div className="stat-value accent">Canvas</div>
                    <div className="stat-label">Technology</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value primary">Instant</div>
                    <div className="stat-label">Download</div>
                  </div>
                </div>

                <div
                  className="project-actions"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="btn-accent small"
                    onClick={() =>
                      window.open(
                        "https://itsluckysharma01.github.io/Project-Quick-Signature/",
                        "_blank"
                      )
                    }
                  >
                    Try it Live
                  </button>
                  <button
                    className="btn-icon"
                    onClick={() =>
                      window.open(
                        "https://github.com/itsluckysharma01/Project-Quick-Signature.git",
                        "_blank"
                      )
                    }
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="section-footer">
            <button
              className="btn-primary"
              onClick={() => navigate("/projects")}
            >
              <span>View All Projects</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
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
                Active open-source contributor with consistent coding practice
                and community engagement
              </p>

              <div className="github-stats">
                <div className="stat">
                  <div className="stat-value primary">403</div>
                  <div className="stat-label">Total Contributions</div>
                </div>
                <div className="stat">
                  <div className="stat-value secondary">38</div>
                  <div className="stat-label">Repositories</div>
                </div>
                <div className="stat">
                  <div className="stat-value accent">106</div>
                  <div className="stat-label">Repository Stars</div>
                </div>
                <div className="stat">
                  <div className="stat-value primary">326</div>
                  <div className="stat-label">Total Commits</div>
                </div>
              </div>

              <button
                className="btn-primary"
                onClick={() =>
                  window.open("https://github.com/itsluckysharma01")
                }
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
                    <button onClick={() => navigate("/techblog")}>
                      Building Scalable React Applications with Modern
                      Architecture Patterns
                    </button>
                  </h4>
                  <p className="blog-post-excerpt">
                    Exploring advanced patterns for maintainable React codebases
                    including compound components, render props, and custom
                    hooks...
                  </p>
                  <div className="blog-post-meta">
                    December 15, 2024 to Present
                  </div>
                </article>

                <article className="blog-post secondary">
                  <h4 className="blog-post-title">
                    <button onClick={() => navigate("/techblog")}>
                      Optimizing Node.js Performance: From Development to
                      Production
                    </button>
                  </h4>
                  <p className="blog-post-excerpt">
                    Comprehensive guide to Node.js optimization techniques,
                    monitoring strategies, and deployment best practices...
                  </p>
                  <div className="blog-post-meta">
                    December 8, 2025 • 12 min read
                  </div>
                </article>

                <article className="blog-post accent">
                  <h4 className="blog-post-title">
                    <button onClick={() => navigate("/techblog")}>
                      The Future of Web Development: Trends Shaping 2025
                    </button>
                  </h4>
                  <p className="blog-post-excerpt">
                    Analysis of emerging technologies, frameworks, and
                    methodologies that will define the next generation of web
                    applications...
                  </p>
                  <div className="blog-post-meta">
                    November 28, 2025 • 10 min read
                  </div>
                </article>
              </div>

              <button
                className="blog-link"
                onClick={() => navigate("/techblog")}
              >
                <span>Read All Articles</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
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
              Ready to Build Something{" "}
              <span className="gradient-text">Extraordinary</span>?
            </h2>
            <p className="cta-description">
              Let's collaborate on your next project. From concept to
              deployment, I'll help bring your vision to life with clean code
              and exceptional user experiences.
            </p>

            <div className="cta-buttons">
              <button
                className="btn-primary"
                onClick={() => navigate("/contact")}
              >
                <span>Start a Project</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
              <button
                className="btn-secondary"
                onClick={() => navigate("/about")}
              >
                <span>Learn More About Me</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
