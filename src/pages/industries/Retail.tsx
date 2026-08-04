import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Industry.css';

export function Retail() {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-product-color', 'var(--primary)');
  }, []);

  return (
    <div className="industry-page">
      {/* HERO SECTION */}
      <section className="industry-hero">
        <div className="container">
          <div className="badge">Industry Solutions</div>
          <h1>Transforming Retail with AI</h1>
          <p>
            Personalize customer experiences, optimize inventory management, and predict market trends with our unified intelligence platform for modern retail.
          </p>
          <Link to="/book-demo" className="btn-primary">Explore the Platform</Link>
        </div>
      </section>

      {/* DETAILED EXPLANATION SECTION */}
      <section className="industry-overview">
        <div className="container">
          <div className="overview-header">
            <h2>The Store of the Future is Data-Driven</h2>
            <p>
              In modern retail, consumer expectations shift rapidly. Legacy point-of-sale and inventory systems that isolate data cannot keep up with omnichannel demands. 
              The Patterns Company provides a unified nervous system for your entire retail ecosystem—from supply chain to the storefront.
            </p>
          </div>
          <div className="overview-content">
            <div className="overview-block">
              <h3>Breaking Down Data Silos</h3>
              <p>
                Our platform integrates seamlessly with your existing POS, e-commerce platforms, and CRM systems. By aggregating customer interactions and purchase history, we provide a holistic view of the shopper journey, enabling hyper-personalized marketing and recommendations.
              </p>
            </div>
            <div className="overview-block">
              <h3>From Reactive to Predictive</h3>
              <p>
                Stockouts and overstocking erode margins. Our advanced machine learning models continuously analyze purchasing trends, seasonality, and local events to forecast demand accurately, ensuring you stock exactly what your customers want, when they want it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES SECTION */}
      <section className="industry-capabilities">
        <div className="container">
          <h2 className="section-title">Key Capabilities for Retail</h2>
          <div className="capabilities-grid">
            
            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
              </div>
              <h4>Demand Forecasting</h4>
              <p>Predict product demand with pinpoint accuracy to optimize stock levels and prevent costly overstocking or stockouts.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
              </div>
              <h4>Hyper-Personalization</h4>
              <p>Deliver individualized shopping experiences and targeted promotions based on deep customer behavior analysis.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>
              </div>
              <h4>Omnichannel Integration</h4>
              <p>Seamlessly connect online and in-store data to provide a unified, frictionless customer experience across all touchpoints.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>
              </div>
              <h4>Dynamic Pricing</h4>
              <p>Automatically adjust pricing strategies in real-time based on competitor analysis, demand elasticity, and inventory levels.</p>
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
              <h2>Built for the brands that shape consumer culture.</h2>
            </div>
            <div className="bento-header-right">
              Empowering retailers to build lasting loyalty and drive revenue through data.
            </div>
          </div>

          <div className="bento-grid">
            {/* Top Left: Tall Image */}
            <div className="bento-item bento-img-1" style={{ backgroundImage: "url('/images/bento/retail_store.png')" }}></div>

            {/* Top Mid: Dark Box */}
            <div className="bento-item bento-dark">
              <div className="eyebrow">Statement</div>
              <h3>Powering modern commerce</h3>
              <p>
                Inventory optimization, personalized marketing, and predictive intelligence built for global retail brands.
              </p>
              <div className="arrow">→</div>
            </div>

            {/* Top Right: Blue Box */}
            <div className="bento-item bento-blue">
              <div className="eyebrow">Facts</div>
              <h3>Did you know</h3>
              <p>
                The Patterns Company handles everything from supply chain logistics to point-of-sale analytics for top retailers.
              </p>
              <div className="bottom-text">Trusted by Global Brands</div>
            </div>

            {/* Bottom Left: Dashboard Image with Text */}
            <div className="bento-item bento-img-2" style={{ backgroundImage: "url('/images/bento/retail_dash.png')" }}>
              <div className="bento-img-2-content">
                <p>Whether it's preventing stockouts or driving conversion rates, we turn data into retail breakthroughs.</p>
                <div className="date">a day ago</div>
              </div>
            </div>

            {/* Bottom Right: Wide Gradient Box */}
            <div className="bento-item bento-wide">
              <div className="badge-new">NEW</div>
              <div className="bento-wide-overlay"></div>
              <div className="bento-wide-bg" style={{ backgroundImage: "url('/images/bento/factory_wide.png')" }}></div>
              <div className="bento-wide-content">
                <h3>Excellence at work. Celebrating our team's dedication to building a better shopping experience.</h3>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Build the Store of the Future?</h2>
          <p>Talk to our retail specialists to see how The Patterns Company can improve your margins and customer loyalty.</p>
          <Link to="/book-demo" className="btn-primary">Talk to an Expert</Link>
        </div>
      </section>
    </div>
  );
}
