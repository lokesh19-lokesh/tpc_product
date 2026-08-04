import { SEO } from '../../components/seo/SEO';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

export function PredictiveMaintenance() {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-product-color', 'var(--primary)');
  }, []);

  return (
    <div className="solution-page">
      <SEO 
        title="Predictive Maintenance" 
        description="Explore our Predictive Maintenance solutions to accelerate digital transformation, ensure compliance, and build robust enterprise architectures." 
        keywords="Predictive Maintenance solutions, digital transformation, AI for Predictive Maintenance, enterprise architecture"
        path="/solutions/predictive-maintenance" 
      />
      {/* HERO SECTION */}
      <section className="solution-hero">
        <div className="container">
          <div className="badge">By Need</div>
          <h1>Predictive Maintenance</h1>
          <p>Stop failures early</p>
          <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Transform your maintenance strategy from reactive to proactive. Leverage IoT data and machine learning to predict equipment failures before they happen and minimize downtime.
          </p>
          <Link to="/book-demo" className="btn-solid-white" style={{ background: 'var(--primary)', color: 'white' }}>Book a Demo</Link>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="solution-overview">
        <div className="container">
          <h2>Zero Unplanned Downtime</h2>
          <p>For asset-heavy industries, unexpected equipment failure doesn’t just cause headaches—it causes millions of dollars in lost productivity and compromised safety.</p>
          <p>By deploying continuous monitoring via IoT sensors and applying advanced anomaly detection, our platform alerts your maintenance teams to microscopic deviations in vibration, temperature, and performance weeks before a breakdown occurs.</p>
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
              <h3>IoT Integrations</h3>
              <p>Connect seamlessly with thousands of industrial sensors and edge devices out of the box.</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <h3>Machine Learning Alerts</h3>
              <p>Detect subtle patterns indicative of impending failures using deep neural networks.</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <h3>Downtime Prevention</h3>
              <p>Automatically schedule maintenance windows and order parts before critical breakdowns occur.</p>
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
                <h4>Fleet Management</h4>
                <p>Monitor engine telemetry across hundreds of vehicles to schedule services only when actually needed, reducing maintenance costs by 25%.</p>
              </div>
            </div>

            <div className="use-case-item">
              <div className="use-case-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="use-case-content">
                <h4>Manufacturing Lines</h4>
                <p>Keep assembly lines moving by detecting bearing wear in heavy machinery, allowing for targeted repairs during scheduled off-hours.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="solution-cta">
        <div className="container">
          <h2>Prevent failures before they happen.</h2>
          <p>Join thousands of industry leaders who are transforming their business with The Patterns Company.</p>
          <Link to="/book-demo" className="btn-solid-white">Get Started Today</Link>
        </div>
      </section>
    </div>
  );
}
