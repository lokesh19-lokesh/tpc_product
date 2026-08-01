import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PatternsOS.css';

export function PatternsOS() {
  useEffect(() => {
    // Set the navbar color to match the PatternsOS brand (orange)
    document.documentElement.style.setProperty('--active-product-color', 'var(--accent-orange)');
  }, []);

  return (
    <div className="patterns-os-page">
      {/* Hero Section */}
      <section className="patterns-os-hero">
        <div className="container">
          <div className="product-badge">
            <span className="dot"></span>
            Manufacturing Intelligence
          </div>
          
          <h1>
            The Operating System for the <span>Factory Floor</span>
          </h1>
          
          <p>
            The complete CRM and intelligence layer for factories, construction, and material supplies. Manage everything from billing to employee attendance in one seamless platform.
          </p>

          <Link to="#" className="btn-visit">
            Visit PatternsOS
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="patterns-os-features">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Built for Heavy Industry</h2>
            <p className="text-secondary text-lg">
              Everything you need to run your operations at scale, built specifically for the complexities of modern manufacturing and construction.
            </p>
          </div>

          <div className="features-grid">
            {/* Module 1 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.092 2.027-.273 3.014m.036 1.053l.236.326m-4.484.773A13.931 13.931 0 0012 21" />
                </svg>
              </div>
              <h3>Authentication & User Management</h3>
              <p>
                Secure access with tenant isolation. Role-based access control (RBAC) ensuring precise permissions for every user layer.
              </p>
            </div>

            {/* Module 2 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h2.243a2 2 0 011.956 1.585l.582 2.616a2 2 0 001.956 1.585h2.526a2 2 0 001.956-1.585l.582-2.616a2 2 0 011.956-1.585H21m-18 4h18M3 9h2.243a2 2 0 001.956-1.585l.582-2.616A2 2 0 019.737 3h2.526a2 2 0 011.956 1.585l.582 2.616A2 2 0 0016.757 9H21" />
                </svg>
              </div>
              <h3>Executive Dashboard</h3>
              <p>
                Real-time analytics and high-level construction insights providing actionable data to the C-suite instantly.
              </p>
            </div>

            {/* Module 3 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3>Company Profile Setup</h3>
              <p>
                Configure multi-branch infrastructure. Manage complex enterprise details including automated GST and PAN validation.
              </p>
            </div>

            {/* Module 4 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3>Customer CRM & Credit</h3>
              <p>
                Track site locations globally. Maintain client records and enforce financial safety via a robust credit control engine.
              </p>
            </div>

            {/* Module 5 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3>Supplier Management</h3>
              <p>
                Streamlined vendor onboarding. Continually measure vendor quality through comprehensive performance ratings.
              </p>
            </div>

            {/* Module 6 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3>Construction Material Master</h3>
              <p>
                Unified product cataloging. Efficiently manage complex material variants, HSN codes, GST rates, and unit conversions.
              </p>
            </div>

            {/* Module 7 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3>Multi-Warehouse Inventory</h3>
              <p>
                Track stock accurately across diverse locations. Features automated stock ledger entries and advanced damage control protocols.
              </p>
            </div>

            {/* Module 8 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3>Purchase Order & GRN</h3>
              <p>
                End-to-end procurement cycles. Issue POs quickly and match them perfectly via Goods Receipt Notes (GRN) and supplier billing.
              </p>
            </div>

            {/* Module 9 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3>Sales Pipeline & Quotes</h3>
              <p>
                From initial bidding to closing. Manage construction sales pipelines, generate quotes seamlessly, and process complex sales orders.
              </p>
            </div>

            {/* Module 10 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3>GST Tax Invoice Engine</h3>
              <p>
                Flawless, compliant invoicing. Auto-generate GST-ready documents in PDF format and distribute instantly via WhatsApp.
              </p>
            </div>

            {/* Module 11 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Construction Accounting</h3>
              <p>
                Granular financial tracking. Utilize the P&L ledger to trace every expense down to the specific project or individual machine level.
              </p>
            </div>

            {/* Module 12 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3>Project Management & BOQ</h3>
              <p>
                Translate Bill of Quantities (BOQ) directly into actionable tasks. Monitor daily site progress with precision via the engine.
              </p>
            </div>

            {/* Module 13 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3>Delivery & Driver Dispatch</h3>
              <p>
                Optimized logistics scheduling. Track vehicle routes in real-time and secure instant, Live GPS-backed proof of delivery.
              </p>
            </div>

            {/* Module 14 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h3>HR, Geofenced Attendance</h3>
              <p>
                Eliminate site-level buddy punching. Ensure compliance with geofenced selfie attendance coupled directly to the payroll engine.
              </p>
            </div>

            {/* Module 15 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3>Settings & Audit Logs</h3>
              <p>
                Comprehensive environment control. Maintain an immutable audit log and dissect data effortlessly via the reporting dashboard.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
