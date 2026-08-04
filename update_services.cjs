const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'pages', 'solutions', 'ServiceTemplate.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const additionalCss = `

.solution-tech-stack {
  padding: 6rem 0;
  background-color: #f9fafb;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
}

.tech-badge {
  background: white;
  border: 1px solid #e5e7eb;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  color: var(--text-primary);
  box-shadow: 0 2px 10px rgba(0,0,0,0.02);
  transition: all 0.2s ease;
}

.tech-badge:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-2px);
}

.solution-faq {
  padding: 6rem 0;
  background: white;
}

.faq-container {
  max-width: 800px;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.faq-item {
  background: #f9fafb;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e5e7eb;
}

.faq-item h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.faq-item p {
  color: #6b7280;
  line-height: 1.6;
}
`;

if (!cssContent.includes('.solution-tech-stack')) {
  fs.writeFileSync(cssPath, cssContent + additionalCss);
  console.log("Appended styles to ServiceTemplate.css");
}

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
    ],
    tech: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Docker', 'Kubernetes'],
    faqs: [
      { q: 'How long does a typical cloud migration take?', a: 'Depending on the complexity and volume of the workloads, a standard migration can take anywhere from 3 to 6 months. We employ phased rollouts to ensure zero business disruption.' },
      { q: 'Do you support multi-cloud strategies?', a: 'Yes. We specialize in designing architectures that span across AWS, Azure, and GCP to ensure high availability and prevent vendor lock-in.' },
      { q: 'How do you ensure data security during the move?', a: 'We utilize end-to-end encryption, strict IAM roles, and isolated VPCs. Compliance checks are built directly into our migration pipelines.' }
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
    ],
    tech: ['SonarQube', 'HashiCorp Vault', 'Snyk', 'Aqua Security', 'GitLab CI', 'Jenkins'],
    faqs: [
      { q: 'Will adding security checks slow down our deployments?', a: 'No. By automating checks within the CI/CD pipeline, security happens in seconds, actually accelerating releases by avoiding late-stage manual audits.' },
      { q: 'What compliance standards do you cover?', a: 'We can automate compliance checks for SOC2, ISO 27001, GDPR, HIPAA, and PCI-DSS directly into your deployment pipelines.' },
      { q: 'How do you handle legacy codebases?', a: 'We introduce baseline scanning to identify critical vulnerabilities first, then progressively introduce stricter rules for new commits while paying down security debt over time.' }
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
    ],
    tech: ['Go', 'Node.js', 'Kubernetes', 'Istio', 'Kafka', 'GraphQL'],
    faqs: [
      { q: 'Should we refactor everything to microservices at once?', a: 'No, we recommend a "strangler pattern" approach. We extract features piece-by-piece from your monolith into independent services to minimize risk.' },
      { q: 'How do you manage complex data transactions?', a: 'We implement Saga patterns and event sourcing to manage distributed transactions reliably across independent microservices.' },
      { q: 'Is serverless better than containers?', a: 'It depends on your workload. Serverless is excellent for event-driven bursts, while containers (Kubernetes) offer more control for long-running processes. We often use a hybrid approach.' }
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
    ],
    tech: ['Backstage', 'Crossplane', 'ArgoCD', 'Terraform', 'Datadog', 'GitHub Actions'],
    faqs: [
      { q: 'What is an Internal Developer Platform (IDP)?', a: 'An IDP is a self-service layer that allows developers to spin up environments, deploy code, and monitor apps without needing to wait for an IT or DevOps ticket.' },
      { q: 'How does this differ from standard DevOps?', a: 'DevOps is the methodology; Platform Engineering is the productization of DevOps. We build an internal product that your developers consume to do their jobs faster.' },
      { q: 'What tools do you use for the developer portal?', a: 'We heavily leverage Spotify’s Backstage, integrated with custom plugins to tie together your specific CI/CD, cloud, and monitoring stacks.' }
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
    ],
    tech: ['Jira', 'Jenkins', 'GitLab', 'Prometheus', 'Grafana', 'Ansible'],
    faqs: [
      { q: 'How long does an Agile transformation take?', a: 'Cultural changes take time, but you will see measurable improvements in deployment frequency and code quality within the first 3 months.' },
      { q: 'What is the difference between Blue/Green and Canary?', a: 'Blue/Green switches traffic entirely to a new environment instantly. Canary slowly rolls out traffic to a subset of users to test for errors before a full release.' },
      { q: 'Do you provide Agile coaching?', a: 'Yes. We embed certified Scrum Masters and Agile Coaches into your teams to ensure rituals are productive and methodologies stick.' }
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
    ],
    tech: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Storybook', 'Webflow'],
    faqs: [
      { q: 'Do you hand off designs or code them as well?', a: 'We do both! We can deliver Figma files to your developers, or our frontend engineering team can build the pixel-perfect implementation for you.' },
      { q: 'What is a Design System?', a: 'A design system is a central library of all UI components (buttons, fonts, colors). It ensures your brand looks completely consistent across mobile, web, and internal tools.' },
      { q: 'How do you test designs before coding?', a: 'We build clickable, high-fidelity prototypes in Figma and run user testing sessions to gather feedback and refine flows before engineering starts.' }
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
    ],
    tech: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'SQLite'],
    faqs: [
      { q: 'Should we build Native or Cross-platform?', a: 'If you need intense hardware integrations or high-end graphics (like gaming), go Native. For 90% of business apps, React Native or Flutter provides identical performance for half the cost.' },
      { q: 'Can you rescue a failing mobile app project?', a: 'Yes. We frequently conduct code audits to identify memory leaks, architecture flaws, and performance bottlenecks to bring failing apps back to life.' },
      { q: 'Do you handle the App Store submissions?', a: 'Absolutely. We handle all certificates, provisioning profiles, and App Store review communications for you.' }
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
    ],
    tech: ['Cisco', 'Juniper', 'Palo Alto', 'Fortinet', 'VMware NSX', 'SolarWinds'],
    faqs: [
      { q: 'What is SD-WAN and why do we need it?', a: 'SD-WAN replaces expensive MPLS lines with software-defined routing over standard internet connections. It lowers costs while drastically improving speed and security.' },
      { q: 'How do you handle remote workers?', a: 'We implement Zero-Trust Network Access (ZTNA) solutions, which are far more secure and faster than traditional enterprise VPNs.' },
      { q: 'Can you integrate our on-premise servers with the cloud?', a: 'Yes. We design high-speed, encrypted IPsec tunnels and direct connections (like AWS Direct Connect) to bridge your physical and cloud networks.' }
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
    ],
    tech: ['CrowdStrike', 'Splunk', 'Tenable', 'Okta', 'Kali Linux', 'Burp Suite'],
    faqs: [
      { q: 'Do you offer 24/7 monitoring?', a: 'Yes. Our Security Operations Center (SOC) provides continuous, round-the-clock threat hunting and alert triage.' },
      { q: 'What happens if we get breached?', a: 'Our incident response team immediately steps in to contain the threat, eradicate the malware, and recover data, minimizing operational downtime.' },
      { q: 'How often should we perform penetration tests?', a: 'We recommend comprehensive manual penetration testing annually, combined with automated vulnerability scanning on a weekly or daily basis.' }
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
    ],
    tech: ['Salesforce', 'SAP', 'MuleSoft', 'Java Spring', '.NET Core', 'React'],
    faqs: [
      { q: 'Is it better to build custom or buy off-the-shelf?', a: 'If the software provides a strategic competitive advantage, build it. If it handles standard backend operations (like HR), buy and customize it. We help you make this decision.' },
      { q: 'How do you handle data migration from our old systems?', a: 'We build automated ETL pipelines that clean, map, and securely migrate historical data without disrupting your ongoing business operations.' },
      { q: 'Can you integrate our CRM with our custom manufacturing software?', a: 'Absolutely. We specialize in API middleware (like MuleSoft or custom Node layers) to sync real-time data across completely different platforms.' }
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
    ],
    tech: ['Python', 'Snowflake', 'TensorFlow', 'PyTorch', 'OpenAI', 'PowerBI'],
    faqs: [
      { q: 'How do we prepare our messy data for AI?', a: 'Our data engineers first build automated ETL pipelines to clean, normalize, and centralize your data into a modern data warehouse before any AI models are applied.' },
      { q: 'Can Generative AI actually improve our operations?', a: 'Yes. We are currently implementing custom-trained LLMs to automate level-1 customer support, draft technical reports, and summarize legal documents, saving thousands of hours.' },
      { q: 'Is our data secure when using AI models?', a: 'We only use enterprise-grade AI instances (like Azure OpenAI) where your data is ring-fenced and never used to train public models.' }
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
    ],
    tech: ['Miro', 'Notion', 'Lucidchart', 'Gartner Magic Quadrants', 'SWOT Analysis', 'Agile Frameworks'],
    faqs: [
      { q: 'How long does a strategy engagement take?', a: 'A typical initial digital maturity assessment and roadmapping engagement takes 4 to 8 weeks, delivering a clear 3-year execution plan.' },
      { q: 'Do you implement the strategy as well?', a: 'Yes. We are an end-to-end consultancy. The same team that designs the blueprint can bring in our engineering pods to build the actual software.' },
      { q: 'How do you measure the success of digital transformation?', a: 'We establish clear KPIs upfront—ranging from customer acquisition cost and employee retention to raw infrastructure cost savings.' }
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
    ],
    tech: ['C++', 'Rust', 'MATLAB', 'ROS (Robot Operating System)', 'Raspberry Pi', 'CAD Tools'],
    faqs: [
      { q: 'Who owns the intellectual property (IP)?', a: 'You do. All code, algorithms, and patents developed during our R&D engagements belong 100% to your organization.' },
      { q: 'Can you help with hardware engineering?', a: 'Yes. We specialize in IoT integrations and edge computing, writing the low-level embedded software that interfaces perfectly with hardware sensors.' },
      { q: 'How do you validate a Proof of Concept?', a: 'We build the absolute minimum software required to test the core risk factor, running it against live data or user groups within weeks, not months.' }
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
    ],
    tech: ['Spring Boot', 'GraphQL', 'Apigee', 'Keycloak', 'PostgreSQL', 'Redis'],
    faqs: [
      { q: 'What is a multi-tenant architecture?', a: 'It allows a single instance of software to serve multiple distinct customer groups (tenants) securely. This is the foundational architecture of modern SaaS applications.' },
      { q: 'How do you handle authorization across a massive platform?', a: 'We implement centralized Identity Providers (IdP) like Keycloak or Auth0, utilizing OIDC and OAuth2 for secure, token-based Single Sign-On.' },
      { q: 'Can this replace our existing software?', a: 'Eventually. We use an API-first design. We build the platform and slowly route traffic away from your old systems, seamlessly decommissioning them over time.' }
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
        <div className="container relative z-10">
          <div className="badge mb-6 inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
            Premium Service
          </div>
          <h1 className="text-white drop-shadow-lg">${service.title}</h1>
          <p className="subtitle text-primary drop-shadow-md">${service.subtitle}</p>
          <p className="text-gray-200 text-xl leading-relaxed mt-4 drop-shadow-sm" style={{ maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            ${service.desc}
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-secondary max-w-2xl mx-auto text-lg">Comprehensive, end-to-end expertise delivering exceptional results.</p>
          </div>
          <div className="rich-features-grid">
            ${service.features.map(f => `
            <div className="rich-feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3>${f.title}</h3>
              <p className="text-secondary leading-relaxed">${f.desc}</p>
            </div>
            `).join('')}
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGIES WE USE */}
      <section className="solution-tech-stack">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Technologies & Frameworks</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">We build with the best enterprise-grade tools available.</p>
          <div className="tech-grid">
            ${service.tech.map(t => `<div className="tech-badge">${t}</div>`).join('')}
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
            <p className="text-secondary">Common questions about our ${service.title} engagements.</p>
          </div>
          <div className="faq-container">
            ${service.faqs.map(faq => `
            <div className="faq-item">
              <h4>${faq.q}</h4>
              <p>${faq.a}</p>
            </div>
            `).join('')}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="bg-gray-50 py-24 text-center border-t border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform with ${service.title}?</h2>
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
`;

const dir = path.join(__dirname, 'src', 'pages', 'solutions');
services.forEach(svc => {
  const file = path.join(dir, `${svc.name}.tsx`);
  fs.writeFileSync(file, template(svc));
  console.log(`Successfully rewrote ${file}`);
});
