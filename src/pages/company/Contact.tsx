import { useEffect } from 'react';
import './Company.css';

export function Contact() {
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
            <span className="hero-overline">Get in Touch</span>
            <h1 className="hero-title">Contact <span className="text-gradient">Us</span></h1>
            <p className="hero-subtitle">
              Have questions about our products, pricing, or looking for a custom enterprise solution? Our team is ready to help.
            </p>
          </div>
        </div>
        <div className="hero-background-pattern"></div>
      </section>

      {/* Main Contact Section */}
      <section className="company-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left Column: Contact Info */}
            <div className="contact-info-column">
              <div className="section-header text-left">
                <h2>How can we help?</h2>
                <p>Reach out to us through any of the channels below, or fill out the form to send us a message directly.</p>
              </div>

              <div className="contact-info-cards">
                <div className="contact-info-card modern-card">
                  <div className="contact-icon">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h4>Email Us</h4>
                    <p>info@thepatternscompany.com</p>
                  </div>
                </div>

                <div className="contact-info-card modern-card">
                  <div className="contact-icon">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h4>Call Us</h4>
                    <p>+91-9392557785</p>
                  </div>
                </div>

                <div className="contact-info-card modern-card">
                  <div className="contact-icon">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h4>Headquarters</h4>
                    <p style={{fontSize: '0.85rem'}}>T-Hub 2.0, Inorbit Mall Rd, Vittal Rao Nagar, Knowledge City, Madhapur, Hyderabad, Telangana 500081</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-column">
              <div className="contact-form-container">
                <h3>Send us a message</h3>
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="John Doe" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Work Email</label>
                    <input type="email" id="email" placeholder="john@company.com" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" required>
                      <option value="">Select a topic...</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows={5} placeholder="How can we help you?" required></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">Send Message</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="company-section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">Our Locations</span>
            <h2>Global Presence</h2>
            <p>Operating worldwide to support our global enterprise clients.</p>
          </div>
          
          <div className="offices-grid">
            <div className="office-card" style={{ gridColumn: '1 / -1' }}>
              <div className="office-city">India Hubs</div>
              <div className="office-type">Global Operations</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
                <div>
                  <h5 style={{ fontWeight: 800, marginBottom: '0.5rem', color: '#0f172a' }}>Hyderabad (T-Hub)</h5>
                  <p style={{ fontSize: '0.9rem' }}>T-Hub 2.0, Inorbit Mall Rd, Vittal Rao Nagar, Knowledge City, Madhapur, Hyderabad, Telangana 500081</p>
                </div>
                <div>
                  <h5 style={{ fontWeight: 800, marginBottom: '0.5rem', color: '#0f172a' }}>Hyderabad (Cyber Hills)</h5>
                  <p style={{ fontSize: '0.9rem' }}>C9XP+MMW, Cyber Hills Colony, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500081</p>
                </div>
                <div>
                  <h5 style={{ fontWeight: 800, marginBottom: '0.5rem', color: '#0f172a' }}>Bengaluru</h5>
                  <p style={{ fontSize: '0.9rem' }}>Ground floor, Prestige Atlanta, 80 Feet Rd, Koramangala 1A Block, Koramangala 3 Block, Koramangala, Bengaluru, Karnataka 560034</p>
                </div>
              </div>
            </div>
            
            <div className="office-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
              <div className="office-city">Dubai</div>
              <div className="office-type">Coming Soon</div>
            </div>
            
            <div className="office-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
              <div className="office-city">Europe</div>
              <div className="office-type">Coming Soon</div>
            </div>
            
            <div className="office-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
              <div className="office-city">America</div>
              <div className="office-type">Coming Soon</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
