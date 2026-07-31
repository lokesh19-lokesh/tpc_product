import './CareersBanner.css';

export function CareersBanner() {
  return (
    <section className="careers-section">
      <div className="container">
        <div className="careers-box">
          <div className="careers-content">
            <p className="careers-overline">WE ARE HIRING</p>
            <h2 className="careers-title">Build the future of <span className="highlight">Applied AI</span>.</h2>
            <p className="careers-description">
              We're looking for exceptional engineers, researchers, and designers to help us transform industries at a global scale.
            </p>
          </div>
          <div className="careers-action">
            <a href="/careers" className="careers-btn">
              View Open Positions <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
