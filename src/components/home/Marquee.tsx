import './Marquee.css';

const StarIcon = () => (
  <svg className="marquee-star" viewBox="0 0 24 24" fill="none" stroke="#e5e7eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M4.9 19.1l14.2-14.2" />
  </svg>
);

export function Marquee() {
  const items = [
    "Inventing Tomorrow",
    "Transforming Industries",
    "Empowering Teams",
    "Shipping Real Products"
  ];

  return (
    <div className="marquee-section">
      <div className="marquee-container">
        <div className="marquee-content">
          {items.map((text, index) => (
            <div key={`first-${index}`} className="marquee-item">
              <span className="marquee-text">{text}</span>
              <StarIcon />
            </div>
          ))}
        </div>
        {/* Duplicated for seamless infinite scrolling */}
        <div className="marquee-content" aria-hidden="true">
          {items.map((text, index) => (
            <div key={`second-${index}`} className="marquee-item">
              <span className="marquee-text">{text}</span>
              <StarIcon />
            </div>
          ))}
        </div>
        {/* Add a third one just in case the screen is extremely wide */}
        <div className="marquee-content" aria-hidden="true">
          {items.map((text, index) => (
            <div key={`third-${index}`} className="marquee-item">
              <span className="marquee-text">{text}</span>
              <StarIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
