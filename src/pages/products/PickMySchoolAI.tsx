import { useEffect } from 'react';
import './PickMySchoolAI.css';

export function PickMySchoolAI() {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-product-color', 'var(--accent-red, #ff758f)');
  }, []);

  const cities = [
    { name: 'Hyderabad', count: '1,240 schools' },
    { name: 'Bengaluru', count: '1,890 schools' },
    { name: 'Mumbai', count: '2,140 schools' },
    { name: 'Delhi NCR', count: '2,560 schools' },
    { name: 'Chennai', count: '980 schools' },
    { name: 'Pune', count: '820 schools' },
    { name: 'Kolkata', count: '740 schools' },
  ];

  return (
    <div className="pick-my-school-page">
      {/* Hero Section */}
      <section className="pms-hero">
        <div className="floating-icons">
          {/* Icon 1: Book */}
          <svg className="float-icon icon-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          {/* Icon 2: Users */}
          <svg className="float-icon icon-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {/* Icon 3: Star */}
          <svg className="float-icon icon-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          {/* Icon 4: Building */}
          <svg className="float-icon icon-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          {/* Icon 5: Graduation Cap */}
          <svg className="float-icon icon-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
          {/* Icon 6: Chart */}
          <svg className="float-icon icon-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h2.243a2 2 0 011.956 1.585l.582 2.616a2 2 0 001.956 1.585h2.526a2 2 0 001.956-1.585l.582-2.616a2 2 0 011.956-1.585H21m-18 4h18M3 9h2.243a2 2 0 001.956-1.585l.582-2.616A2 2 0 019.737 3h2.526a2 2 0 011.956 1.585l.582 2.616A2 2 0 0016.757 9H21" />
          </svg>
        </div>
        <div className="pms-hero-content">
          <div className="pms-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
            AI MATCH ENGINE
          </div>
          <h1>
            Stop scrolling 200 schools. <span className="text-italic-accent">Tell us about your child.</span>
          </h1>
          <p>
            Our AI considers 40+ factors — board, fees, distance, teaching style, peer culture, parent ratings, board results, alumni outcomes — and ranks the best matches for your child specifically.
          </p>

          <div className="pms-steps-grid">
            <div className="pms-step-card">
              <div className="pms-step-number">01</div>
              <h3>Take the 2-min quiz</h3>
              <p>Your child's age, your priorities, your budget</p>
            </div>
            <div className="pms-step-card">
              <div className="pms-step-number">02</div>
              <h3>Get a ranked list</h3>
              <p>Top 10 schools, scored 0-100 on fit</p>
            </div>
            <div className="pms-step-card">
              <div className="pms-step-number">03</div>
              <h3>Apply in 1 click</h3>
              <p>One profile, multiple applications</p>
            </div>
          </div>

          <a href="https://pickmyschoolai.com/" target="_blank" rel="noopener noreferrer" className="btn-white">
            Start AI match – free
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '0.5rem'}}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* Browse by city section */}
      <section className="pms-cities">
        <div className="pms-cities-content">
          <h2>Browse by city</h2>
          <p>12,400 schools across 180+ Indian cities</p>
          
          <div className="city-grid">
            {cities.map((city, idx) => (
              <div key={idx} className="city-card">
                <h4>{city.name}</h4>
                <p>{city.count}</p>
              </div>
            ))}
            <div className="city-card more-card">
              <h4>+ 173 more</h4>
              <p>Browse all &rarr;</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Schools (Red) */}
      <section className="pms-schools-red">
        <div className="pms-schools-red-content">
          <div>
            <div className="pms-badge">FOR SCHOOLS</div>
            <h2>Run your school. Fill seats.<br/><span className="text-italic-accent" style={{ color: 'rgba(255,255,255,0.9)' }}>All in one dashboard.</span></h2>
            <p>
              Complete ERP — admissions, students, fees, attendance, communication — plus marketing analytics, lead pipeline and ad performance. Already trusted by 1,200+ schools.
            </p>
            <div className="pms-schools-actions">
              <a href="https://pickmyschoolai.com/" target="_blank" rel="noopener noreferrer" className="btn-white">List your school free</a>
              <a href="https://pickmyschoolai.com/" target="_blank" rel="noopener noreferrer" className="btn-transparent-red">Tour the dashboard</a>
            </div>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>3,824</h3>
              <p>PROFILE VIEWS / MO</p>
            </div>
            <div className="stat-card">
              <h3>142</h3>
              <p>NEW LEADS / WK</p>
            </div>
            <div className="stat-card">
              <h3>₹284</h3>
              <p>COST PER LEAD</p>
            </div>
            <div className="stat-card">
              <h3>#7</h3>
              <p>LISTING RANK</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Schools (Dark) */}
      <section className="pms-schools-dark">
        <div className="pms-schools-dark-content">
          <div className="pms-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            FOR SCHOOLS
          </div>
          <h2>
            One platform to <span className="text-italic-accent">run, fill & grow</span> your school.
          </h2>
          <p>
            ERP + marketplace listing + marketing analytics + lead pipeline – built specifically for Indian K-12 schools.
          </p>
          <div className="pms-schools-actions">
            <a href="https://pickmyschoolai.com/" target="_blank" rel="noopener noreferrer" className="btn-white">
              List your school free
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '0.5rem'}}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="https://pickmyschoolai.com/" target="_blank" rel="noopener noreferrer" className="btn-red">
              Go to ERP
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '0.5rem'}}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Features Cards Section (Cream) */}
      <section className="pms-features-cream">
        <div className="pms-features-cream-content">
          <div className="features-two-col">
            <div className="feature-large-card">
              <div className="feature-large-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              </div>
              <h3>Complete School ERP</h3>
              <ul className="feature-list">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Admissions pipeline
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Student records
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Online fee collection
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Attendance tracking
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Parent communication
                </li>
              </ul>
              <a href="https://pickmyschoolai.com/" target="_blank" rel="noopener noreferrer" className="btn-black">
                Go to ERP Portal
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '0.5rem'}}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>

            <div className="feature-large-card">
              <div className="feature-large-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              </div>
              <h3>Built-in marketing</h3>
              <ul className="feature-list">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Verified PickMySchool listing
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  AI-driven lead matching
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Meta & Google ads dashboard
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Profile rank insights
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  Lead-to-admission funnel
                </li>
              </ul>
              <a href="https://pickmyschoolai.com/" target="_blank" rel="noopener noreferrer" className="btn-red">
                List Your School Now
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '0.5rem'}}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
