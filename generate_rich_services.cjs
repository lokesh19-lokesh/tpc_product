const fs = require('fs');
const path = require('path');

const services = [
  {
    name: 'CloudServices',
    title: 'Cloud Services',
    subtitle: 'Scalable, secure, and resilient cloud infrastructure',
    desc: 'Migrate, manage, and optimize your business on the cloud. The Patterns Company Cloud Services provide end-to-end cloud solutions tailored to your unique enterprise needs, ensuring high availability and cost efficiency.',
    challenge: 'Enterprises often struggle with legacy infrastructure that is rigid, costly to maintain, and prone to downtime. Scaling resources to meet sudden market demands is painfully slow, leading to missed opportunities and degraded customer experiences.',
    solution: 'We architect and migrate your workloads to agile, scalable cloud environments. By leveraging dynamic resource allocation and highly available architectures, we transform your infrastructure from a cost center into a strategic advantage.',
    features: [
      { title: 'Cloud Migration Strategy', desc: 'Comprehensive assessment and phased migration plans minimizing downtime.' },
      { title: 'Infrastructure as Code', desc: 'Automate provisioning using Terraform and AWS CloudFormation for absolute consistency.' },
      { title: 'Cloud Security Posture', desc: 'Continuous compliance and advanced identity management (IAM) implementation.' },
      { title: 'Cost Optimization', desc: 'FinOps practices to identify waste, right-size instances, and optimize spending.' },
      { title: 'Multi-Cloud Deployments', desc: 'Avoid vendor lock-in by designing resilient multi-cloud or hybrid architectures.' },
      { title: 'Serverless Compute', desc: 'Build event-driven applications that scale automatically without managing servers.' }
    ]
  },
  {
    name: 'DevSecOps',
    title: 'DevSecOps',
    subtitle: 'Security integrated at the speed of DevOps',
    desc: 'Bake security into every phase of your software development lifecycle. Our DevSecOps services automate security checks without slowing down your deployment pipelines.',
    challenge: 'Security is typically treated as an afterthought—a final checkpoint that creates massive bottlenecks right before release. When vulnerabilities are found late, remediation is expensive and delays time-to-market.',
    solution: 'We integrate security directly into your CI/CD pipelines (Shift-Left). Automated vulnerability scanning, static code analysis, and compliance checks occur seamlessly, ensuring code is secure from commit to production.',
    features: [
      { title: 'Shift-Left Security', desc: 'Embed security scanning directly in developer IDEs and pre-commit hooks.' },
      { title: 'Automated CI/CD Checks', desc: 'SAST, DAST, and SCA tools integrated natively into your build pipelines.' },
      { title: 'Container Security', desc: 'Scan Docker images for known vulnerabilities before they are deployed to orchestration.' },
      { title: 'Continuous Compliance', desc: 'Automate auditing for SOC2, HIPAA, and GDPR compliance standards.' },
      { title: 'Secrets Management', desc: 'Centralized, encrypted management of API keys, tokens, and passwords using Vault.' },
      { title: 'Threat Modeling', desc: 'Proactively identify and mitigate structural vulnerabilities during the design phase.' }
    ]
  },
  {
    name: 'CloudNative',
    title: 'Cloud Native Development',
    subtitle: 'Build modern applications from the ground up',
    desc: 'Leverage microservices, containers, and serverless architectures to build scalable, resilient, and highly available applications native to the cloud environment.',
    challenge: 'Monolithic applications become too complex to update rapidly. A single bug can bring down the entire system, and deploying new features requires coordinating massive release schedules.',
    solution: 'We decouple your applications into independent microservices. This allows your teams to develop, test, and deploy features autonomously, drastically accelerating innovation while isolating failures.',
    features: [
      { title: 'Microservices Architecture', desc: 'Decoupled services for independent scaling and accelerated development cycles.' },
      { title: 'Kubernetes Orchestration', desc: 'Manage containerized applications with self-healing and automated rollouts.' },
      { title: 'API Gateways', desc: 'Secure, throttle, and route traffic efficiently across your distributed services.' },
      { title: 'Event-Driven Systems', desc: 'Asynchronous communication using Kafka or RabbitMQ for high-throughput scaling.' },
      { title: 'Serverless Functions', desc: 'Execute code in response to triggers without provisioning or managing infrastructure.' },
      { title: 'Service Mesh', desc: 'Advanced traffic management, mutual TLS, and observability across microservices.' }
    ]
  },
  {
    name: 'PlatformEngineering',
    title: 'Platform Engineering',
    subtitle: 'Design-led internal developer platforms',
    desc: 'Empower your development teams with robust, self-service internal developer platforms. We design platform engineering solutions that reduce cognitive load and speed up time-to-market.',
    challenge: 'Developers spend too much time configuring environments, requesting infrastructure, and fighting deployment scripts, pulling them away from writing actual business logic.',
    solution: 'We build Internal Developer Platforms (IDPs) that provide paved roads. Developers get self-service portals to spin up environments and deploy code instantly, abstracting away underlying complexity.',
    features: [
      { title: 'Internal Developer Portals', desc: 'A unified UI for developers to request resources, view docs, and monitor services.' },
      { title: 'Self-Service Infrastructure', desc: 'Golden paths allowing teams to provision compliant infrastructure in minutes.' },
      { title: 'Toolchain Integration', desc: 'Seamlessly connect Jira, GitHub, Jenkins, and Datadog into one workflow.' },
      { title: 'Cognitive Load Reduction', desc: 'Abstract Kubernetes and AWS complexities away from product engineers.' },
      { title: 'Standardized Templates', desc: 'Pre-configured boilerplate repositories with baked-in security and CI/CD.' },
      { title: 'Developer Experience (DevEx)', desc: 'Continuous feedback loops to measure and improve developer satisfaction.' }
    ]
  },
  {
    name: 'AgileDevOps',
    title: 'Agile Development & DevOps',
    subtitle: 'Accelerate your software delivery',
    desc: 'Unite your development and operations teams with Agile methodologies and DevOps practices. We help you build a culture of continuous integration and continuous delivery (CI/CD).',
    challenge: 'Silos between development and operations lead to "it works on my machine" syndrome. Manual deployments are error-prone, causing late-night outages and frustrated customers.',
    solution: 'We bridge the gap by establishing a DevOps culture backed by rigorous Agile frameworks. We automate testing, integration, and deployment to ensure highly reliable, frequent releases.',
    features: [
      { title: 'CI/CD Pipelines', desc: 'Automate build, test, and deployment phases for rapid and reliable releases.' },
      { title: 'Agile Transformation', desc: 'Implement Scrum or Kanban methodologies to improve team predictability.' },
      { title: 'Automated Testing', desc: 'Unit, integration, and end-to-end testing integrated directly into the pipeline.' },
      { title: 'Release Management', desc: 'Blue/Green and Canary deployments to eliminate deployment downtime.' },
      { title: 'Infrastructure Monitoring', desc: 'Proactive alerts and logging to detect anomalies before users report them.' },
      { title: 'Site Reliability Engineering', desc: 'Establish Service Level Objectives (SLOs) and error budgets to balance speed and stability.' }
    ]
  },
  {
    name: 'UiUxDesign',
    title: 'UI/UX Design',
    subtitle: 'Crafting digital experiences that captivate',
    desc: 'Transform your product with human-centered design. Our UI/UX experts create intuitive, accessible, and stunning interfaces that drive user engagement and satisfaction.',
    challenge: 'Feature-rich software often fails because it is confusing and difficult to use. Poor user experience leads to high churn rates, increased support tickets, and brand erosion.',
    solution: 'We employ deep user research and iterative prototyping to design interfaces that users naturally understand. We balance stunning aesthetics with frictionless usability to maximize conversion and retention.',
    features: [
      { title: 'User Research & Personas', desc: 'Data-driven insights into your users needs, behaviors, and pain points.' },
      { title: 'Wireframing & Prototyping', desc: 'Rapid iteration of layouts and user flows before writing a single line of code.' },
      { title: 'High-Fidelity UI Design', desc: 'Pixel-perfect, modern interfaces aligned with your brand identity.' },
      { title: 'Design Systems', desc: 'Reusable component libraries ensuring visual consistency across all your platforms.' },
      { title: 'Usability Testing', desc: 'Validating design decisions with real users to identify friction points.' },
      { title: 'Accessibility (a11y)', desc: 'Ensuring your application is usable by everyone, compliant with WCAG standards.' }
    ]
  },
  {
    name: 'MobileAppDev',
    title: 'Mobile App Development',
    subtitle: 'Native and cross-platform mobile experiences',
    desc: 'Build high-performance, engaging mobile applications for iOS and Android. From consumer apps to enterprise mobility solutions, we deliver excellence in your pocket.',
    challenge: 'Building separate codebases for iOS and Android doubles development costs and complicates feature parity. Meanwhile, poorly optimized apps drain battery and suffer from lag.',
    solution: 'We build high-performance mobile solutions using the right technology for your needs—whether that is pure Native for maximum performance or frameworks like React Native for unified codebases.',
    features: [
      { title: 'iOS Native Development', desc: 'High-performance Swift applications deeply integrated with the Apple ecosystem.' },
      { title: 'Android Native Development', desc: 'Robust Kotlin applications optimized across thousands of Android devices.' },
      { title: 'Cross-Platform Frameworks', desc: 'React Native and Flutter solutions to cut development time in half.' },
      { title: 'Mobile UI/UX', desc: 'Touch-optimized interfaces designed specifically for mobile ergonomics.' },
      { title: 'Offline Synchronization', desc: 'Robust local databases allowing the app to function without internet connectivity.' },
      { title: 'App Store Optimization', desc: 'Guidance through the rigorous Apple and Google review and release processes.' }
    ]
  },
  {
    name: 'NetworkServices',
    title: 'Network Services',
    subtitle: 'Robust and scalable connectivity for the modern enterprise',
    desc: 'Ensure seamless communication and high-speed data transfer across your organization with our comprehensive network architecture and management services.',
    challenge: 'Traditional networks struggle to support the bandwidth and security demands of a modern, distributed workforce. Frequent bottlenecks and blind spots compromise productivity and expose the enterprise to threats.',
    solution: 'We design and deploy intelligent, software-defined networks that dynamically route traffic for optimal performance. Our solutions guarantee high availability, secure remote access, and absolute visibility.',
    features: [
      { title: 'SD-WAN Implementation', desc: 'Software-defined routing for secure, cost-effective, and high-performance branch connectivity.' },
      { title: 'Network Virtualization', desc: 'Decouple network resources from hardware to improve flexibility and scalability.' },
      { title: 'Zero-Trust Network Access', desc: 'Strict identity verification for every user and device attempting to connect.' },
      { title: '24/7 Network Monitoring', desc: 'Proactive NOC services to detect anomalies and resolve issues before they impact users.' },
      { title: 'Cloud Networking', desc: 'Securely connect on-premise infrastructure to AWS, Azure, and Google Cloud environments.' },
      { title: 'Disaster Recovery Routing', desc: 'Automated failover mechanisms ensuring network availability during critical outages.' }
    ]
  },
  {
    name: 'CyberSecurity',
    title: 'Cyber Security',
    subtitle: 'Protect your enterprise from evolving digital threats',
    desc: 'Safeguard your most critical data and infrastructure with proactive threat hunting, compliance frameworks, and zero-trust security architectures.',
    challenge: 'Cyber threats are becoming increasingly sophisticated. A single breach can result in millions of dollars in damages, intellectual property theft, and irreversible brand destruction.',
    solution: 'We implement multi-layered defense mechanisms ranging from endpoint protection to advanced threat intelligence. We assume breach and design zero-trust environments that limit blast radiuses and stop lateral movement.',
    features: [
      { title: 'Penetration Testing', desc: 'Ethical hacking to identify and patch vulnerabilities before malicious actors exploit them.' },
      { title: 'Security Information and Event Management (SIEM)', desc: 'Centralized logging and real-time analysis of security alerts.' },
      { title: 'Endpoint Detection & Response (EDR)', desc: 'Advanced monitoring to detect ransomware and malware at the device level.' },
      { title: 'Data Loss Prevention (DLP)', desc: 'Policies and tools to prevent sensitive data from leaving your corporate network.' },
      { title: 'Incident Response', desc: 'On-call forensic experts ready to contain and eradicate active security breaches.' },
      { title: 'Security Awareness Training', desc: 'Educating your workforce to recognize and report phishing and social engineering attacks.' }
    ]
  },
  {
    name: 'DigitalEnterpriseApps',
    title: 'Digital Enterprise Applications',
    subtitle: 'Streamline operations with tailored software solutions',
    desc: 'Modernize your core business processes by implementing, customizing, and scaling world-class digital enterprise applications (ERP, CRM, and bespoke systems).',
    challenge: 'Off-the-shelf software often forces businesses to change their unique processes to fit the tool. This results in fragmented workflows, isolated data silos, and reduced employee productivity.',
    solution: 'We build, customize, and integrate enterprise applications that adapt exactly to how your business operates. We connect disparate systems into a unified ecosystem that serves as a single source of truth.',
    features: [
      { title: 'Custom ERP Development', desc: 'Bespoke resource planning systems tailored precisely to your operational workflows.' },
      { title: 'CRM Customization', desc: 'Deep integrations and workflow automations for Salesforce, Dynamics, and HubSpot.' },
      { title: 'Legacy Modernization', desc: 'Safely refactoring outdated mainframes and legacy systems into modern web architectures.' },
      { title: 'System Integration', desc: 'Connecting distinct enterprise applications via robust REST and GraphQL APIs.' },
      { title: 'Workflow Automation', desc: 'Digitizing paper-based and manual approval processes to save thousands of hours.' },
      { title: 'Enterprise Mobility', desc: 'Extending your core enterprise applications securely to mobile devices for field workers.' }
    ]
  },
  {
    name: 'DataAndAI',
    title: 'Data and AI',
    subtitle: 'Turn raw data into actionable intelligence',
    desc: 'Leverage the power of advanced analytics, machine learning, and artificial intelligence to unlock new revenue streams and optimize operational efficiency.',
    challenge: 'Enterprises are drowning in data but starving for insights. Data is scattered across multiple databases, inconsistent, and ultimately useless for driving strategic business decisions.',
    solution: 'We build robust data pipelines that clean, transform, and centralize your data. We then apply advanced machine learning models and AI to extract predictive insights that give you a competitive edge.',
    features: [
      { title: 'Data Warehousing & Lakes', desc: 'Centralizing structured and unstructured data using Snowflake, BigQuery, or Databricks.' },
      { title: 'ETL/ELT Pipelines', desc: 'Automated data extraction, transformation, and loading for real-time analytics.' },
      { title: 'Predictive Analytics', desc: 'Statistical models that forecast market trends, inventory needs, and customer behavior.' },
      { title: 'Generative AI Integration', desc: 'Implementing LLMs to automate customer support, content generation, and code writing.' },
      { title: 'Computer Vision', desc: 'Image and video analysis for manufacturing defect detection and security monitoring.' },
      { title: 'Business Intelligence Dashboards', desc: 'Interactive visualizations via Tableau and PowerBI for executive decision making.' }
    ]
  },
  {
    name: 'DigitalStrategy',
    title: 'Digital Strategy',
    subtitle: 'Blueprint your digital transformation journey',
    desc: 'Navigate the complexities of the digital age with expert consulting. We help you align your technology investments with your long-term business goals.',
    challenge: 'Many companies invest heavily in new technologies without a cohesive plan, resulting in "digital islands" that fail to integrate or deliver measurable return on investment.',
    solution: 'We act as your strategic partner. We analyze your current market position, identify digital gaps, and build a comprehensive roadmap that ensures technology drives real business value rather than just overhead.',
    features: [
      { title: 'Technology Roadmapping', desc: 'Multi-year strategic plans prioritizing technology investments based on ROI.' },
      { title: 'Digital Maturity Assessment', desc: 'Benchmarking your current capabilities against industry leaders and competitors.' },
      { title: 'Change Management', desc: 'Strategies to ensure high employee adoption rates for new digital tools and processes.' },
      { title: 'Operating Model Design', desc: 'Restructuring teams and governance models to support agile, digital-first operations.' },
      { title: 'Vendor Selection', desc: 'Unbiased analysis and procurement strategy for enterprise software and hardware.' },
      { title: 'Innovation Workshops', desc: 'Facilitated design thinking sessions to uncover new digital business models.' }
    ]
  },
  {
    name: 'EngineeringRD',
    title: 'Engineering Research & Development',
    subtitle: 'Innovate faster with dedicated R&D engineering',
    desc: 'Accelerate product innovation with our specialized engineering research and development services, designed to bring disruptive technologies to market.',
    challenge: 'In-house teams are often consumed by maintaining existing products, leaving no bandwidth to research and develop the next generation of disruptive technologies.',
    solution: 'Our dedicated R&D engineers serve as an extension of your team. We explore bleeding-edge technologies, build rapid prototypes, and validate proofs-of-concept to accelerate your innovation pipeline.',
    features: [
      { title: 'Proof of Concept (PoC)', desc: 'Rapidly testing technical feasibility for bold new product ideas.' },
      { title: 'Hardware/Software Co-design', desc: 'Integrated engineering for IoT devices, embedded systems, and edge computing.' },
      { title: 'Prototyping & MVPs', desc: 'Building functional minimum viable products to secure funding or market validation.' },
      { title: 'Patent Engineering', desc: 'Technical documentation and novel algorithm design to support IP generation.' },
      { title: 'Advanced Robotics', desc: 'R&D for automation, computer vision navigation, and robotic process control.' },
      { title: 'Technology Scouting', desc: 'Identifying and evaluating emerging academic and startup technologies for integration.' }
    ]
  },
  {
    name: 'EnterprisePlatforms',
    title: 'Enterprise Platforms',
    subtitle: 'Foundation for enterprise-wide scalability',
    desc: 'Build and deploy comprehensive enterprise platforms that centralize your operations, enhance collaboration, and provide a single source of truth.',
    challenge: 'Fragmented departmental systems create conflicting data, duplicate work, and severe communication breakdowns between business units.',
    solution: 'We design unified enterprise platforms that connect all business functions. By standardizing APIs and data structures, we create a highly collaborative environment where information flows seamlessly.',
    features: [
      { title: 'Platform Architecture', desc: 'Designing modular, multi-tenant architectures capable of supporting global operations.' },
      { title: 'API Management', desc: 'Creating centralized API gateways to standardize how internal systems communicate.' },
      { title: 'Identity & Access Management (IAM)', desc: 'Single Sign-On (SSO) and role-based access control across the entire platform.' },
      { title: 'Master Data Management', desc: 'Ensuring absolute consistency of critical data entities across all business units.' },
      { title: 'E-Commerce Platforms', desc: 'B2B and B2C scalable commerce engines capable of handling massive transaction volumes.' },
      { title: 'SaaS Enablement', desc: 'Transitioning your on-premise software into highly scalable Software-as-a-Service platforms.' }
    ]
  }
];

