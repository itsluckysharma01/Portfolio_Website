// src/components/About.jsx

import React from 'react';
import './css/About.css';
import myImage from './images/profile/my_image.jpg';
import SocialButton from './SocialButton'; // Import the new component

// SVG paths for each social platform
const githubSvgPath = "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z";

const linkedinSvgPath = "M20.447 20.447h-3.901v-6.954c0-1.657-.591-2.793-1.854-2.793-1.025 0-1.637.691-1.917 1.365-.098.24-.122.576-.122.919v7.463h-3.901s.053-10.638 0-11.755h3.901v1.652c.241-.796 1.44-1.921 3.515-1.921 2.569 0 4.542 1.681 4.542 5.308v6.716zm-17.795-13.918c-.894 0-1.516-.621-1.516-1.428 0-.792.622-1.428 1.516-1.428s1.516.636 1.516 1.428c0 .807-.622 1.428-1.516 1.428zm-1.918 13.918h3.901s.053-11.755 0-11.755h-3.901v11.755z";

const instagramSvgPath = "M12 0c-3.385 0-3.805.016-5.132.073-1.325.059-2.22.3-3.008.625-.79.327-1.492.835-2.195 1.538-.703.703-1.21 1.406-1.538 2.195-.325.788-.566 1.683-.625 3.008-.057 1.327-.073 1.747-.073 5.132s.016 3.805.073 5.132c.059 1.325.3 2.22.625 3.008.327.79.835 1.492 1.538 2.195.703.703 1.406 1.21 2.195 1.538.788.325 1.683.566 3.008.625 1.327.057 1.747.073 5.132.073s3.805-.016 5.132-.073c1.325-.059 2.22-.3 3.008-.625.79-.327 1.492-.835 2.195-1.538.703-.703 1.21-1.406 1.538-2.195.325-.788.566-1.683.625-3.008.057-1.327.073-1.747.073-5.132s-.016-3.805-.073-5.132c-.059-1.325-.3-2.22-.625-3.008-.327-.79-.835-1.492-1.538-2.195-.703-.703-1.406-1.21-2.195-1.538-.788-.325-1.683-.566-3.008-.625-1.327-.057-1.747-.073-5.132-.073zm0 2.132c1.789 0 2.001.008 2.704.035.666.028 1.054.148 1.488.327.437.179.79.431 1.132.773.344.344.594.695.773 1.132.179.434.3 1.053.327 1.488.027.703.035.915.035 2.704s-.008 2.001-.035 2.704c-.028.666-.148 1.054-.327 1.488-.179.437-.431.79-.773 1.132-.344.344-.695.594-1.132.773-.434.179-1.053.3-1.488.327-.703.027-.915.035-2.704.035s-2.001-.008-2.704-.035c-.666-.028-1.054-.148-1.488-.327-.437-.179-.79-.431-1.132-.773-.344-.344-.594-.695-.773-1.132-.179-.434-.3-1.053-.327-1.488-.027-.703-.035-.915-.035-2.704s.008-2.001.035-2.704c.028-.666.148-1.054.327-1.488.179-.437.431-.79.773-1.132.344-.344.695-.594 1.132-.773.434-.179 1.053-.3 1.488-.327.703-.027.915-.035 2.704-.035zm0 11.868c2.934 0 5.309-2.375 5.309-5.309s-2.375-5.309-5.309-5.309-5.309 2.375-5.309 5.309 2.375 5.309 5.309 5.309zm-5.318-10.435c-.868 0-1.571-.703-1.571-1.571s.703-1.571 1.571-1.571 1.571.703 1.571 1.571-.703 1.571-1.571 1.571zm-.037 8.946c0-1.789 1.45-3.239 3.239-3.239s3.239 1.45 3.239 3.239-1.45 3.239-3.239 3.239-3.239-1.45-3.239-3.239z";

const gmailSvgPath = "M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm-1.88 2.053l-8.12 7.848-8.12-7.848c-0.271-0.261-0.707-0.261-0.978 0s-0.271 0.707 0 0.966l8.601 8.318c0.271 0.261 0.707 0.261 0.978 0l8.601-8.318c0.271-0.261 0.271-0.705 0-0.966s-0.707-0.261-0.978 0z";

const personalLinks = [
  { platform: 'GitHub', svgPath: githubSvgPath, link: 'https://github.com/itsluckysharma01', '_blank': true },
  { platform: 'LinkedIn', svgPath: linkedinSvgPath, link: 'https://www.linkedin.com/in/lucky-sharma918894599977' , '_blank': true  },
  { platform: 'Instagram', svgPath: instagramSvgPath, link: 'https://www.instagram.com/its_pandit_lucky01' , '_blank': true  },
  { platform: 'Gmail', svgPath: gmailSvgPath, link: 'itsluckysharma001@gmail.com' , '_blank': true  }, 
];


const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        
        <div className="about-main">
          <div className="about-avatar">
            <img src={myImage} alt="Lucky Sharma" />
          </div>
          
          <div className="about-info">
            <h2 className="about-name">Lucky Sharma</h2>
            <p className="about-description">
              I am a full-stack developer who thrives on creating elegant and intuitive solutions. With over 3 years of experience, I specialize in building end-to-end applications that integrate my strong skills in data science and analysis. I use hands-on projects to apply statistical modeling and machine learning, ensuring every solution is not just well-built but also data-informed.
            </p>
            
            <div className="about-tags">
              <span className="about-tag">Problem Solver</span>
              <span className="about-tag">Creative Thinker</span>
              <span className="about-tag">Team Player</span>
            </div>

            <div className="about-socials">
              {personalLinks.map((link, index) => (
                <SocialButton
                  key={index}
                  svgPath={link.svgPath}
                  text={`View ${link.platform} Profile`}
                  link={link.link}
                  platformClass={link.platform.toLowerCase()}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;