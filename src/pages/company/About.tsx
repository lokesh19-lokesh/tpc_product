import { SEO } from '../../components/seo/SEO';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Company.css';

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.setProperty('--active-product-color', '#10b981');
  }, []);

  return (
    <main className="company-page">
      <SEO 
        title="About" 
        description="Learn more about The Patterns Company: our mission, leadership, and careers. Join us in building the future of AI." 
        keywords="About, The Patterns Company, AI, enterprise solutions, company"
        path="/company/about" 
      />
      {/* Premium Hero Section */}
      <section className="about-hero">
        <div className="container hero-container">
          <div className="about-hero-content">
            <span className="hero-overline">The Patterns Company</span>
            <h1 className="hero-title">Pioneering the future of <span className="text-gradient">enterprise AI</span></h1>
            <p className="hero-subtitle">
              We are a global team of engineers, designers, and strategists obsessed with demystifying complex technology and building intuitive platforms for the world's most ambitious organizations.
            </p>
          </div>
        </div>
        <div className="hero-background-pattern"></div>
      </section>

      {/* By The Numbers Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>5+</h3>
              <p>Years of Innovation</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Enterprise Clients</p>
            </div>
            <div className="stat-card">
              <h3>12</h3>
              <p>Global Offices</p>
            </div>
            <div className="stat-card">
              <h3>200+</h3>
              <p>World-class Engineers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="company-section story-section">
        <div className="container about-grid">
          <div className="about-image">
            <div className="image-wrapper">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Team collaborating in a modern office" className="story-img" />
              <div className="image-overlay"></div>
            </div>
          </div>
          <div className="about-text">
            <span className="section-overline">Our Story</span>
            <h2>Born from the need for agility</h2>
            <p>Founded on the belief that digital transformation shouldn't be a painful, decade-long process. We saw enterprises struggling with legacy systems and fragmented data, and we knew there was a better way.</p>
            <p>Today, The Patterns Company brings deep technical expertise and a human-centered design approach to every engagement. We don't just build software; we architect the operational surface of tomorrow's enterprise.</p>
            
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>To demystify complex technology and turn it into actionable, scalable, and intuitive platforms for enterprises worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="company-section-alt values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">Our DNA</span>
            <h2>Core Values</h2>
            <p>The principles that guide how we build, how we collaborate, and how we treat our clients.</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card modern-card">
              <div className="value-icon gradient-icon-1">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4>Radical Agility</h4>
              <p>We move fast, iterate quickly, and adapt to changing requirements without missing a single beat.</p>
            </div>
            
            <div className="value-card modern-card">
              <div className="value-icon gradient-icon-2">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4>Uncompromising Quality</h4>
              <p>We believe in doing things right the first time. Clean code, robust architecture, and flawless design.</p>
            </div>

            <div className="value-card modern-card">
              <div className="value-icon gradient-icon-3">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4>Human-Centered</h4>
              <p>Software is built for people. We prioritize accessibility, empathy, and highly intuitive user experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to build the future?</h2>
            <p>We are always looking for visionary engineers, designers, and thinkers to join our global team.</p>
            <div className="cta-actions">
              <Link to="/company/careers" className="btn-primary">View Open Roles</Link>
              <Link to="/company/leadership" className="btn-secondary">Meet Our Leadership</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
