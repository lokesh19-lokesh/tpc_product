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
      <section className="company-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>We are a global team of engineers, designers, and strategists obsessed with building the future of enterprise software.</p>
        </div>
      </section>

      <section className="company-section">
        <div className="container about-grid">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>At The Patterns Company, our mission is to demystify complex technology and turn it into actionable, scalable, and intuitive platforms for enterprises worldwide.</p>
            <p>Founded on the belief that digital transformation shouldn't be a painful, decade-long process, we bring agility, deep technical expertise, and a human-centered design approach to every engagement.</p>
            <Link to="/company/leadership" className="inline-block mt-4 text-primary font-bold">Meet our Leadership &rarr;</Link>
          </div>
          <div className="about-image">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team collaborating" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="company-section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide how we build, how we collaborate, and how we treat our clients.</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4>Radical Agility</h4>
              <p>We move fast, iterate quickly, and adapt to changing requirements without missing a beat.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4>Uncompromising Quality</h4>
              <p>We believe in doing things right the first time. Clean code, robust architecture, and flawless design.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4>Human-Centered</h4>
              <p>Software is built for people. We prioritize accessibility, empathy, and intuitive user experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
