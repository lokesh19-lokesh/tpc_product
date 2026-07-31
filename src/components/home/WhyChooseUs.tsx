import './WhyChooseUs.css';

export function WhyChooseUs() {
  return (
    <section className="why-3col-section">
      {/* Card 1: T-Hub Picture */}
      <div className="why-card card-photo" style={{ backgroundImage: `url('/t-hub.png')` }}>
      </div>

      {/* Card 2: Locations Grid */}
      <div className="why-card locations-grid">
        <div className="location-box">
          <h3 className="location-name">India</h3>
        </div>
        <div className="location-box">
          <h3 className="location-name">Dubai</h3>
        </div>
        <div className="location-box">
          <h3 className="location-name">Europe</h3>
        </div>
        <div className="location-box">
          <h3 className="location-name">America</h3>
        </div>
      </div>

      {/* Card 3: Google Maps */}
      <div className="why-card">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.2694155501504!2d78.3765600444275!3d17.433905700000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93bd18410b0f%3A0x8d7e3fea891858ce!2sT-Hub!5e0!3m2!1sen!2sin!4v1785502841260!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </section>
  );
}
