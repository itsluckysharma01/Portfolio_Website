import React, { useState, useEffect } from "react";
import { SEOHelmet } from "../../utils/SEOHelmet";
import "./css/Certificates.css";
import BackButton from "../../components/BackButton";
import certificatesData from "../../data/certificatesConfig";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <>
      <SEOHelmet
        title="Certifications - Lucky Sharma (itsluckysharma01) | Oracle, Cisco, AI/ML, Data Science"
        description="View Lucky Sharma's (itsluckysharma01, luckysharma) professional certifications and credentials in Oracle, Cisco, Data Science, AI/ML, and more. Verified achievements recognizing technical expertise."
        keywords="Lucky Sharma certifications, luckysharma certifications, itsluckysharma01 certifications, LuckySharma credentials, LUCKYSHARMA achievements, Oracle certification, Cisco certification, Data Science certification, AI certification, ML certification, professional credentials, verified achievements, technical expertise"
        url="https://itsluckysharma01.in/certificates"
        type="article"
      />
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
                    (cert) => cert.level === "Professional",
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
                            certificate.category,
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

          {/* Modal */}
          {isModalOpen && selectedCertificate && (
            <div className="certificate-modal" onClick={closeModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
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
    </>
  );
};

export default Certificates;
