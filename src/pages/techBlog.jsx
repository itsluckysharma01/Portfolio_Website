import React from 'react'
import './css/techBlog.css'

const TechBlog = () => {
  return (
    <div className="techblog-container">
      <div className="techblog-content">
        <h1 className="techblog-title">
          Tech Blog
        </h1>
        
        <div className="techblog-articles">
          <article className="techblog-article">
            <h2>Understanding React Hooks</h2>
            <p className="techblog-date">Published on Dec 15, 2024</p>
            <p className="techblog-excerpt">
              React Hooks revolutionized the way we write React components. In this post, we explore the most commonly used hooks and their practical applications...
            </p>
            <button className="techblog-button primary">
              Read More
            </button>
          </article>
          
          <article className="techblog-article secondary">
            <h2>Building Responsive Web Applications</h2>
            <p className="techblog-date">Published on Dec 10, 2024</p>
            <p className="techblog-excerpt">
              Creating responsive web applications is crucial in today's mobile-first world. Learn the best practices and techniques...
            </p>
            <button className="techblog-button secondary">
              Read More
            </button>
          </article>
        </div>
      </div>
    </div>
  )
}

export default TechBlog
