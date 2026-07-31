import './OurApproach.css';

export function OurApproach() {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header">
          <p className="approach-overline">OUR APPROACH</p>
          <h2 className="approach-title">
            A product company,<br />
            built on three beliefs.
          </h2>
        </div>

        <div className="approach-grid">
          <div className="approach-card">
            <div className="approach-number">01</div>
            <h3 className="approach-card-title">Products, not projects.</h3>
            <p className="approach-card-text">
              We are a product company. Every line of code ships to a product with a name, a color and an owner.
            </p>
          </div>
          <div className="approach-card">
            <div className="approach-number">02</div>
            <h3 className="approach-card-title">One idea per surface.</h3>
            <p className="approach-card-text">
              Whitespace is a feature. We remove until only the essential remains — then we make it beautiful.
            </p>
          </div>
          <div className="approach-card">
            <div className="approach-number">03</div>
            <h3 className="approach-card-title">Built for real business.</h3>
            <p className="approach-card-text">
              Manufacturing floors. Hospital wards. Classrooms. Our software earns its place in the real world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
