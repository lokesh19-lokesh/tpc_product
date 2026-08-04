import { SEO } from '../../components/seo/SEO';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Industry.css';

export function Healthcare() {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-product-color', 'var(--primary)');
  }, []);

  return (
    <div className="industry-page">
      <SEO 
        title="Healthcare" 
        description="The Patterns Company provides powerful AI solutions tailored for the Healthcare industry to optimize processes and increase efficiency." 
        keywords="Healthcare AI solutions, enterprise AI for Healthcare, The Patterns Company Healthcare, data intelligence"
        path="/industries/healthcare" 
      />
      {/* HERO SECTION */}
      <section className="industry-hero">
        <div className="container">
          <div className="badge">Industry Solutions</div>
          <h1>Transforming Healthcare with AI</h1>
          <p>
            Enhance patient outcomes, streamline hospital operations, and ensure compliance with our unified intelligence platform designed for modern healthcare systems.
          </p>
          <Link to="/book-demo" className="btn-primary">Explore the Platform</Link>
        </div>
      </section>

      {/* DETAILED EXPLANATION SECTION */}
      <section className="industry-overview">
        <div className="container">
          <div className="overview-header">
            <h2>The Hospital of the Future is Data-Driven</h2>
            <p>
              In modern healthcare, delays and fragmented data don't just cost money—they impact lives. Legacy EHR systems that isolate patient data are no longer sufficient. 
              The Patterns Company provides a unified nervous system for your entire medical facility—from the emergency room to inventory management.
            </p>
          </div>
          <div className="overview-content">
            <div className="overview-block">
              <h3>Breaking Down Data Silos</h3>
              <p>
                Our platform integrates seamlessly with your existing EHR, lab systems, and medical devices. By aggregating patient data in real-time, we provide doctors and nurses with a single source of truth, reducing administrative burden and allowing them to focus entirely on patient care.
              </p>
            </div>
            <div className="overview-block">
              <h3>From Reactive to Predictive</h3>
              <p>
                Hospital bottlenecks can be predicted. Our advanced machine learning models continuously analyze admission rates, staffing levels, and seasonal trends to forecast ICU capacity and prevent overcrowding weeks in advance, ensuring you always have the right resources at the right time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES SECTION */}
      <section className="industry-capabilities">
        <div className="container">
          <h2 className="section-title">Key Capabilities for Healthcare</h2>
          <div className="capabilities-grid">
            
            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
              </div>
              <h4>Patient Flow Optimization</h4>
              <p>Reduce ER wait times and optimize bed allocation with real-time tracking and predictive admission modeling.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
              </div>
              <h4>Compliance & Security</h4>
              <p>Maintain strict HIPAA compliance with automated access controls and encrypted data pipelines.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4>Medical Inventory Forecasting</h4>
              <p>Never run out of critical supplies. Our AI predicts usage rates for PPE and medications based on patient intake volume.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
              </div>
              <h4>Staff Allocation</h4>
              <p>Dynamically adjust nursing and physician schedules to match predicted patient demand, preventing burnout.</p>
            </div>

          </div>
        </div>
      </section>

      {/* BENTO SECTION */}
      <section className="bento-section">
        <div className="container">
          
          <div className="bento-header">
            <div className="bento-header-left">
              <div className="eyebrow">Industries</div>
              <h2>Built for the institutions that heal the world.</h2>
            </div>
            <div className="bento-header-right">
              Empowering clinicians and hospital administrators to focus on what matters most: patient care.
            </div>
          </div>

          <div className="bento-grid">
            {/* Top Left: Tall Image */}
            <div className="bento-item bento-img-1" style={{ backgroundImage: "url('/images/bento/healthcare_floor.png')" }}></div>

            {/* Top Mid: Dark Box */}
            <div className="bento-item bento-dark">
              <div className="eyebrow">Statement</div>
              <h3>Powering modern medical facilities</h3>
              <p>
                Patient flow, inventory control, and predictive intelligence built for hospitals and multi-site clinics.
              </p>
              <div className="arrow">→</div>
            </div>

            {/* Top Right: Blue Box */}
            <div className="bento-item bento-blue">
              <div className="eyebrow">Facts</div>
              <h3>Did you know</h3>
              <p>
                The Patterns Company handles everything from ER triage tracking to pharmacy logistics for major healthcare networks.
              </p>
              <div className="bottom-text">Trusted by Top Hospitals</div>
            </div>

            {/* Bottom Left: Dashboard Image with Text */}
            <div className="bento-item bento-img-2" style={{ backgroundImage: "url('/images/bento/healthcare_dash.png')" }}>
              <div className="bento-img-2-content">
                <p>Whether it's managing bed capacity or preventing supply shortages, we turn data into medical breakthroughs.</p>
                <div className="date">a day ago</div>
              </div>
            </div>

            {/* Bottom Right: Wide Gradient Box */}
            <div className="bento-item bento-wide">
              <div className="badge-new">NEW</div>
              <div className="bento-wide-overlay"></div>
              <div className="bento-wide-bg" style={{ backgroundImage: "url('/images/bento/healthcare_wide.png')" }}></div>
              <div className="bento-wide-content">
                <h3>Excellence at work. Celebrating our team's dedication to building a healthier future.</h3>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Build the Hospital of the Future?</h2>
          <p>Talk to our healthcare specialists to see how The Patterns Company can improve your patient outcomes.</p>
          <Link to="/book-demo" className="btn-primary">Talk to an Expert</Link>
        </div>
      </section>
    </div>
  );
}
