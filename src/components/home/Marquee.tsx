import './Marquee.css';

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
              <span className="marquee-star">✳</span>
            </div>
          ))}
        </div>
        {/* Duplicated for seamless infinite scrolling */}
        <div className="marquee-content" aria-hidden="true">
          {items.map((text, index) => (
            <div key={`second-${index}`} className="marquee-item">
              <span className="marquee-text">{text}</span>
              <span className="marquee-star">✳</span>
            </div>
          ))}
        </div>
        {/* Add a third one just in case the screen is extremely wide */}
        <div className="marquee-content" aria-hidden="true">
          {items.map((text, index) => (
            <div key={`third-${index}`} className="marquee-item">
              <span className="marquee-text">{text}</span>
              <span className="marquee-star">✳</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
