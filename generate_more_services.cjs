const fs = require('fs');
const path = require('path');

const services = [
  {
    name: 'NetworkServices',
    title: 'Network Services',
    subtitle: 'Robust and scalable connectivity for the modern enterprise',
    desc: 'Ensure seamless communication and high-speed data transfer across your organization with our comprehensive network architecture and management services.',
    features: ['SD-WAN Implementation', 'Network Optimization', '24/7 Monitoring']
  },
  {
    name: 'CyberSecurity',
    title: 'Cyber Security',
    subtitle: 'Protect your enterprise from evolving digital threats',
    desc: 'Safeguard your most critical data and infrastructure with proactive threat hunting, compliance frameworks, and zero-trust security architectures.',
    features: ['Zero-Trust Architecture', 'Penetration Testing', 'Incident Response']
  },
  {
    name: 'DigitalEnterpriseApps',
    title: 'Digital Enterprise Applications',
    subtitle: 'Streamline operations with tailored software solutions',
    desc: 'Modernize your core business processes by implementing, customizing, and scaling world-class digital enterprise applications (ERP, CRM, and bespoke systems).',
    features: ['Custom App Development', 'Legacy Modernization', 'System Integration']
  },
  {
    name: 'DataAndAI',
    title: 'Data and AI',
    subtitle: 'Turn raw data into actionable intelligence',
    desc: 'Leverage the power of advanced analytics, machine learning, and artificial intelligence to unlock new revenue streams and optimize operational efficiency.',
    features: ['Predictive Analytics', 'Machine Learning Models', 'Data Warehousing']
  },
  {
    name: 'DigitalStrategy',
    title: 'Digital Strategy',
    subtitle: 'Blueprint your digital transformation journey',
    desc: 'Navigate the complexities of the digital age with expert consulting. We help you align your technology investments with your long-term business goals.',
    features: ['Technology Roadmapping', 'Digital Transformation', 'Change Management']
  },
  {
    name: 'EngineeringRD',
    title: 'Engineering Research & Development',
    subtitle: 'Innovate faster with dedicated R&D engineering',
    desc: 'Accelerate product innovation with our specialized engineering research and development services, designed to bring disruptive technologies to market.',
    features: ['Prototyping', 'Product Engineering', 'Innovation Labs']
  },
  {
    name: 'EnterprisePlatforms',
    title: 'Enterprise Platforms',
    subtitle: 'Foundation for enterprise-wide scalability',
    desc: 'Build and deploy comprehensive enterprise platforms that centralize your operations, enhance collaboration, and provide a single source of truth.',
    features: ['Platform Architecture', 'Scalability Planning', 'Cross-functional Integration']
  }
];

const template = (service) => `import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

export function ${service.name}() {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-product-color', 'var(--primary)');
  }, []);

  return (
    <div className="solution-page">
      {/* HERO SECTION */}
      <section className="solution-hero">
        <div className="container">
          <div className="badge">By Service</div>
          <h1>${service.title}</h1>
          <p>${service.subtitle}</p>
          <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            ${service.desc}
          </p>
          <Link to="/book-demo" className="btn-solid-white" style={{ background: 'var(--primary)', color: 'white' }}>Book a Consultation</Link>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="solution-overview">
        <div className="container">
          <h2>Elevate Your Technology Stack</h2>
          <p>Modern enterprises require robust, scalable, and secure technological foundations. Our ${service.title} offering is designed to meet these exact needs.</p>
          <p>We partner with you to deliver cutting-edge solutions that drive innovation, reduce operational overhead, and ensure your business is ready for the future.</p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="solution-features">
        <div className="container">
          <h2>Key Capabilities</h2>
          <div className="features-grid">
            
            <div className="solution-card">
              <div className="solution-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
              </div>
              <h3>${service.features[0]}</h3>
              <p>State-of-the-art implementations utilizing the best industry practices and standards.</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <h3>${service.features[1]}</h3>
              <p>Seamlessly integrated workflows that enhance productivity and reduce manual overhead.</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>
              </div>
              <h3>${service.features[2]}</h3>
              <p>Future-proof architecture designed to scale seamlessly alongside your business growth.</p>
            </div>

          </div>
        </div>
      </section>
      
      {/* CTA SECTION */}
      <section className="solution-cta">
        <div className="container">
          <h2>Ready to Transform with ${service.title}?</h2>
          <p>Get in touch with our experts to discuss how we can tailor our solutions to your specific needs.</p>
          <Link to="/company/contact" className="btn-solid-white text-primary mt-6">Contact Us Today</Link>
        </div>
      </section>
    </div>
  );
}
`;

const dir = path.join(__dirname, 'src', 'pages', 'solutions');
services.forEach(svc => {
  const file = path.join(dir, `${svc.name}.tsx`);
  fs.writeFileSync(file, template(svc));
  console.log(`Created ${file}`);
});
