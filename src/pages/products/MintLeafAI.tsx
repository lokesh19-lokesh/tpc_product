import { useEffect } from 'react';
import './MintLeafAI.css';

export function MintLeafAI() {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-product-color', 'var(--accent-purple)');
  }, []);

  return (
    <div className="mint-leaf-page">
      {/* Hero Section */}
      <section className="mint-leaf-hero">
        <div className="floating-icons">
          {/* Icon 1: Heartbeat */}
          <svg className="float-icon icon-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {/* Icon 2: Clipboard / Records */}
          <svg className="float-icon icon-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          {/* Icon 3: Calendar */}
          <svg className="float-icon icon-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {/* Icon 4: Users */}
          <svg className="float-icon icon-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          {/* Icon 5: Stethoscope / Sparkles */}
          <svg className="float-icon icon-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
          {/* Icon 6: Chat / WhatsApp */}
          <svg className="float-icon icon-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>

        <div className="container">
          <div className="product-badge">
            <span className="dot"></span>
            Healthcare Intelligence
          </div>
          
          <h1>
            The Operating System for your <span>Clinic</span>
          </h1>
          
          <p>
            The complete CRM and intelligence layer for doctors, clinics, and hospitals. Manage everything from patient appointments to omnichannel communication in one seamless platform.
          </p>

          <a href="https://denttickai.com/" target="_blank" rel="noopener noreferrer" className="btn-visit-mint">
            Visit DentTickAI
          </a>
        </div>
      </section>

      {/* Transform Banner Section */}
      <section className="mint-leaf-banner">
        <div className="container">
          <div className="banner-container">
            {/* Left Image */}
            <img src="/mintleaf/banner_left.png" alt="Dashboard" className="banner-img-left" />
            
            {/* Right Image */}
            <img src="/mintleaf/banner_right.png" alt="Mobile App" className="banner-img-right" />

            <div className="banner-content">
              <h2>Transform Your Clinic's Connections</h2>
              <p>Schedule a personalized consultation with one of our clinic communications experts today!</p>
              <a href="https://denttickai.com/" target="_blank" rel="noopener noreferrer" className="btn-banner">
                Schedule a Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mint-leaf-features">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-extrabold mb-4 text-primary">Everything your clinic needs</h2>
            <p className="text-secondary text-lg">
              A suite of tools built specifically for the demands of modern healthcare in the digital age.
            </p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>AI Receptionist</h3>
              <p>A 24/7 multilingual voice & chat agent that handles inbound calls, books appointments and answers FAQs — even at 2am.</p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3>Healthcare CRM</h3>
              <p>Patient records, treatment plans, recall lists and lifetime value — finally in one beautiful place.</p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3>WhatsApp CRM</h3>
              <p>Verified WhatsApp Business API with templates, broadcasts and a shared inbox for your medical team.</p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>Appointment Management</h3>
              <p>Smart calendar with auto-reminders, no-show recovery and doctor utilization insights.</p>
            </div>

            {/* Feature 5 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3>Marketing Automation</h3>
              <p>Run Meta & Google ads, landing pages and patient drip campaigns from one cockpit.</p>
            </div>

            {/* Feature 6 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3>Google Review Automation</h3>
              <p>After every visit, the right patients are nudged to leave a glowing Google review.</p>
            </div>

            {/* Feature 7 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3>Revenue Analytics</h3>
              <p>Track collections, doctor productivity, treatment-mix and ROI in real-time.</p>
            </div>

            {/* Feature 8 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3>New Clinic Launch Pack</h3>
              <p>Opening a new clinic? Brand, website, GMB and 90-day playbook — all done for you.</p>
            </div>

          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="mint-leaf-how">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-primary">How it works</h2>
            <p className="text-secondary text-lg">
              Go live in 7 days. Grow forever.
            </p>
          </div>

          <div className="how-grid-3">
            <div className="how-step active">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Onboard</h4>
                <p>We migrate patients, set up WhatsApp & AI agent in 48 hours — white-glove included.</p>
              </div>
            </div>
            <div className="how-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Automate</h4>
                <p>AI starts qualifying leads, nurturing patients and recovering no-shows from day one.</p>
              </div>
            </div>
            <div className="how-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Accelerate</h4>
                <p>Weekly growth reviews, ad management and a dedicated success manager.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="mint-leaf-cases">
        <div className="container">
          <div className="cases-header">
            <h2>Trusted by Clinics Like These</h2>
            <a href="https://denttickai.com/" target="_blank" rel="noopener noreferrer" className="btn-cases">
              View All
            </a>
          </div>

          <div className="cases-grid">
            <div className="cases-left">
              <div className="cases-left-header">
                <span className="case-badge">Case Studies</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="case-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              
              <div className="cases-quote-box">
                <p>
                  Every day, clinic owners put in the work to make patients feel cared for. <strong>These are their stories.</strong>
                </p>
              </div>

              <div className="cases-actions">
                <a href="https://denttickai.com/" target="_blank" rel="noopener noreferrer" className="btn-cases-primary">
                  Read our Case Studies
                </a>
                <a href="https://denttickai.com/" target="_blank" rel="noopener noreferrer" className="btn-cases-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="cases-right" style={{ backgroundImage: 'url("/mintleaf/case_study.png")' }}>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
