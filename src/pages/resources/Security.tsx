import { useEffect } from 'react';
import './Resources.css';

export function Security() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.setProperty('--active-product-color', '#3b82f6');
  }, []);

  return (
    <main className="resource-page">
      {/* Hero Section */}
      <section className="resource-hero">
        <div className="container">
          <div className="resource-hero-content">
            <h1>Enterprise-Grade <span className="text-gradient">Security</span></h1>
            <p>
              Security is foundational to our platform. We employ rigorous standards, robust encryption, 
              and continuous monitoring to ensure your data is always protected.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="resource-section">
        <div className="container">
          <div className="resource-section-header">
            <h2>Compliance & Certifications</h2>
            <p>Our infrastructure and processes are regularly audited by independent third parties.</p>
          </div>
          
          <div className="compliance-grid">
            <div className="compliance-card">
              <div className="compliance-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3>SOC 2 Type II</h3>
              <p>Certified for security, availability, and confidentiality.</p>
            </div>

            <div className="compliance-card">
              <div className="compliance-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>ISO 27001</h3>
              <p>Adhering to international standards for information security management.</p>
            </div>

            <div className="compliance-card">
              <div className="compliance-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3>GDPR Compliant</h3>
              <p>Fully compliant with EU data protection and privacy regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="resource-section-alt">
        <div className="container">
          <div className="security-features">
            <div>
              <div className="resource-section-header" style={{ textAlign: 'left', marginLeft: 0 }}>
                <h2>Platform Security</h2>
                <p>We build security into every layer of our technology stack.</p>
              </div>
              
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-item-icon">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div className="feature-item-text">
                    <h4>Data Encryption</h4>
                    <p>All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption across all databases.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-item-icon">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="feature-item-text">
                    <h4>Access Control</h4>
                    <p>Enforced SAML-based SSO, role-based access control (RBAC), and multi-factor authentication (MFA) for all accounts.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-item-icon">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="feature-item-text">
                    <h4>Continuous Monitoring</h4>
                    <p>24/7 automated threat detection, penetration testing, and centralized logging to instantly identify anomalies.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ padding: '2rem', background: 'white', borderRadius: '1.5rem', border: '1px solid #e2e8f0', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}>Vulnerability Disclosure</h3>
              <p style={{ color: '#475569', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                We believe that working with skilled security researchers across the globe is crucial in identifying weaknesses in any technology.
              </p>
              <p style={{ color: '#475569', marginBottom: '2rem', lineHeight: 1.6 }}>
                If you believe you've found a security vulnerability in our service, please notify us; we will work with you to resolve the issue promptly.
              </p>
              <a href="mailto:security@thepatternscompany.com" className="btn-primary" style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>Report a Vulnerability</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
