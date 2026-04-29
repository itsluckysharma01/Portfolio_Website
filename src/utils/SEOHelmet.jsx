import React from "react";
import { Helmet } from "react-helmet-async";

export const SEOHelmet = ({
  title = "Lucky Sharma - Full Stack Developer & AI/ML Engineer | Portfolio",
  description = "Lucky Sharma - Full Stack Developer & AI/ML Engineer from India. Professional portfolio showcasing projects, certifications, and expertise in web development and machine learning.",
  keywords = "Lucky Sharma, luckysharma, LuckySharma, LUCKYSHARMA, lucky sharma, itsluckysharma01, itsluckysharma01 portfolio, itsluckysharma01 github, Lucky Sharma developer, Lucky Sharma portfolio, full stack developer, AI engineer, machine learning, data science, React, Python, web development, Lucky Sharma github",
  image = "https://itsluckysharma01.in/images/profile/lucky-sharma-profile.jpg",
  url = "https://itsluckysharma01.in/",
  type = "website",
  jsonLd = null,
  author = "Lucky Sharma",
  subject = "Portfolio",
}) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="subject" content={subject} />
      <meta name="language" content="en-IN" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:site_name"
        content="Lucky Sharma - Developer Portfolio"
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter / X Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@itsluckysharma01" />
      <meta name="twitter:site" content="@itsluckysharma01" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="https://github.com" />
      <link rel="dns-prefetch" href="https://linkedin.com" />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

// JSON-LD Structured Data for Person/Portfolio
export const PersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://itsluckysharma01.in/#person",
  name: "Lucky Sharma",
  alternateName: [
    "luckysharma",
    "LuckySharma",
    "LUCKYSHARMA",
    "lucky sharma",
    "itsluckysharma01",
  ],
  url: "https://itsluckysharma01.in",
  image: {
    "@type": "ImageObject",
    url: "https://itsluckysharma01.in/images/profile/lucky-sharma-profile.jpg",
    width: 500,
    height: 500,
  },
  jobTitle: ["Full Stack Developer", "AI/ML Engineer", "Data Scientist"],
  description:
    "Full Stack Developer & AI/ML Engineer specializing in React, Python, Machine Learning, Data Science, and Cloud Technologies. Available for freelance and full-time opportunities.",
  email: "itsluckysharma001@gmail.com",
  telephone: "+91",
  birthPlace: {
    "@type": "Place",
    name: "India",
  },
  areaServed: {
    "@type": "GeoShape",
    box: "28.6139 77.2090 28.7041 77.3640",
  },
  worksFor: {
    "@type": "Organization",
    name: "Self-employed",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Full Stack Development Certification",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Machine Learning Certification",
    },
  ],
  sameAs: [
    "https://linkedin.com/in/lucky-sharma918894599977",
    "https://github.com/itsluckysharma01",
    "https://twitter.com/itsluckysharma01",
    "https://instagram.com/its_pandit_lucky01",
  ],
  knowsAbout: [
    "React",
    "JavaScript",
    "Python",
    "Machine Learning",
    "Data Science",
    "Full Stack Development",
    "Web Development",
    "AI/ML",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Cloud Computing",
    "REST APIs",
    "GraphQL",
  ],
};

// JSON-LD Structured Data for Organization
export const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://itsluckysharma01.in/#organization",
  name: "Lucky Sharma - Developer Portfolio",
  alternateName: ["itsluckysharma01", "Lucky Sharma Portfolio"],
  url: "https://itsluckysharma01.in",
  image: {
    "@type": "ImageObject",
    url: "https://itsluckysharma01.in/images/profile/lucky-sharma-profile.jpg",
    width: 500,
    height: 500,
  },
  description:
    "Professional portfolio of Full Stack Developer & AI/ML Engineer - Lucky Sharma. Specializing in React, Python, Machine Learning, and Full Stack Development.",
  founder: {
    "@type": "Person",
    name: "Lucky Sharma",
    url: "https://itsluckysharma01.in",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "itsluckysharma001@gmail.com",
  },
  sameAs: [
    "https://linkedin.com/in/lucky-sharma918894599977",
    "https://github.com/itsluckysharma01",
    "https://twitter.com/itsluckysharma01",
    "https://instagram.com/its_pandit_lucky01",
  ],
};

