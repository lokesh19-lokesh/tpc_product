import { useEffect } from 'react';
import './Resources.css';

export function Status() {
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
            <h1>System <span className="text-gradient">Status</span></h1>
            <p>
              Real-time information about the operational status of our platform and services.
            </p>
          </div>
        </div>
      </section>

      <section className="resource-section">
        <div className="container" style={{ maxWidth: '800px' }}>
          
          {/* Main Status Banner */}
          <div className="status-banner">
            <div className="status-indicator">
              <div className="status-dot"></div>
              <h2>All Systems Operational</h2>
            </div>
            <div className="status-updated">
              Updated: Just now
            </div>
          </div>

          {/* Core Services */}
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>Core Services</h3>
          <div className="services-grid" style={{ marginBottom: '4rem' }}>
            <div className="service-row">
              <div className="service-name">REST API</div>
              <div className="service-status operational">Operational</div>
            </div>
            <div className="service-row">
              <div className="service-name">Web Application</div>
              <div className="service-status operational">Operational</div>
            </div>
            <div className="service-row">
              <div className="service-name">Data Pipeline</div>
              <div className="service-status operational">Operational</div>
            </div>
            <div className="service-row">
              <div className="service-name">Webhooks</div>
              <div className="service-status operational">Operational</div>
            </div>
            <div className="service-row">
              <div className="service-name">Authentication (SSO)</div>
              <div className="service-status operational">Operational</div>
            </div>
          </div>

          {/* Past Incidents */}
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>Past Incidents</h3>
          <div style={{ borderLeft: '2px solid #e2e8f0', paddingLeft: '2rem', marginLeft: '1rem' }}>
            <div style={{ marginBottom: '2rem', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-2.4rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', background: '#cbd5e1', border: '2px solid white' }}></div>
              <h4 style={{ fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>No incidents reported today.</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>August 4, 2026</p>
            </div>
            
            <div style={{ marginBottom: '2rem', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-2.4rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', background: '#cbd5e1', border: '2px solid white' }}></div>
              <h4 style={{ fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>No incidents reported.</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>August 3, 2026</p>
            </div>
            
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-2.4rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', background: '#cbd5e1', border: '2px solid white' }}></div>
              <h4 style={{ fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>No incidents reported.</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>August 2, 2026</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
