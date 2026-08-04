import { SEO } from '../../components/seo/SEO';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Industry.css';

export function Hospitality() {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-product-color', 'var(--primary)');
  }, []);

  return (
    <div className="industry-page">
      <SEO 
        title="Hospitality" 
        description="The Patterns Company provides powerful AI solutions tailored for the Hospitality industry to optimize processes and increase efficiency." 
        keywords="Hospitality AI solutions, enterprise AI for Hospitality, The Patterns Company Hospitality, data intelligence"
        path="/industries/hospitality" 
      />
      {/* HERO SECTION */}
      <section className="industry-hero">
        <div className="container">
          <div className="badge">Industry Solutions</div>
          <h1>Transforming Hospitality with AI</h1>
          <p>
            Elevate guest experiences, optimize staff operations, and maximize revenue with our unified intelligence platform for hotels and resorts.
          </p>
          <Link to="/book-demo" className="btn-primary">Explore the Platform</Link>
        </div>
      </section>

      {/* DETAILED EXPLANATION SECTION */}
      <section className="industry-overview">
        <div className="container">
          <div className="overview-header">
            <h2>The Hotel of the Future is Data-Driven</h2>
            <p>
              In hospitality, guest satisfaction is everything. Legacy property management systems that silo guest preferences and operational data prevent you from delivering truly personalized service. 
              The Patterns Company provides a unified nervous system for your entire property portfolio—from booking to checkout.
            </p>
          </div>
          <div className="overview-content">
            <div className="overview-block">
              <h3>Breaking Down Data Silos</h3>
              <p>
                Our platform integrates seamlessly with your existing PMS, CRM, and point-of-sale systems. By aggregating guest interactions across all touchpoints, we provide staff with a holistic view of each guest, enabling hyper-personalized service and targeted upsells.
              </p>
            </div>
            <div className="overview-block">
              <h3>From Reactive to Predictive</h3>
              <p>
                Staffing shortages and unpredictable demand impact the bottom line. Our advanced machine learning models continuously analyze booking trends, flight data, and local events to forecast occupancy rates accurately, ensuring you optimize staffing levels and room pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES SECTION */}
      <section className="industry-capabilities">
        <div className="container">
          <h2 className="section-title">Key Capabilities for Hospitality</h2>
          <div className="capabilities-grid">
            
            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
              </div>
              <h4>Predictive Guest Profiling</h4>
              <p>Anticipate guest needs before they ask by analyzing past stay history, dining preferences, and amenity usage.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>
              </div>
              <h4>Dynamic Revenue Management</h4>
              <p>Maximize RevPAR with AI-driven pricing algorithms that adjust room rates in real-time based on market demand.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
              </div>
              <h4>Facility Optimization</h4>
              <p>Reduce energy costs and optimize housekeeping schedules with IoT sensors that track room occupancy and temperature.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
              </div>
              <h4>Staff Allocation</h4>
              <p>Predict peak check-in times and restaurant rushes to ensure adequate staffing levels and maintain high service standards.</p>
            </div>

          </div>
        </div>
      </section>

      {/* BENTO SECTION */}
      <section className="bento-section">
        <div className="container">
          
          <div className="bento-header">
            <div className="bento-header-left">
              <div className="eyebrow">Industries</div>
              <h2>Built for the brands that define luxury.</h2>
            </div>
            <div className="bento-header-right">
              Empowering hoteliers to deliver unforgettable guest experiences through data.
            </div>
          </div>

          <div className="bento-grid">
            {/* Top Left: Tall Image (Placeholder due to quota) */}
            <div className="bento-item bento-img-1" style={{ backgroundImage: "url('/images/bento/education_campus.png')" }}></div>

            {/* Top Mid: Dark Box */}
            <div className="bento-item bento-dark">
              <div className="eyebrow">Statement</div>
              <h3>Powering modern hospitality</h3>
              <p>
                Revenue management, guest profiling, and operational intelligence built for global hotel chains and luxury resorts.
              </p>
              <div className="arrow">→</div>
            </div>

            {/* Top Right: Blue Box */}
            <div className="bento-item bento-blue">
              <div className="eyebrow">Facts</div>
              <h3>Did you know</h3>
              <p>
                The Patterns Company handles everything from booking forecasting to in-room dining logistics for top hospitality brands.
              </p>
              <div className="bottom-text">Trusted by Global Resorts</div>
            </div>

            {/* Bottom Left: Dashboard Image with Text (Placeholder) */}
            <div className="bento-item bento-img-2" style={{ backgroundImage: "url('/images/bento/healthcare_dash.png')" }}>
              <div className="bento-img-2-content">
                <p>Whether it's maximizing occupancy or elevating service, we turn data into hospitality breakthroughs.</p>
                <div className="date">a day ago</div>
              </div>
            </div>

            {/* Bottom Right: Wide Gradient Box (Placeholder) */}
            <div className="bento-item bento-wide">
              <div className="badge-new">NEW</div>
              <div className="bento-wide-overlay"></div>
              <div className="bento-wide-bg" style={{ backgroundImage: "url('/images/bento/education_wide.png')" }}></div>
              <div className="bento-wide-content">
                <h3>Excellence at work. Celebrating our team's dedication to building a better guest experience.</h3>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Build the Hotel of the Future?</h2>
          <p>Talk to our hospitality specialists to see how The Patterns Company can improve your RevPAR and guest loyalty.</p>
          <Link to="/book-demo" className="btn-primary">Talk to an Expert</Link>
        </div>
      </section>
    </div>
  );
}