const template = (service) => `import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ServiceTemplate.css';

export function ${service.name}() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.setProperty('--active-product-color', 'var(--primary)');
  }, []);

  return (
    <div className="solution-page">
      {/* 1. HERO SECTION */}
      <section className="solution-hero">
        <div className="container">
          <div className="badge mb-4 inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Premium Service
          </div>
          <h1>${service.title}</h1>
          <p className="subtitle">${service.subtitle}</p>
          <p className="text-gray-300 text-lg leading-relaxed" style={{ maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            ${service.desc}
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/book-demo" className="btn-solid-white" style={{ background: 'var(--primary)', color: 'white', padding: '1rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>
              Book a Consultation
            </Link>
            <Link to="/company/contact" className="btn-outline" style={{ border: '2px solid rgba(255,255,255,0.2)', color: 'white', padding: '1rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>
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
                ${service.challenge}
              </p>
            </div>
            <div className="solution-box">
              <h3>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Our Solution
              </h3>
              <p className="text-secondary leading-relaxed text-lg">
                ${service.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES (6 Grid) */}
      <section className="solution-features-rich">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-secondary max-w-2xl mx-auto">Comprehensive, end-to-end expertise delivering exceptional results.</p>
          </div>
          <div className="rich-features-grid">
            {/* Feature 1 */}
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>${service.features[0].title}</h3>
              <p className="text-secondary leading-relaxed">${service.features[0].desc}</p>
            </div>
            {/* Feature 2 */}
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
              </div>
              <h3>${service.features[1].title}</h3>
              <p className="text-secondary leading-relaxed">${service.features[1].desc}</p>
            </div>
            {/* Feature 3 */}
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3>${service.features[2].title}</h3>
              <p className="text-secondary leading-relaxed">${service.features[2].desc}</p>
            </div>
            {/* Feature 4 */}
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/></svg>
              </div>
              <h3>${service.features[3].title}</h3>
              <p className="text-secondary leading-relaxed">${service.features[3].desc}</p>
            </div>
            {/* Feature 5 */}
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </div>
              <h3>${service.features[4].title}</h3>
              <p className="text-secondary leading-relaxed">${service.features[4].desc}</p>
            </div>
            {/* Feature 6 */}
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              </div>
              <h3>${service.features[5].title}</h3>
              <p className="text-secondary leading-relaxed">${service.features[5].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS */}
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

      {/* 5. BUSINESS OUTCOMES */}
      <section className="solution-outcomes">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Tangible Business Outcomes</h2>
            <p className="text-secondary max-w-2xl mx-auto">We don't just deliver technology; we deliver measurable impact.</p>
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

      {/* 6. CTA SECTION */}
      <section className="bg-gray-50 py-20 text-center border-t border-gray-200">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform with ${service.title}?</h2>
          <p className="text-secondary max-w-2xl mx-auto mb-10 text-lg">
            Get in touch with our expert architects to discuss how we can tailor our solutions to your specific enterprise needs.
          </p>
          <Link to="/book-demo" className="inline-block bg-primary text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-colors">
            Start Your Transformation
          </Link>
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
  console.log(`Successfully rewrote ${file}`);
});
