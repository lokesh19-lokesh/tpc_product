import { SEO } from '../../components/seo/SEO';
import { useEffect } from 'react';
import './Company.css';

export function Investors() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.setProperty('--active-product-color', '#3b82f6');
  }, []);

  return (
    <main className="company-page">
      <SEO 
        title="Investors" 
        description="Learn more about The Patterns Company: our mission, leadership, and careers. Join us in building the future of AI." 
        keywords="Investors, The Patterns Company, AI, enterprise solutions, company"
        path="/company/investors" 
      />
      {/* Premium Hero Section */}
      <section className="about-hero">
        <div className="container hero-container">
          <div className="about-hero-content">
            <span className="hero-overline">Company Performance</span>
            <h1 className="hero-title">Investor <span className="text-gradient">Relations</span></h1>
            <p className="hero-subtitle">
              Building the future of enterprise software with sustainable growth, transparency, and relentless innovation.
            </p>
          </div>
        </div>
        <div className="hero-background-pattern"></div>
      </section>

      {/* Financial Highlights Section */}
      <section className="company-section">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">By the Numbers</span>
            <h2>Financial Highlights</h2>
            <p>Our commitment to delivering exceptional value is reflected in our sustained trajectory of growth.</p>
          </div>
          
          <div className="investor-stats-grid">
            <div className="investor-stat-card">
              <h3>$120M+</h3>
              <p>Annual Recurring Revenue (ARR)</p>
            </div>
            <div className="investor-stat-card">
              <h3>145%</h3>
              <p>Net Retention Rate</p>
            </div>
            <div className="investor-stat-card">
              <h3>2.5x</h3>
              <p>Year-over-Year Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Reports Section */}
      <section className="company-section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">Disclosures</span>
            <h2>Reports & Resources</h2>
            <p>Access our latest quarterly earnings, annual reports, and ESG disclosures.</p>
          </div>
          
          <div className="reports-grid">
            <div className="report-card modern-card">
              <div className="report-icon">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="report-info">
                <h4>Q2 2026 Earnings Report</h4>
                <p>Published Aug 05, 2026</p>
              </div>
              <button className="btn-download-sm">Download PDF</button>
            </div>

            <div className="report-card modern-card">
              <div className="report-icon">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="report-info">
                <h4>2025 Annual Report</h4>
                <p>Published Mar 12, 2026</p>
              </div>
              <button className="btn-download-sm">Download PDF</button>
            </div>

            <div className="report-card modern-card">
              <div className="report-icon">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="report-info">
                <h4>2025 ESG Report</h4>
                <p>Published Jan 20, 2026</p>
              </div>
              <button className="btn-download-sm">Download PDF</button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Backers Section */}
      <section className="company-section">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">Partners</span>
            <h2>Backed by the Best</h2>
            <p>We are proud to be supported by world-class investors who share our vision.</p>
          </div>
          
          <div className="backers-grid">
            <div className="backer-logo">Sequoia Capital</div>
            <div className="backer-logo">Andreessen Horowitz</div>
            <div className="backer-logo">Lightspeed</div>
            <div className="backer-logo">Index Ventures</div>
          </div>
        </div>
      </section>

      {/* Contact IR Section */}
      <section className="company-section-alt">
        <div className="container">
          <div className="ir-contact-card modern-card">
            <div className="ir-content">
              <h2>Contact Investor Relations</h2>
              <p>For financial information, stock-related inquiries, or to speak with our investor relations team.</p>
            </div>
            <div className="ir-action">
              <a href="mailto:investors@thepatternscompany.com" className="btn-primary">Email IR Team</a>
              <span className="ir-email">investors@thepatternscompany.com</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
