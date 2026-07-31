import './Industries.css';

export function Industries() {
  return (
    <section className="industries-section">
      <div className="industries-container">
        <div className="industries-header">
          <div className="industries-header-left">
            <p className="industries-overline">INDUSTRIES</p>
            <h2 className="industries-title">
              Built for the industries<br />
              that build the world.
            </h2>
          </div>
          <div className="industries-header-right">
            <p className="industries-subtitle">
              Not demos. Not slideware. Software earning<br />
              its place in real operations, every day.
            </p>
          </div>
        </div>

        <div className="industries-grid">
          {/* Card 1: Image only */}
          <div 
            className="ind-card ind-card-1" 
            style={{ backgroundImage: `url('/images/ind_manufacturing_1785493988846.png')` }}
          >
          </div>
          
          {/* Card 2: Dark Grey Statement */}
          <div className="ind-card ind-card-2 bg-dark">
            <p className="ind-card-overline text-blue">STATEMENT</p>
            <h3 className="ind-card-title text-white">Powering modern healthcare and hospitals</h3>
            <div className="ind-card-content-wrapper">
              <div className="ind-card-border-left"></div>
              <p className="ind-card-text text-gray">
                Patient flow, documentation and revenue cycle intelligence built for hospitals and multi-site clinics to focus on what matters.
              </p>
            </div>
            <div className="ind-card-arrow">→</div>
          </div>
          
          {/* Card 3: Blue Facts */}
          <div className="ind-card ind-card-3 bg-blue">
            <p className="ind-card-overline text-white">FACTS</p>
            <h3 className="ind-card-title text-white">Did you know</h3>
            <div className="ind-card-content-wrapper">
              <div className="ind-card-border-left-yellow"></div>
              <p className="ind-card-text text-white">
                PickMySchoolAI handles everything from enquiry to enrolment to learning outcomes for modern educational institutions.
              </p>
            </div>
            <p className="ind-card-footer text-white italic">10+ Years of Excellence</p>
            <div className="ind-card-circle"></div>
          </div>
          
          {/* Card 4: Image + Text overlay */}
          <div 
            className="ind-card ind-card-4" 
            style={{ backgroundImage: `url('/images/ind_hospitality_1785493999121.png')` }}
          >
            <div className="ind-card-overlay-dark">
              <div className="ind-card-icon">f</div>
              <p className="ind-card-bottom-text">
                Whether it's managing bookings or personalizing guest experiences, we turn data into hospitality breakthroughs.
              </p>
              <p className="ind-card-footer text-gray italic">a day ago</p>
            </div>
          </div>
          
          {/* Card 5: Wide Image + Gradient overlay */}
          <div 
            className="ind-card ind-card-5" 
            style={{ backgroundImage: `url('/images/ind_construction_1785494009452.png')` }}
          >
            <div className="ind-card-overlay-gradient">
              <p className="ind-card-badge">NEW</p>
              <div className="ind-card-camera-icon">📷</div>
              <div className="ind-card-5-content">
                <div className="ind-card-border-left-white"></div>
                <h3 className="ind-card-5-title">Excellence at work. As above, so below. Celebrating our team's dedication to building a better future.</h3>
              </div>
              <p className="ind-card-footer-wide italic">a day ago</p>
              
              <div className="ind-card-watermark">
                <p className="watermark-title">PATTERNS LABS</p>
                <p className="watermark-subtitle">APPLIED AI RESEARCH</p>
                <h2 className="watermark-huge">EXCELLENCE AT WORK</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
