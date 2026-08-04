import { SEO } from '../../components/seo/SEO';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

export function CustomerIntelligence() {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-product-color', 'var(--primary)');
  }, []);

  return (
    <div className="solution-page">
      <SEO 
        title="Customer Intelligence" 
        description="Explore our Customer Intelligence solutions to accelerate digital transformation, ensure compliance, and build robust enterprise architectures." 
        keywords="Customer Intelligence solutions, digital transformation, AI for Customer Intelligence, enterprise architecture"
        path="/solutions/customer-intelligence" 
      />
      {/* HERO SECTION */}
      <section className="solution-hero">
        <div className="container">
          <div className="badge">By Need</div>
          <h1>Customer Intelligence</h1>
          <p>Understand every account</p>
          <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Turn customer data into actionable insights. Anticipate churn, understand sentiment, and deliver hyper-personalized experiences across the entire customer lifecycle.
          </p>
          <Link to="/book-demo" className="btn-solid-white" style={{ background: 'var(--primary)', color: 'white' }}>Book a Demo</Link>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="solution-overview">
        <div className="container">
          <h2>Know Your Customer Better Than They Know Themselves</h2>
          <p>Modern consumers expect brands to anticipate their needs. But when customer data is scattered across CRM, support tickets, and marketing tools, delivering a personalized experience is impossible.</p>
          <p>Our Customer Intelligence solution stitches together a truly unified profile. By applying Natural Language Processing to support chats and predictive models to product usage, we give you a crystal clear picture of customer health.</p>
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
              <h3>360-Degree View</h3>
              <p>Aggregate data from marketing, sales, and support into a single unified customer profile.</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <h3>Churn Prediction</h3>
              <p>Identify at-risk accounts early with AI models that analyze usage drops and support tickets.</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <h3>Sentiment Analysis</h3>
              <p>Gauge customer satisfaction in real-time by analyzing communications using NLP.</p>
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
                <h4>Proactive Retention</h4>
                <p>Automatically flag accounts that haven’t logged in recently or have unresolved bugs, assigning a Customer Success Manager immediately.</p>
              </div>
            </div>

            <div className="use-case-item">
              <div className="use-case-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="use-case-content">
                <h4>Cross-sell Opportunities</h4>
                <p>Analyze usage patterns to identify customers who have outgrown their current tier and are prime candidates for an upgrade.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="solution-cta">
        <div className="container">
          <h2>Unlock your customer data.</h2>
          <p>Join thousands of industry leaders who are transforming their business with The Patterns Company.</p>
          <Link to="/book-demo" className="btn-solid-white">Get Started Today</Link>
        </div>
      </section>
    </div>
  );
}
