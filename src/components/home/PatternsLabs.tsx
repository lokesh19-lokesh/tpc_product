import './PatternsLabs.css';

export function PatternsLabs() {
  return (
    <section className="labs-section">
      <div className="labs-container">
        <div className="labs-badge">
          <span className="labs-dot"></span>
          <span className="labs-badge-text">PATTERNS LABS</span>
        </div>
        
        <h2 className="labs-title">
          Inventing<br />
          Tomorrow.
        </h2>
        
        <hr className="labs-divider" />
        
        <div className="labs-footer">
          <p className="labs-desc">
            Patterns Labs is our research studio — building the<br />
            frontier models, interfaces and ideas that quietly<br />
            power every product we ship.
          </p>
          <a href="#" className="labs-link">
            Explore the research <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
