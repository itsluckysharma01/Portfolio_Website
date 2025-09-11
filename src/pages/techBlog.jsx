import React, { useState, useMemo } from 'react';
import './css/techBlog.css';

const initialArticles = [
	{
		id: 1,
		category: 'tutorials',
		tag: 'Tutorial',
		level: 'Intermediate',
		readingTime: 12,
		date: 'July 15, 2025',
		title: 'Optimizing Node.js Performance: From Development to Production',
		excerpt: 'Comprehensive guide to Node.js optimization techniques, monitoring strategies, and deployment best practices for high-performance applications.',
		img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
	},
	{
		id: 2,
		category: 'tools',
		tag: 'Tools',
		level: 'Beginner',
		readingTime: 8,
		date: 'July 12, 2025',
		title: 'Docker for Developers: Streamlining Your Development Workflow',
		excerpt: 'Learn how to leverage Docker containers to create consistent development environments and simplify deployment processes across different platforms.',
		img: 'https://images.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png',
	},
	{
		id: 3,
		category: 'industry',
		tag: 'Industry',
		level: 'Expert',
		readingTime: 10,
		date: 'July 8, 2025',
		title: 'The Future of Web Development: Trends Shaping 2025',
		excerpt: 'Analysis of emerging technologies, frameworks, and methodologies that will define the next generation of web applications and developer experiences.',
		img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
	},
	{
		id: 4,
		category: 'architecture',
		tag: 'Architecture',
		level: 'Advanced',
		readingTime: 18,
		date: 'July 5, 2025',
		title: 'Microservices vs Monoliths: Choosing the Right Architecture',
		excerpt: 'Deep dive into architectural patterns, comparing microservices and monolithic approaches with real-world case studies and decision frameworks.',
		img: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
	},
	{
		id: 5,
		category: 'tutorials',
		tag: 'Tutorial',
		level: 'Intermediate',
		readingTime: 14,
		date: 'July 1, 2025',
		title: 'Building Robust GraphQL APIs with TypeScript and Apollo',
		excerpt: 'Step-by-step guide to creating type-safe GraphQL APIs with advanced features like subscriptions, caching, and error handling.',
		img: 'https://images.pixabay.com/photo/2015/05/31/15/14/woman-792162_1280.jpg',
	},
	{
		id: 6,
		category: 'tools',
		tag: 'Tools',
		level: 'Beginner',
		readingTime: 6,
		date: 'June 28, 2025',
		title: 'Essential VS Code Extensions for Modern Web Development',
		excerpt: 'Curated list of must-have VS Code extensions that boost productivity, improve code quality, and enhance the development experience.',
		img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
	},
];

