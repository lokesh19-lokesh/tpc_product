import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

export function SalesCRM() {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-product-color', 'var(--primary)');
  }, []);

  return (
    <div className="solution-page">
      {/* HERO SECTION */}
      <section className="solution-hero">
        <div className="container">
          <div className="badge">By Team</div>
          <h1>Sales & CRM</h1>
          <p>Pipeline on every channel</p>
          <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Unify your customer touchpoints into a single, intelligent view. Accurately forecast revenue, score leads automatically, and close deals faster with our omnichannel CRM.
          </p>
          <Link to="/book-demo" className="btn-solid-white" style={{ background: 'var(--primary)', color: 'white' }}>Book a Demo</Link>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="solution-overview">
        <div className="container">
          <h2>Supercharge Your Revenue Engine</h2>
          <p>In today’s fast-paced market, sales teams need more than just a rolodex. They need intelligent insights that guide them on exactly who to call, when to call, and what to say.</p>
          <p>Our advanced CRM solution leverages predictive analytics to score leads and map out the buyer journey, ensuring your sales reps spend their time closing deals rather than doing administrative work.</p>
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
              <h3>Omnichannel Tracking</h3>
              <p>Capture every interaction across email, social, phone, and in-person meetings automatically.</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <h3>Predictive Lead Scoring</h3>
              <p>Identify the prospects most likely to convert using our proprietary machine learning models.</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <h3>Sales Forecasting</h3>
              <p>Generate highly accurate revenue forecasts based on historical data and pipeline velocity.</p>
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
                <h4>Automated Outreach</h4>
                <p>Trigger personalized email sequences and follow-up tasks automatically based on prospect behavior and engagement scores.</p>
              </div>
            </div>

            <div className="use-case-item">
              <div className="use-case-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="use-case-content">
                <h4>Territory Management</h4>
                <p>Visualize your total addressable market and easily reassign accounts to balance workloads and maximize rep quota attainment.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="solution-cta">
        <div className="container">
          <h2>Close more deals, faster.</h2>
          <p>Join thousands of industry leaders who are transforming their business with The Patterns Company.</p>
          <Link to="/book-demo" className="btn-solid-white">Get Started Today</Link>
        </div>
      </section>
    </div>
  );
}
