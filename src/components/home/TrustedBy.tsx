import './TrustedBy.css';

export function TrustedBy() {
  const companies = [
    "NORTHWIND", "Vantara", "KIRLOS", "Meridian Health", 
    "ATLAS FOODS", "Bluestone", "Cedarworks"
  ];

  return (
    <section className="trusted-section">
      <div className="trusted-container flex items-center h-full">
        <div className="trusted-label-container">
          <p className="trusted-label">
            TRUSTED BY 2,400+ COMPANIES
          </p>
        </div>
        
        <div className="trusted-marquee">
          <div className="marquee-content">
            {companies.map((company, index) => (
              <span key={index} className="company-logo">
                {company}
              </span>
            ))}
            {/* Duplicate for seamless infinite scroll */}
            {companies.map((company, index) => (
              <span key={`dup-${index}`} className="company-logo">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
