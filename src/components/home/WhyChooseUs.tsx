import './WhyChooseUs.css';

export function WhyChooseUs() {
  return (
    <section className="why-3col-section">
      {/* Card 1: Stats/Dashboard */}
      <div className="why-card card-gradient-purple">
        <div className="card-1-content">
          <div className="card-1-header">
            <h2 className="card-1-title">REAL<br/>DASHBOARDS</h2>
          </div>
          <div className="card-1-stats">
            <div className="stat-row">
              <span className="stat-label">Analytics</span>
              <span className="stat-value">Actionable</span>
              <span className="stat-change text-green">▲ 100%</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Decisions</span>
              <span className="stat-value">In seconds</span>
              <span className="stat-change text-green">▲ 10x</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Spreadsheets</span>
              <span className="stat-value">Replaced</span>
              <span className="stat-change text-red">▼ 95%</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Visual Language</span>
              <span className="stat-value">Unified</span>
              <span className="stat-change text-green">▲ 100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: Mobile First (Photo Background) */}
      <div className="why-card card-photo" style={{ backgroundImage: `url('/images/feat_mobile_1785494768641.png')` }}>
        <div className="card-overlay-gradient"></div>
        <div className="card-text-bottom">
          <h3 className="card-bottom-title">
            The floor, the ward, the field — in your pocket. Designed for gloves, sunlight and one hand.
          </h3>
        </div>
      </div>

      {/* Card 3: Customer Story (Abstract/Photo Background) */}
      <div className="why-card card-photo" style={{ backgroundImage: `url('/images/feat_customer_1785494779955.png')` }}>
        <div className="card-overlay-dark"></div>
        <div className="card-text-bottom">
          <h3 className="card-bottom-title">
            "PatternsOS gave us a single source of truth across nine plants. Downtime is down, morale is up."<br/>
            <span className="card-bottom-subtitle">— Nordwerk Industries</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
