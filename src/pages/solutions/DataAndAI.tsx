import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

export function DataAndAI() {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-product-color', 'var(--primary)');
  }, []);

  return (
    <div className="solution-page">
      {/* HERO SECTION */}
      <section className="solution-hero">
        <div className="container">
          <div className="badge">By Service</div>
          <h1>Data and AI</h1>
          <p>Turn raw data into actionable intelligence</p>
          <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Leverage the power of advanced analytics, machine learning, and artificial intelligence to unlock new revenue streams and optimize operational efficiency.
          </p>
          <Link to="/book-demo" className="btn-solid-white" style={{ background: 'var(--primary)', color: 'white' }}>Book a Consultation</Link>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="solution-overview">
        <div className="container">
          <h2>Elevate Your Technology Stack</h2>
          <p>Modern enterprises require robust, scalable, and secure technological foundations. Our Data and AI offering is designed to meet these exact needs.</p>
          <p>We partner with you to deliver cutting-edge solutions that drive innovation, reduce operational overhead, and ensure your business is ready for the future.</p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="solution-features">
        <div className="container">
          <h2>Key Capabilities</h2>
          <div className="features-grid">
            
            <div className="solution-card">
              <div className="solution-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
              </div>
              <h3>Predictive Analytics</h3>
              <p>State-of-the-art implementations utilizing the best industry practices and standards.</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <h3>Machine Learning Models</h3>
              <p>Seamlessly integrated workflows that enhance productivity and reduce manual overhead.</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>
              </div>
              <h3>Data Warehousing</h3>
              <p>Future-proof architecture designed to scale seamlessly alongside your business growth.</p>
            </div>

          </div>
        </div>
      </section>
      
      {/* CTA SECTION */}
      <section className="solution-cta">
        <div className="container">
          <h2>Ready to Transform with Data and AI?</h2>
          <p>Get in touch with our experts to discuss how we can tailor our solutions to your specific needs.</p>
          <Link to="/company/contact" className="btn-solid-white text-primary mt-6">Contact Us Today</Link>
        </div>
      </section>
    </div>
  );
}
