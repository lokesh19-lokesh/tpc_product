import { SEO } from '../../components/seo/SEO';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ServiceTemplate.css';

export function DevSecOps() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.setProperty('--active-product-color', 'var(--primary)');
  }, []);

  return (
    <div className="solution-page">
      <SEO 
        title="Dev Sec Ops" 
        description="Explore our Dev Sec Ops solutions to accelerate digital transformation, ensure compliance, and build robust enterprise architectures." 
        keywords="Dev Sec Ops solutions, digital transformation, AI for Dev Sec Ops, enterprise architecture"
        path="/solutions/dev-sec-ops" 
      />
      {/* 1. HERO SECTION */}
      <section className="solution-hero">
        <div className="container relative z-10">
          <div className="badge mb-6 inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
            Premium Service
          </div>
          <h1 className="text-white drop-shadow-lg">DevSecOps</h1>
          <p className="subtitle text-primary drop-shadow-md">Security integrated at the speed of DevOps</p>
          <p className="text-gray-200 text-xl leading-relaxed mt-4 drop-shadow-sm" style={{ maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            Bake security into every phase of your software development lifecycle. Our DevSecOps services automate security checks without slowing down your deployment pipelines.
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
                Security is typically treated as an afterthought—a final checkpoint that creates massive bottlenecks right before release. When vulnerabilities are found late, remediation is expensive and delays time-to-market.
              </p>
            </div>
            <div className="solution-box">
              <h3>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Our Solution
              </h3>
              <p className="text-secondary leading-relaxed text-lg">
                We integrate security directly into your CI/CD pipelines (Shift-Left). Automated vulnerability scanning, static code analysis, and compliance checks occur seamlessly, ensuring code is secure from commit to production.
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
              <h3>Shift-Left Security</h3>
              <p className="text-secondary leading-relaxed">Embed security scanning directly in developer IDEs and pre-commit hooks.</p>
            </div>
            
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>Automated CI/CD Checks</h3>
              <p className="text-secondary leading-relaxed">SAST, DAST, and SCA tools integrated natively into your build pipelines.</p>
            </div>
            
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>Container Security</h3>
              <p className="text-secondary leading-relaxed">Scan Docker images for known vulnerabilities before they are deployed to orchestration.</p>
            </div>
            
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>Continuous Compliance</h3>
              <p className="text-secondary leading-relaxed">Automate auditing for SOC2, HIPAA, and GDPR compliance standards.</p>
            </div>
            
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>Secrets Management</h3>
              <p className="text-secondary leading-relaxed">Centralized, encrypted management of API keys, tokens, and passwords using Vault.</p>
            </div>
            
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>Threat Modeling</h3>
              <p className="text-secondary leading-relaxed">Proactively identify and mitigate structural vulnerabilities during the design phase.</p>
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
            <div className="tech-badge">SonarQube</div><div className="tech-badge">HashiCorp Vault</div><div className="tech-badge">Snyk</div><div className="tech-badge">Aqua Security</div><div className="tech-badge">GitLab CI</div><div className="tech-badge">Jenkins</div>
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
            <p className="text-secondary">Common questions about our DevSecOps engagements.</p>
          </div>
          <div className="faq-container">
            
            <div className="faq-item">
              <h4>Will adding security checks slow down our deployments?</h4>
              <p>No. By automating checks within the CI/CD pipeline, security happens in seconds, actually accelerating releases by avoiding late-stage manual audits.</p>
            </div>
            
            <div className="faq-item">
              <h4>What compliance standards do you cover?</h4>
              <p>We can automate compliance checks for SOC2, ISO 27001, GDPR, HIPAA, and PCI-DSS directly into your deployment pipelines.</p>
            </div>
            
            <div className="faq-item">
              <h4>How do you handle legacy codebases?</h4>
              <p>We introduce baseline scanning to identify critical vulnerabilities first, then progressively introduce stricter rules for new commits while paying down security debt over time.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="bg-gray-50 py-24 text-center border-t border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform with DevSecOps?</h2>
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