export default function TechBlog() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [category, setCategory] = useState('all');
	const [sortBy, setSortBy] = useState('newest');
	const [articles, setArticles] = useState(initialArticles);

	const subscribeNewsletter = (email) => {
		if (email && email.includes('@')) {
			alert("Thank you for subscribing! You'll receive our weekly newsletter with the latest technical insights.");
			return true;
		}
		alert('Please enter a valid email address.');
		return false;
	};

	const copyCode = async (text, btnRef) => {
		try {
			await navigator.clipboard.writeText(text);
			if (btnRef && btnRef.current) {
				const original = btnRef.current.innerHTML;
				btnRef.current.innerHTML = 'Copied!';
				setTimeout(() => (btnRef.current.innerHTML = original), 1500);
			}
		} catch (e) {
			alert('Failed to copy code. Please try again.');
		}
	};

	const loadMoreArticles = () => {
		alert('Loading more articles... This would typically fetch additional content from the server.');
	};

	const filtered = useMemo(() => {
		const term = searchTerm.trim().toLowerCase();
		let list = articles.filter((a) => category === 'all' || a.category === category);
		if (term) {
			list = list.filter((a) => a.title.toLowerCase().includes(term) || a.excerpt.toLowerCase().includes(term));
		}

		if (sortBy === 'newest') {
			list.sort((a, b) => new Date(b.date) - new Date(a.date));
		} else if (sortBy === 'reading-time' || sortBy === 'popular') {
			list.sort((a, b) => a.readingTime - b.readingTime);
		}

		return list;
	}, [articles, searchTerm, category, sortBy]);

	return (
		<div className="tech-blog-page">
			{/* Navigation */}
			<nav className="nav fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
				<div className="nav-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="logo flex-shrink-0">
							<a href="/" className="flex items-center space-x-2">
								<svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
								</svg>
								<span className="text-xl font-bold text-gradient-primary">DevPortfolio Pro</span>
							</a>
						</div>

						<div className="desktop-nav hidden md:block">
							<div className="ml-10 flex items-baseline space-x-8">
								<a href="/" className="text-text-secondary hover:text-primary px-3 py-2 rounded-md text-sm">
									Home
								</a>
								<a href="/about" className="text-text-secondary hover:text-primary px-3 py-2 rounded-md text-sm">
									About
								</a>
								<a href="/skills" className="text-text-secondary hover:text-primary px-3 py-2 rounded-md text-sm">
									Skills Lab
								</a>
								<a href="/projects" className="text-text-secondary hover:text-primary px-3 py-2 rounded-md text-sm">
									Projects
								</a>
								<a href="/tech-blog" className="text-primary font-medium px-3 py-2 rounded-md text-sm">
									Blog
								</a>
								<a href="/contact" className="text-text-secondary hover:text-primary px-3 py-2 rounded-md text-sm">
									Contact
								</a>
							</div>
						</div>

						<div className="md:hidden">
							<button
								id="mobile-menu-button"
								className="text-text-secondary hover:text-primary p-2"
								onClick={() => setMobileOpen(!mobileOpen)}
							>
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						</div>
					</div>
				</div>

				<div
					id="mobile-menu"
					className={`md:hidden ${mobileOpen ? '' : 'hidden'} bg-surface border-t border-border`}
				>
					<div className="px-2 pt-2 pb-3 space-y-1">
						<a
							href="/"
							className="text-text-secondary hover:text-primary block px-3 py-2 rounded-md text-base"
						>
							Home
						</a>
						<a
							href="/about"
							className="text-text-secondary hover:text-primary block px-3 py-2 rounded-md text-base"
						>
							About
						</a>
						<a
							href="/skills"
							className="text-text-secondary hover:text-primary block px-3 py-2 rounded-md text-base"
						>
							Skills Lab
						</a>
						<a
							href="/projects"
							className="text-text-secondary hover:text-primary block px-3 py-2 rounded-md text-base"
						>
							Projects
						</a>
						<a
							href="/tech-blog"
							className="text-primary block px-3 py-2 rounded-md text-base font-medium"
						>
							Blog
						</a>
						<a
							href="/contact"
							className="text-text-secondary hover:text-primary block px-3 py-2 rounded-md text-base"
						>
							Contact
						</a>
					</div>
				</div>
			</nav>

			{/* Hero */}
			<section id="hero" className="pt-24 pb-16 bg-surface">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
							Technical <span className="text-gradient-primary">Insights</span>
							<br />& Thought Leadership
						</h1>
						<p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
							In-depth technical content exploring emerging technologies, best practices, and real-world solutions from the trenches of modern development
						</p>

						<div className="max-w-md mx-auto">
							<div className="flex flex-col sm:flex-row gap-3">
								<input
									type="email"
									placeholder="Enter your email for updates"
									className="input-field flex-1 text-center sm:text-left"
									id="newsletter-email"
								/>
								<button
									className="btn-primary whitespace-nowrap"
									onClick={() => {
										const email = document.getElementById('newsletter-email').value;
										subscribeNewsletter(email);
									}}
								>
									Subscribe
								</button>
							</div>
							<p className="text-text-muted text-sm mt-2">Weekly insights on web development trends and tutorials</p>
						</div>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
						<div className="text-center">
							<div className="text-2xl md:text-3xl font-bold text-primary mb-1">47</div>
							<div className="text-sm text-text-secondary">Articles Published</div>
						</div>
						<div className="text-center">
							<div className="text-2xl md:text-3xl font-bold text-secondary mb-1">12K+</div>
							<div className="text-sm text-text-secondary">Monthly Readers</div>
						</div>
						<div className="text-center">
							<div className="text-2xl md:text-3xl font-bold text-accent mb-1">850+</div>
							<div className="text-sm text-text-secondary">Code Examples</div>
						</div>
						<div className="text-center">
							<div className="text-2xl md:text-3xl font-bold text-primary mb-1">4.8★</div>
							<div className="text-sm text-text-secondary">Reader Rating</div>
						</div>
					</div>
				</div>
			</section>

			{/* Search / Filter */}
			<section id="search-filter" className="py-12 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
						<div className="relative flex-1 max-w-md">
							<input
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								type="text"
								placeholder="Search articles, tutorials, and insights..."
								className="input-field w-full pl-12 pr-4"
								id="search-input"
							/>
							<svg
								className="w-5 h-5 text-text-secondary absolute left-4 top-1/2 transform -translate-y-1/2"
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

						<div className="flex flex-wrap gap-3">
							<button
								className={`filter-btn ${category === 'all' ? 'active' : ''}`}
								onClick={() => setCategory('all')}
							>
								All Posts
							</button>
							<button
								className={`filter-btn ${category === 'tutorials' ? 'active' : ''}`}
								onClick={() => setCategory('tutorials')}
							>
								Tutorials
							</button>
							<button
								className={`filter-btn ${category === 'architecture' ? 'active' : ''}`}
								onClick={() => setCategory('architecture')}
							>
								Architecture
							</button>
							<button
								className={`filter-btn ${category === 'tools' ? 'active' : ''}`}
								onClick={() => setCategory('tools')}
							>
								Tools & Reviews
							</button>
							<button
								className={`filter-btn ${category === 'industry' ? 'active' : ''}`}
								onClick={() => setCategory('industry')}
							>
								Industry Analysis
							</button>
						</div>

						<button
							className="btn-secondary text-sm px-4 py-2"
							onClick={() => {
								setSearchTerm('');
								setSortBy('newest');
								setCategory('all');
							}}
						>
							Reset
						</button>
					</div>
				</div>
			</section>

			{/* Featured Article */}
			<section id="featured-article" className="py-16 bg-surface">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							<span className="text-gradient-primary">Featured Article</span>
						</h2>
						<p className="text-xl text-text-secondary">
							Latest deep-dive into cutting-edge development practices
						</p>
					</div>

					<div className="card max-w-4xl mx-auto overflow-hidden hover:shadow-hero transition-all duration-500">
						<div className="grid lg:grid-cols-2 gap-8 items-center">
							<div className="aspect-video bg-surface-light rounded-lg overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Modern React Architecture Patterns"
									className="w-full h-full object-cover"
									loading="lazy"
								/>
							</div>
							<div>
								<div className="flex items-center gap-3 mb-4">
									<span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
										Architecture
									</span>
									<span className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">
										Advanced
									</span>
									<span className="text-text-muted text-sm">15 min read</span>
								</div>
								<h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary transition-smooth">
									<a href="#">
										Building Scalable React Applications with Modern Architecture Patterns
									</a>
								</h3>
								<p className="text-text-secondary mb-6 leading-relaxed">
									Explore advanced patterns for maintainable React codebases including
									compound components, render props, custom hooks, and state management
									strategies.
								</p>
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-3">
										<img
											src="https://images.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
											alt="Alex Rodriguez"
											className="w-10 h-10 rounded-full object-cover"
										/>
										<div>
											<div className="font-medium">Alex Rodriguez</div>
											<div className="text-text-muted text-sm">July 18, 2025</div>
										</div>
									</div>
									<a href="#" className="btn-primary">
										Read Article
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Recent Articles Grid */}
			<section id="recent-articles" className="py-20 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between mb-12">
						<h2 className="text-3xl md:text-4xl font-bold">
							Recent <span className="text-gradient-primary">Articles</span>
						</h2>
						<div className="flex items-center space-x-4">
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className="input-field text-sm"
								id="sort-select"
							>
								<option value="newest">Newest First</option>
								<option value="popular">Most Popular</option>
								<option value="reading-time">Reading Time</option>
							</select>
						</div>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="articles-grid">
						{filtered.map((article) => (
							<article
								key={article.id}
								className="card group hover:shadow-glow-primary transition-all duration-500"
								data-category={article.category}
							>
								<div className="aspect-video bg-surface-light rounded-lg mb-6 overflow-hidden">
									<img
										src={article.img}
										alt={article.title}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
										loading="lazy"
									/>
								</div>
								<div className="flex items-center gap-2 mb-3">
									<span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full">
										{article.tag}
									</span>
									<span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">
										{article.level}
									</span>
									<span className="text-text-muted text-xs">
										{article.readingTime} min read
									</span>
								</div>
								<h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
									<a href="#">{article.title}</a>
								</h3>
								<p className="text-text-secondary mb-4 text-sm leading-relaxed">
									{article.excerpt}
								</p>
								<div className="flex items-center justify-between text-sm">
									<span className="text-text-muted">{article.date}</span>
									<div className="flex items-center space-x-3">
										<button
											className="text-text-secondary hover:text-primary transition-smooth"
											title="Share"
										>
											Share
										</button>
										<button
											className="text-text-secondary hover:text-secondary transition-smooth"
											title="Bookmark"
										>
											Bookmark
										</button>
									</div>
								</div>
							</article>
						))}
					</div>

					<div className="text-center mt-12">
						<button className="btn-primary" onClick={loadMoreArticles}>
							Load More Articles
						</button>
					</div>
				</div>
			</section>

			{/* Code Showcase */}
			<section id="code-showcase" className="py-20 bg-surface">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Interactive <span className="text-gradient-primary">Code Examples</span>
						</h2>
						<p className="text-xl text-text-secondary max-w-3xl mx-auto">
							Learn through hands-on examples with syntax highlighting and copy-to-clipboard functionality
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-8">
						<div className="card">
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-xl font-semibold">Custom React Hook</h3>
								<button
									className="btn-secondary text-sm px-3 py-1"
									onClick={() => copyCode(reactHookCode)}
								>
									Copy
								</button>
							</div>
							<div className="bg-background rounded-lg p-4 overflow-x-auto">
								<pre className="font-code text-sm" id="react-hook">
									<code>{reactHookCode}</code>
								</pre>
							</div>
						</div>

						<div className="card">
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-xl font-semibold">Express.js API Route</h3>
								<button
									className="btn-secondary text-sm px-3 py-1"
									onClick={() => copyCode(expressApiCode)}
								>
									Copy
								</button>
							</div>
							<div className="bg-background rounded-lg p-4 overflow-x-auto">
								<pre className="font-code text-sm" id="express-api">
									<code>{expressApiCode}</code>
								</pre>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Popular & Trending + Footer (simplified) */}
			<section id="popular-trending" className="py-20 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12">
						<div>
							<h2 className="text-2xl md:text-3xl font-bold mb-8">
								<span className="text-gradient-primary">Popular Posts</span>
							</h2>
							<div className="space-y-6">
								<article className="flex items-start space-x-4 p-4 rounded-lg hover:bg-surface transition-smooth">
									<div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
										<span className="text-primary font-bold text-xl">1</span>
									</div>
									<div className="flex-1">
										<h3 className="font-semibold mb-2 hover:text-primary transition-smooth">
											<a href="#">
												Complete Guide to React Performance Optimization
											</a>
										</h3>
										<p className="text-text-secondary text-sm mb-2">
											Advanced techniques for building lightning-fast React
											applications
										</p>
										<div className="flex items-center text-xs text-text-muted space-x-3">
											<span>2.4K views</span>
											<span>•</span>
											<span>June 20, 2025</span>
										</div>
									</div>
								</article>

								<article className="flex items-start space-x-4 p-4 rounded-lg hover:bg-surface transition-smooth">
									<div className="flex-shrink-0 w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center">
										<span className="text-secondary font-bold text-xl">2</span>
									</div>
									<div className="flex-1">
										<h3 className="font-semibold mb-2 hover:text-secondary transition-smooth">
											<a href="#">
												Building Scalable APIs with Node.js and TypeScript
											</a>
										</h3>
										<p className="text-text-secondary text-sm mb-2">
											Enterprise-grade backend development patterns and practices
										</p>
										<div className="flex items-center text-xs text-text-muted space-x-3">
											<span>1.8K views</span>
											<span>•</span>
											<span>June 15, 2025</span>
										</div>
									</div>
								</article>

								<article className="flex items-start space-x-4 p-4 rounded-lg hover:bg-surface transition-smooth">
									<div className="flex-shrink-0 w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center">
										<span className="text-accent font-bold text-xl">3</span>
									</div>
									<div className="flex-1">
										<h3 className="font-semibold mb-2 hover:text-accent transition-smooth">
											<a href="#">
												Modern CSS Grid Layouts: Beyond the Basics
											</a>
										</h3>
										<p className="text-text-secondary text-sm mb-2">
											Advanced grid techniques for complex responsive designs
										</p>
										<div className="flex items-center text-xs text-text-muted space-x-3">
											<span>1.5K views</span>
											<span>•</span>
											<span>June 10, 2025</span>
										</div>
									</div>
								</article>
							</div>
						</div>

						<div>
							<h2 className="text-2xl md:text-3xl font-bold mb-8">
								<span className="text-gradient-primary">Trending Topics</span>
							</h2>
							<div className="space-y-4">
								<div className="flex items-center justify-between p-4 bg-surface rounded-lg">
									<div className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-primary rounded-full"></div>
										<span className="font-medium">React 19 Features</span>
									</div>
									<span className="text-text-muted text-sm">12 articles</span>
								</div>
								<div className="flex items-center justify-between p-4 bg-surface rounded-lg">
									<div className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-secondary rounded-full"></div>
										<span className="font-medium">AI in Development</span>
									</div>
									<span className="text-text-muted text-sm">8 articles</span>
								</div>
								<div className="flex items-center justify-between p-4 bg-surface rounded-lg">
									<div className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-accent rounded-full"></div>
										<span className="font-medium">Web Performance</span>
									</div>
									<span className="text-text-muted text-sm">15 articles</span>
								</div>
								<div className="flex items-center justify-between p-4 bg-surface rounded-lg">
									<div className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-primary rounded-full"></div>
										<span className="font-medium">TypeScript Tips</span>
									</div>
									<span className="text-text-muted text-sm">9 articles</span>
								</div>
								<div className="flex items-center justify-between p-4 bg-surface rounded-lg">
									<div className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-secondary rounded-full"></div>
										<span className="font-medium">Cloud Architecture</span>
									</div>
									<span className="text-text-muted text-sm">6 articles</span>
								</div>
							</div>

							<div className="mt-8 p-6 bg-surface rounded-lg border border-primary/20">
								<h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
								<p className="text-text-secondary mb-4">
									Get the latest articles and tutorials delivered to your inbox weekly.
								</p>
								<div className="flex gap-3">
									<input
										type="email"
										placeholder="Your email address"
										className="input-field flex-1"
									/>
									<button className="btn-primary">Subscribe</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer className="bg-surface border-t border-border py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="border-t border-border mt-8 pt-8 text-center">
						<p className="text-text-secondary">© 2025 DevPortfolio Pro. All Rights Reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

// Code examples text (kept outside component to avoid re-creation)
const reactHookCode = `// Custom hook for API data fetching\nimport { useState, useEffect } from 'react';\n\nconst useApiData = (url) => {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      try {\n        const response = await fetch(url);\n        const result = await response.json();\n        setData(result);\n      } catch (err) {\n        setError(err);\n      } finally {\n        setLoading(false);\n      }\n    };\n\n    fetchData();\n  }, [url]);\n\n  return { data, loading, error };\n};\n\nexport default useApiData;`;

const expressApiCode = `// RESTful API endpoint with validation\nconst express = require('express');\nconst router = express.Router();\n\nrouter.post('/api/users', async (req, res) => {\n  try {\n    const { name, email } = req.body;\n    if (!name || !email) {\n      return res.status(400).json({ error: 'Name and email are required' });\n    }\n    const user = await User.create({ name, email });\n    res.status(201).json({ message: 'User created successfully', user });\n  } catch (error) {\n    res.status(500).json({ error: error.message });\n  }\n});`;
