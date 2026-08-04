import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Legal.css';

interface LegalLayoutProps {
  children: ReactNode;
  title: string;
  lastUpdated: string;
}

const navLinks = [
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms of Service' },
  { path: '/cookies', label: 'Cookie Policy' },
  { path: '/trust-center', label: 'Trust Center' },
  { path: '/accessibility', label: 'Accessibility Statement' },
];

export function LegalLayout({ children, title, lastUpdated }: LegalLayoutProps) {
  const location = useLocation();

  return (
    <div className="legal-page">
      {/* HEADER SECTION */}
      <section className="legal-hero">
        <div className="container">
          <div className="legal-hero-content">
            <div className="badge">Legal & Compliance</div>
            <h1>{title}</h1>
            <p>Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* CONTENT LAYOUT */}
      <section className="legal-main">
        <div className="container legal-container">
          
          {/* SIDEBAR */}
          <aside className="legal-sidebar">
            <nav className="legal-nav">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`legal-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                  {location.pathname === link.path && <span className="active-indicator">→</span>}
                </Link>
              ))}
            </nav>
            <div className="legal-sidebar-card">
              <h4>Questions?</h4>
              <p>Contact our compliance team if you have any questions regarding these policies.</p>
              <a href="mailto:info@thepatternscompany.com">info@thepatternscompany.com</a>
            </div>
          </aside>
          
          {/* DOCUMENT CONTENT */}
          <article className="legal-content">
            {children}
          </article>
          
        </div>
      </section>
    </div>
  );
}
