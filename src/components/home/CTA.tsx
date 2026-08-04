import './CTA.css';

export function CTA() {
  return (
    <section className="home-cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          Ready to see what<br />
          patterns can do for you?
        </h2>
        
        <div className="cta-action">
          <a href="#" className="cta-button">
            Book a demo <span>→</span>
          </a>
        </div>
      </div>
      <div className="cta-divider-container">
        <hr className="cta-divider" />
      </div>
    </section>
  );
}
