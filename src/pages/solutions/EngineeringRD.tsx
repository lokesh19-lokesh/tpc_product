import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ServiceTemplate.css';

export function EngineeringRD() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.setProperty('--active-product-color', 'var(--primary)');
  }, []);

  return (
    <div className="solution-page">
      {/* 1. HERO SECTION */}
      <section className="solution-hero">
        <div className="container relative z-10">
          <div className="badge mb-6 inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
            Premium Service
          </div>
          <h1 className="text-white drop-shadow-lg">Engineering Research & Development</h1>
          <p className="subtitle text-primary drop-shadow-md">Innovate faster with dedicated R&D engineering</p>
          <p className="text-gray-200 text-xl leading-relaxed mt-4 drop-shadow-sm" style={{ maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            Accelerate product innovation with our specialized engineering research and development services, designed to bring disruptive technologies to market.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link to="/book-demo" className="btn-solid-white" style={{ background: 'var(--primary)', color: 'white', padding: '1.2rem 2.5rem', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '1.1rem' }}>
              Book a Consultation
            </Link>
            <Link to="/company/contact" className="btn-outline" style={{ border: '2px solid rgba(255,255,255,0.3)', color: 'white', padding: '1.2rem 2.5rem', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '1.1rem' }}>
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CHALLENGE VS SOLUTION SECTION */}
      <section className="solution-challenge">
        <div className="container">
          <div className="challenge-grid">
            <div className="challenge-box">
              <h3>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                The Industry Challenge
              </h3>
              <p className="text-secondary leading-relaxed text-lg">
                In-house teams are often consumed by maintaining existing products, leaving no bandwidth to research and develop the next generation of disruptive technologies.
              </p>
            </div>
            <div className="solution-box">
              <h3>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Our Solution
              </h3>
              <p className="text-secondary leading-relaxed text-lg">
                Our dedicated R&D engineers serve as an extension of your team. We explore bleeding-edge technologies, build rapid prototypes, and validate proofs-of-concept to accelerate your innovation pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES (6 Grid) */}
      <section className="solution-features-rich">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-secondary max-w-2xl mx-auto text-lg">Comprehensive, end-to-end expertise delivering exceptional results.</p>
          </div>
          <div className="rich-features-grid">
            
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>Proof of Concept (PoC)</h3>
              <p className="text-secondary leading-relaxed">Rapidly testing technical feasibility for bold new product ideas.</p>
            </div>
            
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>Hardware/Software Co-design</h3>
              <p className="text-secondary leading-relaxed">Integrated engineering for IoT devices, embedded systems, and edge computing.</p>
            </div>
            
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>Prototyping & MVPs</h3>
              <p className="text-secondary leading-relaxed">Building functional minimum viable products to secure funding or market validation.</p>
            </div>
            
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>Patent Engineering</h3>
              <p className="text-secondary leading-relaxed">Technical documentation and novel algorithm design to support IP generation.</p>
            </div>
            
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>Advanced Robotics</h3>
              <p className="text-secondary leading-relaxed">R&D for automation, computer vision navigation, and robotic process control.</p>
            </div>
            
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>Technology Scouting</h3>
              <p className="text-secondary leading-relaxed">Identifying and evaluating emerging academic and startup technologies for integration.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGIES WE USE */}
      <section className="solution-tech-stack">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Technologies & Frameworks</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">We build with the best enterprise-grade tools available.</p>
          <div className="tech-grid">
            <div className="tech-badge">C++</div><div className="tech-badge">Rust</div><div className="tech-badge">MATLAB</div><div className="tech-badge">ROS (Robot Operating System)</div><div className="tech-badge">Raspberry Pi</div><div className="tech-badge">CAD Tools</div>
          </div>
        </div>
      </section>

      {/* 5. OUR PROCESS */}
      <section className="solution-process">
        <div className="container">
          <h2>Our Proven Methodology</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4 className="step-title">Discovery</h4>
              <p className="step-desc">We deeply analyze your current infrastructure, workflows, and business objectives.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h4 className="step-title">Strategy</h4>
              <p className="step-desc">Our architects design a tailored, scalable blueprint aligned with industry best practices.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h4 className="step-title">Implementation</h4>
              <p className="step-desc">Agile execution with continuous feedback loops ensuring transparency and speed.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h4 className="step-title">Optimization</h4>
              <p className="step-desc">Post-deployment monitoring, performance tuning, and continuous scaling support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUSINESS OUTCOMES */}
      <section className="solution-outcomes">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Tangible Business Outcomes</h2>
            <p className="text-secondary max-w-2xl mx-auto text-lg">We don't just deliver technology; we deliver measurable impact.</p>
          </div>
          <div className="outcomes-grid">
            <div className="outcome-card">
              <div className="outcome-stat">30%+</div>
              <h4 className="font-bold text-lg mb-2">Cost Reduction</h4>
              <p className="text-secondary text-sm">Lower operational and infrastructure costs through intelligent automation and optimization.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-stat">2x</div>
              <h4 className="font-bold text-lg mb-2">Faster Time-to-Market</h4>
              <p className="text-secondary text-sm">Accelerate your product cycles with agile pipelines and streamlined development.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-stat">99.99%</div>
              <h4 className="font-bold text-lg mb-2">Reliability</h4>
              <p className="text-secondary text-sm">Enterprise-grade uptime ensuring your services are always available to your customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="solution-faq">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-secondary">Common questions about our Engineering Research & Development engagements.</p>
          </div>
          <div className="faq-container">
            
            <div className="faq-item">
              <h4>Who owns the intellectual property (IP)?</h4>
              <p>You do. All code, algorithms, and patents developed during our R&D engagements belong 100% to your organization.</p>
            </div>
            
            <div className="faq-item">
              <h4>Can you help with hardware engineering?</h4>
              <p>Yes. We specialize in IoT integrations and edge computing, writing the low-level embedded software that interfaces perfectly with hardware sensors.</p>
            </div>
            
            <div className="faq-item">
              <h4>How do you validate a Proof of Concept?</h4>
              <p>We build the absolute minimum software required to test the core risk factor, running it against live data or user groups within weeks, not months.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="bg-gray-50 py-24 text-center border-t border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform with Engineering Research & Development?</h2>
          <p className="text-secondary max-w-2xl mx-auto mb-10 text-xl">
            Get in touch with our expert architects to discuss how we can tailor our solutions to your specific enterprise needs.
          </p>
          <Link to="/book-demo" className="inline-block bg-primary text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-green-700 transition-colors text-lg">
            Start Your Transformation
          </Link>
        </div>
      </section>
    </div>
  );
}
