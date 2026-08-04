import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ServiceTemplate.css';

export function UiUxDesign() {
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
          <h1 className="text-white drop-shadow-lg">UI/UX Design</h1>
          <p className="subtitle text-primary drop-shadow-md">Crafting digital experiences that captivate</p>
          <p className="text-gray-200 text-xl leading-relaxed mt-4 drop-shadow-sm" style={{ maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            Transform your product with human-centered design. Our UI/UX experts create intuitive, accessible, and stunning interfaces that drive user engagement and satisfaction.
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
                Feature-rich software often fails because it is confusing and difficult to use. Poor user experience leads to high churn rates, increased support tickets, and brand erosion.
              </p>
            </div>
            <div className="solution-box">
              <h3>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Our Solution
              </h3>
              <p className="text-secondary leading-relaxed text-lg">
                We employ deep user research and iterative prototyping to design interfaces that users naturally understand. We balance stunning aesthetics with frictionless usability to maximize conversion and retention.
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
              <h3>User Research & Personas</h3>
              <p className="text-secondary leading-relaxed">Data-driven insights into your users needs, behaviors, and pain points.</p>
            </div>
            
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>Wireframing & Prototyping</h3>
              <p className="text-secondary leading-relaxed">Rapid iteration of layouts and user flows before writing a single line of code.</p>
            </div>
            
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>High-Fidelity UI Design</h3>
              <p className="text-secondary leading-relaxed">Pixel-perfect, modern interfaces aligned with your brand identity.</p>
            </div>
            
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>Design Systems</h3>
              <p className="text-secondary leading-relaxed">Reusable component libraries ensuring visual consistency across all your platforms.</p>
            </div>
            
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>Usability Testing</h3>
              <p className="text-secondary leading-relaxed">Validating design decisions with real users to identify friction points.</p>
            </div>
            
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>Accessibility (a11y)</h3>
              <p className="text-secondary leading-relaxed">Ensuring your application is usable by everyone, compliant with WCAG standards.</p>
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
            <div className="tech-badge">Figma</div><div className="tech-badge">Adobe XD</div><div className="tech-badge">Sketch</div><div className="tech-badge">Framer</div><div className="tech-badge">Storybook</div><div className="tech-badge">Webflow</div>
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
            <p className="text-secondary">Common questions about our UI/UX Design engagements.</p>
          </div>
          <div className="faq-container">
            
            <div className="faq-item">
              <h4>Do you hand off designs or code them as well?</h4>
              <p>We do both! We can deliver Figma files to your developers, or our frontend engineering team can build the pixel-perfect implementation for you.</p>
            </div>
            
            <div className="faq-item">
              <h4>What is a Design System?</h4>
              <p>A design system is a central library of all UI components (buttons, fonts, colors). It ensures your brand looks completely consistent across mobile, web, and internal tools.</p>
            </div>
            
            <div className="faq-item">
              <h4>How do you test designs before coding?</h4>
              <p>We build clickable, high-fidelity prototypes in Figma and run user testing sessions to gather feedback and refine flows before engineering starts.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="bg-gray-50 py-24 text-center border-t border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform with UI/UX Design?</h2>
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
