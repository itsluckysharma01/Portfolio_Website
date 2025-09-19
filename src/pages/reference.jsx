import React from 'react'

const reference = () => {
  return (
    <div>
                  {/* Professional References */}
            <div className="references-section">
              <h2 className="section-title">
                Professional <span className="text-gradient">References</span>
              </h2>
              
              <div className="references-list">
                {/* Reference 1 */}
                <div className="reference-card card">
                  <div className="reference-content">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sarah Chen" className="reference-avatar" loading="lazy" />
                    <div className="reference-info">
                      <h3 className="reference-name">Sarah Chen</h3>
                      <p className="reference-position">CTO, TechCorp Solutions</p>
                      <p className="reference-quote">"Alex consistently delivers high-quality code and demonstrates exceptional problem-solving skills. His ability to mentor junior developers while maintaining technical excellence makes him invaluable to our team."</p>
                      <a href="#" className="reference-link primary">View LinkedIn Recommendation</a>
                    </div>
                  </div>
                </div> 
                
                {/* Reference 2 */}
                <div className="reference-card card">
                  <div className="reference-content">
                    <img src="https://images.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg" alt="Michael Torres" className="reference-avatar" loading="lazy" />
                    <div className="reference-info">
                      <h3 className="reference-name">Michael Torres</h3>
                      <p className="reference-position">Founder, StartupXYZ</p>
                      <p className="reference-quote">"Alex was instrumental in building our platform from the ground up. His full-stack expertise and startup mindset helped us scale from idea to 10,000+ users in record time."</p>
                      <a href="#" className="reference-link secondary">Contact Reference</a>
                    </div>
                  </div>
                </div>
                
                {/* Reference 3 */}
                <div className="reference-card card">
                  <div className="reference-content">
                    <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Emily Rodriguez" className="reference-avatar" loading="lazy" />
                    <div className="reference-info">
                      <h3 className="reference-name">Emily Rodriguez</h3>
                      <p className="reference-position">Senior Product Manager, TechCorp</p>
                      <p className="reference-quote">"Working with Alex is a pleasure. He translates complex technical concepts into clear business value and always delivers on time. His collaborative approach makes cross-functional projects seamless."</p>
                      <a href="#" className="reference-link accent">View Recommendation</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default reference



/* References */
// .reference-card {
//   padding: 1.5rem;
// }

// .reference-content {
//   display: flex;
//   align-items: flex-start;
// }

// .reference-avatar {
//   width: 3rem;
//   height: 3rem;
//   border-radius: 50%;
//   margin-right: 1rem;
//   object-fit: cover;
// }

// .reference-info {
//   flex: 1;
// }

// .reference-name {
//   font-weight: 600;
//   margin-bottom: 0.25rem;
// }

// .reference-position {
//   color: var(--text-secondary);
//   font-size: 0.875rem;
//   margin-bottom: 0.5rem;
// }

// .reference-quote {
//   color: var(--text-muted);
//   font-size: 0.875rem;
//   font-style: italic;
//   margin-bottom: 0.75rem;
// }

// .reference-link {
//   color: var(--primary);
//   font-size: 0.875rem;
//   text-decoration: none;
//   transition: color 0.3s ease;
// }

// .reference-link.primary {
//   color: var(--primary);
// }

// .reference-link.primary:hover {
//   color: var(--primary-400);
// }

// .reference-link.secondary {
//   color: var(--secondary);
// }

// .reference-link.secondary:hover {
//   color: var(--secondary-400);
// }

// .reference-link.accent {
//   color: var(--accent);
// }

// .reference-link.accent:hover {
//   color: var(--accent-400);
// }