import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Industry.css';

export function Construction() {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-product-color', 'var(--primary)');
  }, []);

  return (
    <div className="industry-page">
      {/* HERO SECTION */}
      <section className="industry-hero">
        <div className="container">
          <div className="badge">Industry Solutions</div>
          <h1>Transforming Construction with AI</h1>
          <p>
            Accelerate project timelines, optimize resource allocation, and enhance site safety with our unified intelligence platform for modern construction.
          </p>
          <Link to="/book-demo" className="btn-primary">Explore the Platform</Link>
        </div>
      </section>

      {/* DETAILED EXPLANATION SECTION */}
      <section className="industry-overview">
        <div className="container">
          <div className="overview-header">
            <h2>The Jobsite of the Future is Data-Driven</h2>
            <p>
              In construction, delays and cost overruns are notorious. Legacy project management tools that isolate scheduling, budgeting, and field data lead to miscommunication and rework. 
              The Patterns Company provides a unified nervous system for your entire project portfolio—from pre-construction to handover.
            </p>
          </div>
          <div className="overview-content">
            <div className="overview-block">
              <h3>Breaking Down Data Silos</h3>
              <p>
                Our platform integrates seamlessly with your existing ERP, BIM, and field reporting software. By aggregating financial data, drone surveys, and daily logs, we provide a single source of truth, enabling project managers to track progress against the budget and schedule in real-time.
              </p>
            </div>
            <div className="overview-block">
              <h3>From Reactive to Predictive</h3>
              <p>
                Weather delays and supply chain disruptions can derail a project. Our advanced machine learning models continuously analyze historical weather patterns, material availability, and subcontractor performance to predict schedule risks weeks in advance, allowing you to mitigate delays proactively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES SECTION */}
      <section className="industry-capabilities">
        <div className="container">
          <h2 className="section-title">Key Capabilities for Construction</h2>
          <div className="capabilities-grid">
            
            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>
              </div>
              <h4>Predictive Scheduling</h4>
              <p>Forecast project delays by analyzing weather data, supply chain metrics, and historical subcontractor performance.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <h4>Site Safety Monitoring</h4>
              <p>Deploy computer vision to monitor jobsites for safety compliance and potential hazards in real-time, reducing incident rates.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014-8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" /></svg>
              </div>
              <h4>Equipment Tracking</h4>
              <p>Optimize fleet utilization and prevent theft by tracking the real-time location and operational status of heavy machinery.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4>Cost Control Analytics</h4>
              <p>Monitor budget variances in real-time by automatically reconciling daily progress reports with material costs and labor hours.</p>
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
              <h2>Built for the teams that build our world.</h2>
            </div>
            <div className="bento-header-right">
              Empowering contractors to deliver projects on time and under budget through data.
            </div>
          </div>

          <div className="bento-grid">
            {/* Top Left: Tall Image (Placeholder due to quota) */}
            <div className="bento-item bento-img-1" style={{ backgroundImage: "url('/images/bento/factory_floor.png')" }}></div>

            {/* Top Mid: Dark Box */}
            <div className="bento-item bento-dark">
              <div className="eyebrow">Statement</div>
              <h3>Powering modern construction</h3>
              <p>
                Schedule optimization, budget control, and predictive intelligence built for general contractors and developers.
              </p>
              <div className="arrow">→</div>
            </div>

            {/* Top Right: Blue Box */}
            <div className="bento-item bento-blue">
              <div className="eyebrow">Facts</div>
              <h3>Did you know</h3>
              <p>
                The Patterns Company handles everything from supply chain logistics to site safety monitoring for major construction firms.
              </p>
              <div className="bottom-text">Trusted by Top Contractors</div>
            </div>

            {/* Bottom Left: Dashboard Image with Text (Placeholder) */}
            <div className="bento-item bento-img-2" style={{ backgroundImage: "url('/images/bento/factory_dashboard.png')" }}>
              <div className="bento-img-2-content">
                <p>Whether it's preventing schedule slips or improving safety, we turn data into construction breakthroughs.</p>
                <div className="date">a day ago</div>
              </div>
            </div>

            {/* Bottom Right: Wide Gradient Box (Placeholder) */}
            <div className="bento-item bento-wide">
              <div className="badge-new">NEW</div>
              <div className="bento-wide-overlay"></div>
              <div className="bento-wide-bg" style={{ backgroundImage: "url('/images/bento/factory_wide.png')" }}></div>
              <div className="bento-wide-content">
                <h3>Excellence at work. Celebrating our team's dedication to building a stronger future.</h3>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Build the Jobsite of the Future?</h2>
          <p>Talk to our construction specialists to see how The Patterns Company can improve your margins and project delivery.</p>
          <Link to="/book-demo" className="btn-primary">Talk to an Expert</Link>
        </div>
      </section>
    </div>
  );
}
