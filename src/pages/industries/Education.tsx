import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Industry.css';

export function Education() {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-product-color', 'var(--primary)');
  }, []);

  return (
    <div className="industry-page">
      {/* HERO SECTION */}
      <section className="industry-hero">
        <div className="container">
          <div className="badge">Industry Solutions</div>
          <h1>Transforming Education with AI</h1>
          <p>
            Enhance student success, streamline campus operations, and personalize learning with our unified intelligence platform designed for modern educational institutions.
          </p>
          <Link to="/book-demo" className="btn-primary">Explore the Platform</Link>
        </div>
      </section>

      {/* DETAILED EXPLANATION SECTION */}
      <section className="industry-overview">
        <div className="container">
          <div className="overview-header">
            <h2>The Campus of the Future is Data-Driven</h2>
            <p>
              In higher education and K-12 districts, disconnected systems hinder student success and administrative efficiency. Legacy SIS and LMS platforms that isolate student data are no longer sufficient. 
              The Patterns Company provides a unified nervous system for your entire educational ecosystem—from enrollment to graduation.
            </p>
          </div>
          <div className="overview-content">
            <div className="overview-block">
              <h3>Breaking Down Data Silos</h3>
              <p>
                Our platform integrates seamlessly with your existing Student Information Systems (SIS), Learning Management Systems (LMS), and facility databases. By aggregating academic, behavioral, and operational data, we provide a holistic view of the student journey, enabling educators to make data-informed decisions.
              </p>
            </div>
            <div className="overview-block">
              <h3>From Reactive to Predictive</h3>
              <p>
                Student attrition can be prevented before it happens. Our advanced machine learning models continuously analyze attendance, grade trends, and engagement metrics to identify at-risk students weeks in advance, allowing advisors to intervene proactively with targeted support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES SECTION */}
      <section className="industry-capabilities">
        <div className="container">
          <h2 className="section-title">Key Capabilities for Education</h2>
          <div className="capabilities-grid">
            
            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h4>At-Risk Student Intervention</h4>
              <p>Predict student dropouts or academic struggles early using AI models that track multifaceted engagement and academic data.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h4>Enrollment Forecasting</h4>
              <p>Accurately predict yield rates and optimize recruitment marketing spend with demographic and historical application analytics.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h4>Campus Operations Optimization</h4>
              <p>Optimize classroom scheduling, energy usage, and facility maintenance based on real-time campus utilization data.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h4>Personalized Learning Paths</h4>
              <p>Deliver tailored curriculum recommendations based on individual student performance, learning speed, and career goals.</p>
            </div>

          </div>
        </div>
      </section>

      {/* BENTO SECTION */}
      <section className="bento-section">
        <div className="container">
          
          <div className="bento-header">
            <div className="bento-header-left">
              <div className="eyebrow">Industries</div>
              <h2>Built for the institutions that shape the future.</h2>
            </div>
            <div className="bento-header-right">
              Empowering educators and administrators to focus on what matters most: student success.
            </div>
          </div>

          <div className="bento-grid">
            {/* Top Left: Tall Image */}
            <div className="bento-item bento-img-1" style={{ backgroundImage: "url('/images/bento/education_campus.png')" }}></div>

            {/* Top Mid: Dark Box */}
            <div className="bento-item bento-dark">
              <div className="eyebrow">Statement</div>
              <h3>Powering modern academic institutions</h3>
              <p>
                Student analytics, operational efficiency, and predictive intelligence built for universities and school districts.
              </p>
              <div className="arrow">→</div>
            </div>

            {/* Top Right: Blue Box */}
            <div className="bento-item bento-blue">
              <div className="eyebrow">Facts</div>
              <h3>Did you know</h3>
              <p>
                The Patterns Company handles everything from admission forecasting to alumni engagement for major educational networks.
              </p>
              <div className="bottom-text">Trusted by Top Universities</div>
            </div>

            {/* Bottom Left: Dashboard Image with Text */}
            <div className="bento-item bento-img-2" style={{ backgroundImage: "url('/images/bento/education_dash.png')" }}>
              <div className="bento-img-2-content">
                <p>Whether it's increasing graduation rates or optimizing campus operations, we turn data into educational breakthroughs.</p>
                <div className="date">a day ago</div>
              </div>
            </div>

            {/* Bottom Right: Wide Gradient Box */}
            <div className="bento-item bento-wide">
              <div className="badge-new">NEW</div>
              <div className="bento-wide-overlay"></div>
              <div className="bento-wide-bg" style={{ backgroundImage: "url('/images/bento/education_wide.png')" }}></div>
              <div className="bento-wide-content">
                <h3>Excellence at work. Celebrating our team's dedication to building a smarter future.</h3>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="industry-cta">
        <div className="container">
          <h2>Ready to Build the Campus of the Future?</h2>
          <p>Talk to our education specialists to see how The Patterns Company can improve your student outcomes.</p>
          <Link to="/book-demo" className="btn-primary">Talk to an Expert</Link>
        </div>
      </section>
    </div>
  );
}
