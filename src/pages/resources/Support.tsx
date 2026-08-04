import { useEffect } from 'react';
import './Resources.css';

export function Support() {
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
            <h1>We're here to <span className="text-gradient">help</span></h1>
            <p>
              Whether you have a technical question, a billing inquiry, or just need guidance on best practices, our support team is ready.
            </p>
          </div>
        </div>
      </section>

      {/* Support Channels Grid */}
      <section className="resource-section">
        <div className="container">
          <div className="support-grid">
            <div className="support-card">
              <div className="compliance-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3>Knowledge Base</h3>
              <p>Explore comprehensive guides, API documentation, and quick-start tutorials to get the most out of our platform.</p>
              <a href="/resources/documentation" className="btn-secondary" style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>Browse Docs</a>
            </div>

            <div className="support-card">
              <div className="compliance-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3>Community Forum</h3>
              <p>Connect with other developers, share your projects, ask questions, and learn from the community's collective expertise.</p>
              <button className="btn-secondary" style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>Join Community</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="resource-section-alt">
        <div className="container">
          <div className="resource-section-header">
            <h2>Contact Support</h2>
            <p>Can't find what you're looking for? Send us a message and our team will get back to you within 24 hours.</p>
          </div>
          
          <div className="contact-support-form">
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#475569' }}>First Name</label>
                  <input type="text" placeholder="John" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', width: '100%' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#475569' }}>Last Name</label>
                  <input type="text" placeholder="Doe" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', width: '100%' }} />
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#475569' }}>Work Email</label>
                <input type="email" placeholder="john@company.com" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', width: '100%' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#475569' }}>Issue Category</label>
                <select style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', width: '100%', background: 'white' }}>
                  <option>Technical Support</option>
                  <option>Billing & Account</option>
                  <option>Feature Request</option>
                  <option>Other</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#475569' }}>Description</label>
                <textarea rows={4} placeholder="Please describe your issue in detail..." style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', width: '100%', resize: 'vertical' }}></textarea>
              </div>
              
              <button className="btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Submit Ticket</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
