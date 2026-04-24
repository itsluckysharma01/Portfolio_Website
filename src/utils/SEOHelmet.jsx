import React from "react";
import { Helmet } from "react-helmet-async";

export const SEOHelmet = ({
  title = "Lucky Sharma - Full Stack Developer & AI/ML Engineer | Portfolio",
  description = "Lucky Sharma - Full Stack Developer & AI/ML Engineer from India. Professional portfolio showcasing projects, certifications, and expertise in web development and machine learning.",
  keywords = "Lucky Sharma, Lucky Sharma developer, Lucky Sharma portfolio, full stack developer, AI engineer, machine learning, data science, React, Python, web development",
  image = "https://itsluckysharma01.in/images/profile/lucky-sharma-profile.jpg",
  url = "https://itsluckysharma01.in/",
  type = "website",
  jsonLd = null,
}) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content={type} />
      <meta name="og:url" content={url} />
      <meta name="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@luckysharma" />
      <link rel="canonical" href={url} />

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
  name: "Lucky Sharma",
  url: "https://itsluckysharma01.in",
  image: "https://itsluckysharma01.in/images/profile/lucky-sharma-profile.jpg",
  jobTitle: "Full Stack Developer & AI/ML Engineer",
  description:
    "Full Stack Developer & AI/ML Engineer specializing in React, Python, Machine Learning, Data Science, and Cloud Technologies",
  sameAs: [
    "https://linkedin.com/in/lucky-sharma918894599977",
    "https://github.com/itsluckysharma01",
    "https://twitter.com/luckysharma",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Self-employed",
  },
};

// JSON-LD Structured Data for Organization
export const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lucky Sharma - Developer Portfolio",
  url: "https://itsluckysharma01.in",
  image: "https://itsluckysharma01.in/images/profile/lucky-sharma-profile.jpg",
  description:
    "Professional portfolio of Full Stack Developer & AI/ML Engineer - Lucky Sharma",
  founder: {
    "@type": "Person",
    name: "Lucky Sharma",
  },
  sameAs: [
    "https://linkedin.com/in/lucky-sharma918894599977",
    "https://github.com/itsluckysharma01",
  ],
};

// JSON-LD Structured Data for WebSite
export const WebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lucky Sharma - Developer Portfolio",
  url: "https://itsluckysharma01.in",
  description:
    "Professional portfolio of Lucky Sharma - Full Stack Developer & AI/ML Engineer from India",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://itsluckysharma01.in/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// JSON-LD Structured Data for CreativeWork (Projects)
export const ProjectSchema = (project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.title,
  description: project.description,
  image: project.image,
  url: project.url,
  author: {
    "@type": "Person",
    name: "Lucky Sharma",
  },
  datePublished: project.date,
  technologies: project.technologies || [],
});

// JSON-LD Structured Data for Educational Certification
export const CertificationSchema = (cert) => ({
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalCredential",
  name: cert.title,
  description: cert.description,
  credentialCategory: "professional",
  educationalLevel: cert.level,
  recognizedBy: {
    "@type": "Organization",
    name: cert.issuer,
  },
  issuedBy: {
    "@type": "Organization",
    name: cert.issuer,
  },
  dateIssued: cert.date,
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

export default SEOHelmet;
