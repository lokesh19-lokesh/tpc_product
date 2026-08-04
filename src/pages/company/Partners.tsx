import { useEffect } from 'react';
import './Company.css';

export function Partners() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.setProperty('--active-product-color', '#3b82f6');
  }, []);

  return (
    <main className="company-page">
      {/* Premium Hero Section */}
      <section className="about-hero">
        <div className="container hero-container">
          <div className="about-hero-content">
            <span className="hero-overline">Partner Network</span>
            <h1 className="hero-title">Our Partner <span className="text-gradient">Ecosystem</span></h1>
            <p className="hero-subtitle">
              Collaborating with industry leaders to deliver comprehensive, end-to-end solutions for our global enterprise clients.
            </p>
          </div>
        </div>
        <div className="hero-background-pattern"></div>
      </section>

      {/* Strategic Partnership: Odoo */}
      <section className="company-section">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">Strategic Alliance</span>
            <h2>Powered by Odoo</h2>
            <p>We are proud to partner with Odoo to deliver seamless ERP integrations.</p>
          </div>
          
          <div className="strategic-partner-card modern-card">
            <div className="strategic-partner-logo">
              {/* Odoo Logo Placeholder (or text if logo not available) */}
              <svg width="120" height="40" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#714B67">odoo</text>
              </svg>
            </div>
            <div className="strategic-partner-content">
              <h3>Odoo Strategic Partner</h3>
              <p>
                As a strategic partner, we deeply integrate with Odoo's suite of open source business apps. 
                This alliance allows us to offer our clients robust ERP, CRM, and eCommerce capabilities, seamlessly 
                connected with our own innovative platforms. Together, we empower businesses to optimize operations 
                and accelerate digital transformation.
              </p>
              <a href="https://www.odoo.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Visit Odoo.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Partner Categories */}
      <section className="company-section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">Ecosystem</span>
            <h2>Partner Categories</h2>
            <p>Join a growing network of technology and implementation partners.</p>
          </div>
          
          <div className="partner-categories-grid">
            <div className="partner-category-card modern-card">
              <div className="partner-category-icon">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4>Technology Partners</h4>
              <p>ISVs and tech companies whose software integrates seamlessly with our platform to extend capabilities.</p>
              <div className="partner-logos-mini">
                <span className="mini-logo">AWS</span>
                <span className="mini-logo">GCP</span>
                <span className="mini-logo">Azure</span>
              </div>
            </div>

            <div className="partner-category-card modern-card">
              <div className="partner-category-icon">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4>Consulting Partners</h4>
              <p>System integrators and agencies that help clients implement and customize our solutions.</p>
              {/* 
              <div className="partner-logos-mini">
                <span className="mini-logo">Add partner here</span>
              </div>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Grow With Us</h2>
            <p>
              Become a part of our ecosystem. Let's build the future of enterprise software together.
            </p>
            <div className="cta-actions justify-center mt-8" style={{ display: 'flex', gap: '1rem' }}>
              <a href="/company/contact" className="btn-primary">
                Apply to Partner
              </a>
              <a href="/company/contact" className="btn-secondary">
                Contact Channel Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
