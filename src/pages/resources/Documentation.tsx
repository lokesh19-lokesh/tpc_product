import { SEO } from '../../components/seo/SEO';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Documentation.css';

export function Documentation() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Use a neutral/blue accent for the documentation portal
    document.documentElement.style.setProperty('--active-product-color', '#0284c7');
  }, []);

  return (
    <main className="docs-page">
      <SEO 
        title="Documentation" 
        description="Learn more about Documentation at The Patterns Company. We provide enterprise solutions for resources." 
        keywords="Documentation, The Patterns Company, AI, enterprise solutions, resources"
        path="/resources/documentation" 
      />
      {/* 1. HERO SECTION */}
      <section className="docs-hero">
        <div className="container relative z-10">
          <h1>Documentation Hub</h1>
          <p>Everything you need to build, integrate, and scale with The Patterns Company.</p>
          
          <div className="docs-search-container">
            <input 
              type="text" 
              className="docs-search-input" 
              placeholder="Search guides, API references, or tutorials..." 
            />
            <svg className="docs-search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      <section className="docs-content container">
        {/* 2. CATEGORIES GRID */}
        <div className="docs-categories-grid">
          
          {/* Card 1 */}
          <Link to="#" className="docs-category-card">
            <div className="docs-category-icon">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3>Getting Started</h3>
            <p>Quickstart guides, installation instructions, and core concepts to get you up and running in minutes.</p>
            <div className="docs-category-link">Read the basics &rarr;</div>
          </Link>

          {/* Card 2 */}
          <Link to="#" className="docs-category-card">
            <div className="docs-category-icon">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3>API Reference</h3>
            <p>Comprehensive documentation for our REST and GraphQL APIs, including endpoints, parameters, and payloads.</p>
            <div className="docs-category-link">Explore the API &rarr;</div>
          </Link>

          {/* Card 3 */}
          <Link to="#" className="docs-category-card">
            <div className="docs-category-icon">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3>SDKs & Libraries</h3>
            <p>Official client libraries and SDKs for JavaScript, Python, Go, and Java to accelerate your development.</p>
            <div className="docs-category-link">View libraries &rarr;</div>
          </Link>

          {/* Card 4 */}
          <Link to="#" className="docs-category-card">
            <div className="docs-category-icon">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3>Architecture Guides</h3>
            <p>Deep dives into deployment patterns, microservices design, and best practices for high availability.</p>
            <div className="docs-category-link">Learn best practices &rarr;</div>
          </Link>

          {/* Card 5 */}
          <Link to="#" className="docs-category-card">
            <div className="docs-category-icon">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3>Security & Compliance</h3>
            <p>Implement secure authentication (OAuth2, SAML), manage RBAC, and understand our compliance certifications.</p>
            <div className="docs-category-link">Secure your app &rarr;</div>
          </Link>

          {/* Card 6 */}
          <Link to="#" className="docs-category-card">
            <div className="docs-category-icon">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3>Troubleshooting</h3>
            <p>Solutions to common errors, debugging guides, and frequently asked questions across all our platforms.</p>
            <div className="docs-category-link">Find solutions &rarr;</div>
          </Link>

        </div>

        {/* 3. SPLIT SECTION (Changelog & Helpful Links) */}
        <div className="docs-split-section">
          
          {/* Changelog */}
          <div>
            <h2 className="docs-section-title">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Latest Updates
            </h2>
            <div className="changelog-list">
              
              <div className="changelog-item">
                <div className="changelog-date">
                  <span className="month">Aug</span>
                  <span className="day">02</span>
                </div>
                <div className="changelog-content">
                  <h4>
                    PatternsOS v2.4 Released
                    <span className="changelog-tag tag-feature">New Feature</span>
                  </h4>
                  <p>Added highly requested bulk-export capabilities to the reporting API. Upgraded the underlying Node engines for a 20% latency reduction across all endpoints.</p>
                </div>
              </div>

              <div className="changelog-item">
                <div className="changelog-date">
                  <span className="month">Jul</span>
                  <span className="day">28</span>
                </div>
                <div className="changelog-content">
                  <h4>
                    React Native SDK v1.2.0
                    <span className="changelog-tag tag-update">Update</span>
                  </h4>
                  <p>Full support for the new iOS 17 privacy manifests and native smooth-scroll integrations. Updated dependency graphs for smaller bundle sizes.</p>
                </div>
              </div>

              <div className="changelog-item">
                <div className="changelog-date">
                  <span className="month">Jul</span>
                  <span className="day">15</span>
                </div>
                <div className="changelog-content">
                  <h4>
                    Auth Middleware Patch
                    <span className="changelog-tag tag-fix">Bug Fix</span>
                  </h4>
                  <p>Resolved an edge case where expired OAuth tokens were not correctly triggering the silent-refresh flow in some browser environments.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Helpful Links */}
          <div>
            <h2 className="docs-section-title">Helpful Links</h2>
            <div className="helpful-links">
              <ul className="helpful-links-list">
                <li>
                  <Link to="#">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    Developer Community
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    GitHub Repositories
                  </Link>
                </li>
                <li>
                  <Link to="/company/about">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    Engineering Blog
                  </Link>
                </li>
                <li>
                  <Link to="/resources/support">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* 4. CTA */}
        <section className="docs-cta">
          <h2>Still can't find what you're looking for?</h2>
          <p>Our engineering support team is available 24/7 to help you resolve integration issues, architect solutions, or debug code.</p>
          <Link to="/company/contact" className="btn-docs-white">
            Open a Support Ticket
          </Link>
        </section>

      </section>
    </main>
  );
}
