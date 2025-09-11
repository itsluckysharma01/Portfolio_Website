import React, { useEffect, useRef } from 'react';
import '../../css/skillHub.css';

const SkillHub = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Mobile menu toggle
    const mobileMenuButton = container.querySelector('#mobile-menu-button');
    const mobileMenu = container.querySelector('#mobile-menu');
    const onMobileToggle = () => mobileMenu && mobileMenu.classList.toggle('hidden');
    mobileMenuButton && mobileMenuButton.addEventListener('click', onMobileToggle);

    // Filter buttons
    const filterButtons = Array.from(container.querySelectorAll('.filter-btn'));
    const skillCategories = Array.from(container.querySelectorAll('.skill-category'));
    const searchInput = container.querySelector('#skills-search');
    const resetButton = container.querySelector('#reset-filters');

    const filterBtnClasses = 'px-4 py-2 rounded-lg font-medium transition-smooth flex items-center';
    const activeClasses = 'bg-primary text-background';
    const inactiveClasses = 'bg-surface text-text-secondary hover:bg-surface-light hover:text-primary border border-border';

    filterButtons.forEach(btn => {
      btn.className = `${filterBtnClasses} ${btn.classList.contains('active') ? activeClasses : inactiveClasses}`;
    });

    filterButtons.forEach(button => {
      const onClick = () => {
        const filter = button.dataset.filter;
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.className = `${filterBtnClasses} ${inactiveClasses}`;
        });
        button.classList.add('active');
        button.className = `${filterBtnClasses} ${activeClasses}`;

        skillCategories.forEach(category => {
          if (filter === 'all' || category.dataset.category === filter) {
            category.style.display = 'block';
            category.classList.add('animate-fade-in');
          } else {
            category.style.display = 'none';
          }
        });
      };
      button.addEventListener('click', onClick);
    });

    // Search functionality
    const onSearch = (e) => {
      const searchTerm = (e.target.value || '').toLowerCase();
      const skillCards = Array.from(container.querySelectorAll('.card'));
      skillCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
          card.style.display = 'block';
          card.classList.add('animate-fade-in');
        } else {
          card.style.display = 'none';
        }
      });
    };
    searchInput && searchInput.addEventListener('input', onSearch);

    // Reset filters
    const onReset = () => {
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.className = `${filterBtnClasses} ${inactiveClasses}`;
      });
      if (filterButtons[0]) {
        filterButtons[0].classList.add('active');
        filterButtons[0].className = `${filterBtnClasses} ${activeClasses}`;
      }
      skillCategories.forEach(category => (category.style.display = 'block'));
      if (searchInput) searchInput.value = '';
      container.querySelectorAll('.card').forEach(card => (card.style.display = 'block'));
    };
    resetButton && resetButton.addEventListener('click', onReset);

    // Interactive demos
    container.querySelectorAll('.demo-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const variant = btn.dataset.variant;
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => (btn.style.transform = 'scale(1)'), 150);

        const feedback = document.createElement('div');
        feedback.textContent = `${variant} button clicked!`;
        feedback.className = 'dh-feedback';
        btn.parentElement.style.position = 'relative';
        btn.parentElement.appendChild(feedback);
        setTimeout(() => feedback.remove(), 2000);
      });
    });

    // Vue counter demo (simple local counter)
    let vueCounter = 0;
    const vueCounterDisplay = container.querySelector('#vue-counter');
    const vueIncrement = container.querySelector('#vue-increment');
    const vueDecrement = container.querySelector('#vue-decrement');
    const updateVueDisplay = () => {
      if (vueCounterDisplay) {
        vueCounterDisplay.textContent = vueCounter;
        vueCounterDisplay.style.transform = 'scale(1.2)';
        setTimeout(() => (vueCounterDisplay.style.transform = 'scale(1)'), 200);
      }
    };
    vueIncrement && vueIncrement.addEventListener('click', () => { vueCounter++; updateVueDisplay(); });
    vueDecrement && vueDecrement.addEventListener('click', () => { vueCounter--; updateVueDisplay(); });

    // API tester (mock)
    const testApiButton = container.querySelector('#test-api');
    const apiResponse = container.querySelector('#api-response');
    const apiMethod = container.querySelector('#api-method');
    const apiEndpoint = container.querySelector('#api-endpoint');
    const onTestApi = () => {
      if (!apiResponse || !testApiButton) return;
      const method = apiMethod ? apiMethod.value : 'GET';
      const endpoint = apiEndpoint ? apiEndpoint.value : '/api';
      apiResponse.textContent = 'Loading...';
      testApiButton.disabled = true;
      testApiButton.textContent = 'Testing...';
      setTimeout(() => {
        const mockResponse = {
          status: 200,
          method,
          endpoint,
          data: { users: [{ id: 1, name: 'Alex' }, { id: 2, name: 'Sara' }] },
          timestamp: new Date().toISOString()
        };
        apiResponse.textContent = JSON.stringify(mockResponse, null, 2);
        testApiButton.disabled = false;
        testApiButton.textContent = 'Test';
      }, 1200);
    };
    testApiButton && testApiButton.addEventListener('click', onTestApi);

    // Copy code functionality
    container.querySelectorAll('.copy-code').forEach(button => {
      button.addEventListener('click', async () => {
        const codeBlock = button.closest('.bg-background')?.querySelector('code');
        if (!codeBlock || !navigator.clipboard) return;
        try {
          await navigator.clipboard.writeText(codeBlock.textContent);
          const original = button.innerHTML;
          button.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
          button.classList.add('text-success');
          setTimeout(() => { button.innerHTML = original; button.classList.remove('text-success'); }, 1600);
        } catch (err) {
          /* ignore */
        }
      });
    });

    // Intersection observer for animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('animate-fade-in'); });
    }, observerOptions);
    container.querySelectorAll('.card, section').forEach(el => observer.observe(el));

    // Smooth scroll for anchors
    container.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        e.preventDefault();
        const target = container.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // cleanup
    return () => {
      mobileMenuButton && mobileMenuButton.removeEventListener('click', onMobileToggle);
      filterButtons.forEach(button => button.replaceWith(button.cloneNode(true)));
      searchInput && searchInput.removeEventListener('input', onSearch);
      resetButton && resetButton.removeEventListener('click', onReset);
      vueIncrement && vueIncrement.removeEventListener('click', updateVueDisplay);
      vueDecrement && vueDecrement.removeEventListener('click', updateVueDisplay);
      testApiButton && testApiButton.removeEventListener('click', onTestApi);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="bg-background text-text-primary font-inter">
        {/* The JSX below is a simplified, React-friendly conversion of the original HTML skills lab */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center space-x-2">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  <span className="text-xl font-bold text-gradient-primary">DevPortfolio Pro</span>
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="/" className="text-text-secondary hover:text-primary px-3 py-2 rounded-md text-sm transition-smooth">Home</a>
                  <a href="/about" className="text-text-secondary hover:text-primary px-3 py-2 rounded-md text-sm transition-smooth">About</a>
                  <a href="/skills" className="text-primary font-medium px-3 py-2 rounded-md text-sm transition-smooth">Skills Lab</a>
                  <a href="/projects" className="text-text-secondary hover:text-primary px-3 py-2 rounded-md text-sm transition-smooth">Projects</a>
                  <a href="/blog" className="text-text-secondary hover:text-primary px-3 py-2 rounded-md text-sm transition-smooth">Blog</a>
                  <a href="/contact" className="text-text-secondary hover:text-primary px-3 py-2 rounded-md text-sm transition-smooth">Contact</a>
                </div>
              </div>
              <div className="md:hidden">
                <button id="mobile-menu-button" className="text-text-secondary hover:text-primary p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                </button>
              </div>
            </div>
          </div>
          <div id="mobile-menu" className="md:hidden hidden bg-surface border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="text-text-secondary hover:text-primary block px-3 py-2 rounded-md text-base transition-smooth">Home</a>
              <a href="/about" className="text-text-secondary hover:text-primary block px-3 py-2 rounded-md text-base transition-smooth">About</a>
              <a href="/skills" className="text-primary block px-3 py-2 rounded-md text-base font-medium">Skills Lab</a>
            </div>
          </div>
        </nav>

        <main className="pt-24">
          <section id="hero" className="pt-8 pb-12 bg-background text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"><span className="text-gradient-primary">Skills Laboratory</span><br/><span className="text-text-primary">Interactive Technical Showcase</span></h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">Experience my technical capabilities through live demonstrations, interactive code examples, and hands-on testing interfaces</p>
            </div>
          </section>

          <section id="skills-filter" className="py-8 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-wrap gap-3">
                  <button className="filter-btn active" data-filter="all">All Skills</button>
                  <button className="filter-btn" data-filter="frontend">Frontend</button>
                  <button className="filter-btn" data-filter="backend">Backend</button>
                  <button className="filter-btn" data-filter="devops">DevOps</button>
                  <button className="filter-btn" data-filter="tools">Tools</button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <input type="text" id="skills-search" placeholder="Search skills..." className="input-field pl-10 pr-4 py-2 w-64" />
                  </div>
                  <button id="reset-filters" className="px-4 py-2 border border-border rounded-lg hover:border-primary transition-smooth">Reset</button>
                </div>
              </div>
            </div>
          </section>

          <section id="frontend-skills" className="py-12 bg-background skill-category" data-category="frontend">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2"><span className="text-gradient-primary">Frontend Development</span></h2>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto">Interactive component libraries and live demonstrations of modern frontend frameworks</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* React.js card */}
                <div className="card group hover:shadow-glow-primary transition-all duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4"><svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236z"/></svg></div>
                      <h3 className="text-xl font-semibold">React.js</h3>
                    </div>
                    <div className="flex items-center space-x-2"><span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Expert</span><span className="text-text-secondary text-sm">98% Coverage</span></div>
                  </div>

                  <div className="bg-surface-light rounded-lg p-6 mb-4">
                    <h4 className="text-lg font-medium mb-3">Interactive Button Component</h4>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <button className="demo-btn btn-primary" data-variant="primary">Primary</button>
                      <button className="demo-btn btn-secondary" data-variant="secondary">Secondary</button>
                      <button className="demo-btn btn-accent" data-variant="accent">Accent</button>
                      <button className="demo-btn outline" data-variant="outline">Outline</button>
                    </div>
                  </div>

                  <div className="bg-background rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-secondary text-sm font-medium">React Component</span>
                      <button className="copy-code text-text-secondary hover:text-primary transition-smooth">Copy</button>
                    </div>
                    <pre className="font-code text-sm text-text-primary overflow-x-auto">
                      <code>{`const Button = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300';
  const variantClasses = {
    primary: 'bg-primary text-background hover:bg-primary-600',
    secondary: 'bg-secondary text-background hover:bg-secondary-600',
    accent: 'bg-accent text-white hover:bg-accent-600',
    outline: 'border border-border hover:border-primary'
  };
  return (
    <button className={\`${baseClasses} \${variantClasses[variant]}\`} {...props}>{children}</button>
  );
};`}</code>
                    </pre>
                  </div>
                </div>
                {/* Vue.js card */}
                <div className="card group hover:shadow-glow-secondary transition-all duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mr-4"><svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24"><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39Z"/></svg></div>
                      <h3 className="text-xl font-semibold">Vue.js</h3>
                    </div>
                    <div className="flex items-center space-x-2"><span className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">Advanced</span><span className="text-text-secondary text-sm">92% Coverage</span></div>
                  </div>

                  <div className="bg-surface-light rounded-lg p-6 mb-4">
                    <h4 className="text-lg font-medium mb-3">Reactive Counter Component</h4>
                    <div className="flex items-center space-x-4 mb-4">
                      <button id="vue-decrement" className="px-4 py-2 bg-accent text-white rounded-lg">-</button>
                      <div id="vue-counter" className="text-2xl font-bold text-primary">0</div>
                      <button id="vue-increment" className="px-4 py-2 bg-secondary text-background rounded-lg">+</button>
                    </div>
                  </div>

                  <div className="bg-background rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-secondary text-sm font-medium">Vue Component</span>
                      <button className="copy-code text-text-secondary hover:text-primary transition-smooth">Copy</button>
                    </div>
                    <pre className="font-code text-sm text-text-primary overflow-x-auto">
                      <code>{`<template>
  <div class="counter">
    <button @click="decrement">-</button>
    <span>{{ count }}</span>
    <button @click="increment">+</button>
  </div>
</template>`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="backend-skills" className="py-12 bg-surface skill-category" data-category="backend">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2"><span className="text-gradient-primary">Backend Development</span></h2>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto">API testing interfaces, database visualizations, and scalable architecture demonstrations</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* REST API card */}
                <div className="card group hover:shadow-glow-primary transition-all duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4"><svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342"/></svg></div>
                      <h3 className="text-xl font-semibold">REST API Development</h3>
                    </div>
                    <div className="flex items-center space-x-2"><span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Expert</span><span className="text-text-secondary text-sm">Node.js</span></div>
                  </div>

                  <div className="bg-surface-light rounded-lg p-6 mb-4">
                    <h4 className="text-lg font-medium mb-3">Live API Endpoint Tester</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <select id="api-method" className="input-field w-24"><option>GET</option><option>POST</option><option>PUT</option><option>DELETE</option></select>
                        <input type="text" id="api-endpoint" defaultValue="/api/users" className="input-field flex-1" />
                        <button id="test-api" className="btn-primary px-4 py-2">Test</button>
                      </div>
                      <div className="bg-background rounded p-3"><div className="text-sm text-text-secondary mb-2">Response:</div><pre id="api-response" className="font-code text-sm text-primary overflow-x-auto">Click "Test" to see API response</pre></div>
                    </div>
                  </div>
                </div>
                {/* Database Design card */}
                <div className="card group hover:shadow-glow-secondary transition-all duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mr-4"><svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7"/></svg></div>
                      <h3 className="text-xl font-semibold">Database Design</h3>
                    </div>
                    <div className="flex items-center space-x-2"><span className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">Advanced</span><span className="text-text-secondary text-sm">MongoDB</span></div>
                  </div>

                  <div className="bg-surface-light rounded-lg p-6 mb-4">
                    <h4 className="text-lg font-medium mb-3">Schema Visualization</h4>
                    <div className="space-y-4">
                      <div className="bg-background rounded p-4 border-l-4 border-primary"><div className="flex items-center justify-between mb-2"><h5 className="font-semibold text-primary">Users Collection</h5><span className="text-xs text-text-secondary">1,247 documents</span></div><div className="grid grid-cols-2 gap-2 text-sm"><div className="text-text-secondary">_id: ObjectId</div><div className="text-text-secondary">email: String</div></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-background border-t border-border py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-text-secondary">© 2025 DevPortfolio Pro. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SkillHub;
