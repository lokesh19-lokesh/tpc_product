import { SEO } from '../../components/seo/SEO';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

export function Operations() {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-product-color', 'var(--primary)');
  }, []);

  return (
    <div className="solution-page">
      <SEO 
        title="Operations" 
        description="Explore our Operations solutions to accelerate digital transformation, ensure compliance, and build robust enterprise architectures." 
        keywords="Operations solutions, digital transformation, AI for Operations, enterprise architecture"
        path="/solutions/operations" 
      />
      {/* HERO SECTION */}
      <section className="solution-hero">
        <div className="container">
          <div className="badge">By Team</div>
          <h1>Operations</h1>
          <p>Plan, monitor and automate</p>
          <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Streamline your daily workflows, allocate resources effectively, and gain real-time visibility into your entire operation. Automate the mundane so your team can focus on what matters.
          </p>
          <Link to="/book-demo" className="btn-solid-white" style={{ background: 'var(--primary)', color: 'white' }}>Book a Demo</Link>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="solution-overview">
        <div className="container">
          <h2>Transform Your Day-to-Day Operations</h2>
          <p>Modern operations teams face complex challenges: isolated data silos, manual repetitive tasks, and lack of real-time visibility. The Patterns Company Operations Solution connects the dots across your entire enterprise.</p>
          <p>By integrating advanced workflow automation with real-time analytics, we help you eliminate bottlenecks, reduce operational costs, and build a resilient, scalable foundation for future growth.</p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="solution-features">
        <div className="container">
          <h2>Core Capabilities</h2>
          <div className="features-grid">
            
            <div className="solution-card">
              <div className="solution-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <h3>Real-time Tracking</h3>
              <p>Monitor processes across the organization with millisecond precision and live dashboards.</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <h3>Process Automation</h3>
              <p>Replace manual data entry and repetitive tasks with intelligent, event-driven workflows.</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <h3>Resource Allocation</h3>
              <p>Optimize your workforce and assets using AI-powered capacity planning and scheduling.</p>
            </div>

          </div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section className="solution-use-cases">
        <div className="container">
          <h2>Proven Use Cases</h2>
          <div className="use-case-list">
            
            <div className="use-case-item">
              <div className="use-case-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="use-case-content">
                <h4>Supply Chain Optimization</h4>
                <p>Automatically route inventory and schedule logistics based on real-time traffic, weather, and supplier data to ensure zero downtime in production.</p>
              </div>
            </div>

            <div className="use-case-item">
              <div className="use-case-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="use-case-content">
                <h4>Workforce Management</h4>
                <p>Dynamically assign tasks to field agents based on location, skill set, and current workload, improving resolution times by up to 40%.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="solution-cta">
        <div className="container">
          <h2>Ready to streamline your operations?</h2>
          <p>Join thousands of industry leaders who are transforming their business with The Patterns Company.</p>
          <Link to="/book-demo" className="btn-solid-white">Get Started Today</Link>
        </div>
      </section>
    </div>
  );
}
