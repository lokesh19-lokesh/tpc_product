import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Industry.css';

export function Manufacturing() {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-product-color', 'var(--primary)');
  }, []);

  return (
    <div className="industry-page">
      {/* HERO SECTION */}
      <section className="industry-hero">
        <div className="container">
          <div className="badge">Industry Solutions</div>
          <h1>Transforming Manufacturing with AI</h1>
          <p>
            Embrace Industry 4.0. Connect your factory floor to your supply chain, automate quality control, and predict equipment failures before they happen with our unified intelligence platform.
          </p>
          <Link to="/book-demo" className="btn-primary">Explore the Platform</Link>
        </div>
      </section>

      {/* DETAILED EXPLANATION SECTION */}
      <section className="industry-overview">
        <div className="container">
          <div className="overview-header">
            <h2>The Factory of the Future is Data-Driven</h2>
            <p>
              In today's highly competitive global market, manufacturers face immense pressure to reduce costs, improve quality, and adapt instantly to supply chain disruptions. Legacy systems that isolate data on the factory floor are no longer sufficient. 
              The Patterns Company provides a unified nervous system for your entire manufacturing operation—from raw material sourcing to final product delivery.
            </p>
          </div>
          <div className="overview-content">
            <div className="overview-block">
              <h3>Breaking Down Data Silos</h3>
              <p>
                Our platform integrates seamlessly with your existing SCADA, MES, and ERP systems. By aggregating telemetry data from IoT sensors and correlating it with inventory levels and market demand, we provide a single source of truth. This allows plant managers to make split-second decisions based on real-time insights rather than historical reports.
              </p>
            </div>
            <div className="overview-block">
              <h3>From Reactive to Proactive</h3>
              <p>
                The cost of unplanned downtime in manufacturing can exceed hundreds of thousands of dollars per hour. Our advanced machine learning models continuously analyze vibration, temperature, and acoustic data to detect microscopic anomalies. We predict mechanical failures weeks in advance, allowing you to schedule maintenance only when necessary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES SECTION */}
      <section className="industry-capabilities">
        <div className="container">
          <h2 className="section-title">Key Capabilities for Manufacturing</h2>
          <div className="capabilities-grid">
            
            <div className="capability-card">
              <div className="capability-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.014a4.514 4.514 0 011.494 3.156 3 3 0 00-3.238-3.142zM14.25 7.5a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" /></svg>
              </div>
              <h4>Predictive Maintenance</h4>
              <p>Eliminate unexpected machine breakdowns and optimize the lifecycle of your critical assets using IoT-driven anomaly detection.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
              </div>
              <h4>Supply Chain Resilience</h4>
              <p>Respond dynamically to material shortages with AI that automatically routes components and adjusts production schedules instantly.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4>Automated Quality Assurance</h4>
              <p>Deploy computer vision models on the assembly line to detect microscopic defects faster and more accurately than human inspectors.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
              </div>
              <h4>Energy Optimization</h4>
              <p>Track power consumption across your facility and optimize HVAC and machinery operation to significantly reduce your carbon footprint.</p>
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
              <h2>Built for the factories that build the world.</h2>
            </div>
            <div className="bento-header-right">
              Not demos. Not slideware. Software earning its place in real operations, every day.
            </div>
          </div>

          <div className="bento-grid">
            {/* Top Left: Tall Factory Image */}
            <div className="bento-item bento-img-1" style={{ backgroundImage: "url('/images/bento/factory_floor.png')" }}></div>

            {/* Top Mid: Dark Box */}
            <div className="bento-item bento-dark">
              <div className="eyebrow">Statement</div>
              <h3>Powering modern assembly lines</h3>
              <p>
                Material flow, quality control and predictive intelligence built for factories and multi-site plants to focus on what matters.
              </p>
              <div className="arrow">→</div>
            </div>

            {/* Top Right: Blue Box */}
            <div className="bento-item bento-blue">
              <div className="eyebrow">Facts</div>
              <h3>Did you know</h3>
              <p>
                The Patterns Company handles everything from raw material intake to finished goods for modern manufacturing institutions.
              </p>
              <div className="bottom-text">10+ Years of Excellence</div>
            </div>

            {/* Bottom Left: Dashboard Image with Text */}
            <div className="bento-item bento-img-2" style={{ backgroundImage: "url('/images/bento/factory_dashboard.png')" }}>
              <div className="bento-img-2-content">
                <p>Whether it's managing supply chains or preventing critical breakdowns, we turn data into manufacturing breakthroughs.</p>
                <div className="date">a day ago</div>
              </div>
            </div>

            {/* Bottom Right: Wide Gradient Box */}
            <div className="bento-item bento-wide">
              <div className="badge-new">NEW</div>
              <div className="bento-wide-overlay"></div>
              <div className="bento-wide-bg" style={{ backgroundImage: "url('/images/bento/factory_wide.png')" }}></div>
              <div className="bento-wide-content">
                <h3>Excellence at work. As above, so below. Celebrating our team's dedication to building a better future.</h3>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Build the Factory of the Future?</h2>
          <p>Talk to our manufacturing specialists to see how The Patterns Company can increase your yield and reduce downtime.</p>
          <Link to="/book-demo" className="btn-primary">Talk to an Expert</Link>
        </div>
      </section>
    </div>
  );
}
