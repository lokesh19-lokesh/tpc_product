import './WhyChooseUs.css';

export function WhyChooseUs() {
  return (
    <section className="why-3col-section">
      {/* Card 1: T-Hub Picture */}
      <div className="why-card card-photo" style={{ backgroundImage: `url('/t-hub.png')` }}>
      </div>

      {/* Card 2: Locations Grid */}
      <div className="why-card locations-grid">
        
        {/* India */}
        <div className="location-box">
          <h3 className="location-name">India</h3>
          <div className="location-details">
            <h4 className="details-title">India</h4>
            <div className="details-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="details-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <p>T-Hub 2.0, Inorbit Mall Rd, Vittal Rao Nagar, Knowledge City, Madhapur, Hyderabad, Telangana 500081</p>
            </div>
            <div className="details-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="details-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <p>C9XP+MMW, Cyber Hills Colony, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500081</p>
            </div>
            <div className="details-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="details-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <p>ground floor, Prestige Atlanta, 80 Feet Rd, Koramangala 1A Block, Koramangala 3 Block, Koramangala, Bengaluru, Karnataka 560034</p>
            </div>
          </div>
        </div>
        
        {/* Dubai */}
        <div className="location-box">
          <h3 className="location-name">Dubai</h3>
          <div className="location-details">
            <h4 className="details-title">Dubai</h4>
            <div className="details-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="details-icon"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <p className="font-bold">Coming Soon</p>
            </div>
          </div>
        </div>
        
        {/* Europe */}
        <div className="location-box">
          <h3 className="location-name">Europe</h3>
          <div className="location-details">
            <h4 className="details-title">Europe</h4>
            <div className="details-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="details-icon"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <p className="font-bold">Coming Soon</p>
            </div>
          </div>
        </div>
        
        {/* America */}
        <div className="location-box">
          <h3 className="location-name">America</h3>
          <div className="location-details">
            <h4 className="details-title">America</h4>
            <div className="details-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="details-icon"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <p className="font-bold">Coming Soon</p>
            </div>
          </div>
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