// JSON-LD Structured Data for WebSite
export const WebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://itsluckysharma01.in/#website",
  name: "Lucky Sharma - Developer Portfolio",
  alternateName: ["itsluckysharma01.in", "Lucky Sharma Portfolio"],
  url: "https://itsluckysharma01.in",
  description:
    "Professional portfolio of Lucky Sharma - Full Stack Developer & AI/ML Engineer from India. Showcasing projects, certifications, and technical expertise.",
  creator: {
    "@type": "Person",
    name: "Lucky Sharma",
  },
  publisher: {
    "@type": "Person",
    name: "Lucky Sharma",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://itsluckysharma01.in/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// JSON-LD Structured Data for GitHub Profile
export const GitHubProfileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://github.com/itsluckysharma01#profile",
  name: "Lucky Sharma GitHub Profile",
  url: "https://github.com/itsluckysharma01",
  mainEntity: {
    "@type": "Person",
    name: "Lucky Sharma",
    alternateName: ["itsluckysharma01", "luckysharma"],
    url: "https://itsluckysharma01.in",
    sameAs: [
      "https://itsluckysharma01.in",
      "https://linkedin.com/in/lucky-sharma918894599977",
      "https://twitter.com/itsluckysharma01",
    ],
  },
};

// JSON-LD Structured Data for CreativeWork (Projects)
export const ProjectSchema = (project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": `https://itsluckysharma01.in/projects#${project.id}`,
  name: project.title,
  description: project.description,
  image: {
    "@type": "ImageObject",
    url: project.image,
  },
  url: project.url || "https://itsluckysharma01.in/projects",
  author: {
    "@type": "Person",
    name: "Lucky Sharma",
    url: "https://itsluckysharma01.in",
  },
  datePublished: project.date,
  inLanguage: "en-IN",
  keywords: `${project.title}, Lucky Sharma, portfolio project, ${project.technologies ? project.technologies.join(", ") : "web development"}`,
  technologies: project.technologies || [],
  sourceOrganization: {
    "@type": "Organization",
    name: "Lucky Sharma",
  },
});

// JSON-LD Structured Data for Educational Certification
export const CertificationSchema = (cert) => ({
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalCredential",
  "@id": `https://itsluckysharma01.in/certificates#${cert.id}`,
  name: cert.title,
  description: cert.description,
  credentialCategory: "professional",
  educationalLevel: cert.level || "Advanced",
  recognizedBy: {
    "@type": "Organization",
    name: cert.issuer,
    url: cert.issuerUrl || "",
  },
  issuedBy: {
    "@type": "Organization",
    name: cert.issuer,
  },
  dateIssued: cert.date,
  author: {
    "@type": "Person",
    name: "Lucky Sharma",
  },
});

// JSON-LD Structured Data for BreadcrumbList
export const BreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});

// JSON-LD Structured Data for Contact Page
export const ContactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://itsluckysharma01.in/contact#page",
  name: "Contact Lucky Sharma",
  description:
    "Get in touch with Lucky Sharma - Full Stack Developer & AI/ML Engineer",
  url: "https://itsluckysharma01.in/contact",
  mainEntity: {
    "@type": "Person",
    name: "Lucky Sharma",
    email: "itsluckysharma001@gmail.com",
    url: "https://itsluckysharma01.in",
    sameAs: [
      "https://github.com/itsluckysharma01",
      "https://linkedin.com/in/lucky-sharma918894599977",
      "https://twitter.com/itsluckysharma01",
    ],
  },
};

// JSON-LD Structured Data for FAQ Page
export const FAQPageSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export default SEOHelmet;
