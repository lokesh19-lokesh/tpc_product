const fs = require('fs');
const path = require('path');

const cssContent = `
.solution-page {
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-color);
}

.solution-hero {
  position: relative;
  padding: 8rem 0 6rem;
  background-color: #f8fafc;
  overflow: hidden;
  text-align: center;
}

.solution-hero .badge {
  display: inline-flex;
  align-items: center;
  background-color: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
}

.solution-hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.solution-hero p {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

/* OVERVIEW SECTION */
.solution-overview {
  padding: 6rem 0;
  background-color: white;
  text-align: center;
  border-bottom: 1px solid var(--border-color);
}
.solution-overview h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
}
.solution-overview p {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 1.5rem;
  line-height: 1.8;
}

/* FEATURES SECTION */
.solution-features {
  padding: 6rem 0;
  background-color: #f8fafc;
}

.solution-features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
}

.solution-features .container {
  display: flex;
  flex-direction: column;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.solution-card {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.solution-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.solution-icon {
  width: 56px;
  height: 56px;
  background: #f1f5f9;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--primary);
}

.solution-icon svg {
  width: 28px;
  height: 28px;
}

.solution-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.solution-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* USE CASES SECTION */
.solution-use-cases {
  padding: 6rem 0;
  background-color: white;
}
.solution-use-cases h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
}
.use-case-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}
.use-case-item {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  background: #f8fafc;
  border-radius: 16px;
  border: 1px solid var(--border-color);
}
@media (min-width: 768px) {
  .use-case-item {
    flex-direction: row;
    align-items: center;
  }
}
.use-case-icon {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}
.use-case-icon svg {
  width: 40px;
  height: 40px;
}
.use-case-content h4 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}
.use-case-content p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* CTA SECTION */
.solution-cta {
  padding: 6rem 0;
  background-color: var(--primary);
  color: white;
  text-align: center;
}
.solution-cta h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: white;
}
.solution-cta p {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.btn-solid-white {
  background: white;
  color: var(--primary);
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 1.125rem;
  text-decoration: none;
  display: inline-block;
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-solid-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.2);
}

@media (max-width: 768px) {
  .solution-hero { padding: 6rem 0 4rem; }
  .solution-hero h1 { font-size: 2.5rem; }
  .solution-hero p { font-size: 1.125rem; padding: 0 1rem; }
  .solution-features, .solution-overview, .solution-use-cases, .solution-cta { padding: 4rem 0; }
  .solution-card { padding: 1.5rem; }
}
`;

const solutions = [
  {
    file: 'Operations.tsx', name: 'Operations', title: 'Operations', category: 'By Team',
    tagline: 'Plan, monitor and automate',
    desc: 'Streamline your daily workflows, allocate resources effectively, and gain real-time visibility into your entire operation. Automate the mundane so your team can focus on what matters.',
    overview_h2: 'Transform Your Day-to-Day Operations',
    overview_p1: 'Modern operations teams face complex challenges: isolated data silos, manual repetitive tasks, and lack of real-time visibility. The Patterns Company Operations Solution connects the dots across your entire enterprise.',
    overview_p2: 'By integrating advanced workflow automation with real-time analytics, we help you eliminate bottlenecks, reduce operational costs, and build a resilient, scalable foundation for future growth.',
    f1: 'Real-time Tracking', d1: 'Monitor processes across the organization with millisecond precision and live dashboards.',
    f2: 'Process Automation', d2: 'Replace manual data entry and repetitive tasks with intelligent, event-driven workflows.',
    f3: 'Resource Allocation', d3: 'Optimize your workforce and assets using AI-powered capacity planning and scheduling.',
    u1_title: 'Supply Chain Optimization', u1_desc: 'Automatically route inventory and schedule logistics based on real-time traffic, weather, and supplier data to ensure zero downtime in production.',
    u2_title: 'Workforce Management', u2_desc: 'Dynamically assign tasks to field agents based on location, skill set, and current workload, improving resolution times by up to 40%.',
    cta_title: 'Ready to streamline your operations?'
  },
  {
    file: 'SalesCRM.tsx', name: 'SalesCRM', title: 'Sales & CRM', category: 'By Team',
    tagline: 'Pipeline on every channel',
    desc: 'Unify your customer touchpoints into a single, intelligent view. Accurately forecast revenue, score leads automatically, and close deals faster with our omnichannel CRM.',
    overview_h2: 'Supercharge Your Revenue Engine',
    overview_p1: 'In today’s fast-paced market, sales teams need more than just a rolodex. They need intelligent insights that guide them on exactly who to call, when to call, and what to say.',
    overview_p2: 'Our advanced CRM solution leverages predictive analytics to score leads and map out the buyer journey, ensuring your sales reps spend their time closing deals rather than doing administrative work.',
    f1: 'Omnichannel Tracking', d1: 'Capture every interaction across email, social, phone, and in-person meetings automatically.',
    f2: 'Predictive Lead Scoring', d2: 'Identify the prospects most likely to convert using our proprietary machine learning models.',
    f3: 'Sales Forecasting', d3: 'Generate highly accurate revenue forecasts based on historical data and pipeline velocity.',
    u1_title: 'Automated Outreach', u1_desc: 'Trigger personalized email sequences and follow-up tasks automatically based on prospect behavior and engagement scores.',
    u2_title: 'Territory Management', u2_desc: 'Visualize your total addressable market and easily reassign accounts to balance workloads and maximize rep quota attainment.',
    cta_title: 'Close more deals, faster.'
  },
  {
    file: 'Finance.tsx', name: 'Finance', title: 'Finance', category: 'By Team',
    tagline: 'Forecasting and controls',
    desc: 'Bring precision and compliance to your financial operations. Automate auditing, enforce budget controls seamlessly, and predict cash flow with unparalleled accuracy.',
    overview_h2: 'Bring Clarity to Your Financial Data',
    overview_p1: 'Finance leaders are increasingly expected to be strategic partners to the business. To do that, they need flawless data, automated controls, and the ability to look forward, not just backward.',
    overview_p2: 'Our Finance Solution eliminates the friction of month-end closes, automates expense auditing, and provides dynamic forecasting models that adapt as market conditions change.',
    f1: 'Automated Auditing', d1: 'Continuously scan transactions for anomalies, policy violations, and potential fraud.',
    f2: 'Budget Controls', d2: 'Enforce spending limits proactively with smart approval routing and real-time alerts.',
    f3: 'Revenue Prediction', d3: 'Project future cash flows and financial health using advanced econometric modeling.',
    u1_title: 'Expense Management', u1_desc: 'Automatically categorize and approve employee expenses using OCR and AI-driven policy checks, saving hours of manual review.',
    u2_title: 'Scenario Planning', u2_desc: 'Create multiple financial models to instantly see how changes in headcount, pricing, or market conditions will impact your bottom line.',
    cta_title: 'Take control of your finances.'
  },
  {
    file: 'PredictiveMaintenance.tsx', name: 'PredictiveMaintenance', title: 'Predictive Maintenance', category: 'By Need',
    tagline: 'Stop failures early',
    desc: 'Transform your maintenance strategy from reactive to proactive. Leverage IoT data and machine learning to predict equipment failures before they happen and minimize downtime.',
    overview_h2: 'Zero Unplanned Downtime',
    overview_p1: 'For asset-heavy industries, unexpected equipment failure doesn’t just cause headaches—it causes millions of dollars in lost productivity and compromised safety.',
    overview_p2: 'By deploying continuous monitoring via IoT sensors and applying advanced anomaly detection, our platform alerts your maintenance teams to microscopic deviations in vibration, temperature, and performance weeks before a breakdown occurs.',
    f1: 'IoT Integrations', d1: 'Connect seamlessly with thousands of industrial sensors and edge devices out of the box.',
    f2: 'Machine Learning Alerts', d2: 'Detect subtle patterns indicative of impending failures using deep neural networks.',
    f3: 'Downtime Prevention', d3: 'Automatically schedule maintenance windows and order parts before critical breakdowns occur.',
    u1_title: 'Fleet Management', u1_desc: 'Monitor engine telemetry across hundreds of vehicles to schedule services only when actually needed, reducing maintenance costs by 25%.',
    u2_title: 'Manufacturing Lines', u2_desc: 'Keep assembly lines moving by detecting bearing wear in heavy machinery, allowing for targeted repairs during scheduled off-hours.',
    cta_title: 'Prevent failures before they happen.'
  },
  {
    file: 'CustomerIntelligence.tsx', name: 'CustomerIntelligence', title: 'Customer Intelligence', category: 'By Need',
    tagline: 'Understand every account',
    desc: 'Turn customer data into actionable insights. Anticipate churn, understand sentiment, and deliver hyper-personalized experiences across the entire customer lifecycle.',
    overview_h2: 'Know Your Customer Better Than They Know Themselves',
    overview_p1: 'Modern consumers expect brands to anticipate their needs. But when customer data is scattered across CRM, support tickets, and marketing tools, delivering a personalized experience is impossible.',
    overview_p2: 'Our Customer Intelligence solution stitches together a truly unified profile. By applying Natural Language Processing to support chats and predictive models to product usage, we give you a crystal clear picture of customer health.',
    f1: '360-Degree View', d1: 'Aggregate data from marketing, sales, and support into a single unified customer profile.',
    f2: 'Churn Prediction', d2: 'Identify at-risk accounts early with AI models that analyze usage drops and support tickets.',
    f3: 'Sentiment Analysis', d3: 'Gauge customer satisfaction in real-time by analyzing communications using NLP.',
    u1_title: 'Proactive Retention', u1_desc: 'Automatically flag accounts that haven’t logged in recently or have unresolved bugs, assigning a Customer Success Manager immediately.',
    u2_title: 'Cross-sell Opportunities', u2_desc: 'Analyze usage patterns to identify customers who have outgrown their current tier and are prime candidates for an upgrade.',
    cta_title: 'Unlock your customer data.'
  },
  {
    file: 'Compliance.tsx', name: 'Compliance', title: 'Compliance', category: 'By Need',
    tagline: 'Auditable by design',
    desc: 'Navigate complex regulatory landscapes with ease. Automate compliance reporting, enforce data governance policies, and ensure every action is securely logged.',
    overview_h2: 'Compliance Without the Complexity',
    overview_p1: 'Keeping up with ever-changing global regulations like GDPR, CCPA, and SOC2 can drain engineering and legal resources. Non-compliance isn’t an option, but manual audits aren’t scalable.',
    overview_p2: 'Our Compliance platform bakes security and governance into the fabric of your operations. From automated data anonymization to one-click audit reports, we make compliance a seamless part of your daily workflow.',
    f1: 'Automated Reporting', d1: 'Generate audit-ready reports for SOC2, GDPR, HIPAA, and other frameworks instantly.',
    f2: 'Policy Enforcement', d2: 'Implement rules that automatically block non-compliant actions across the platform.',
    f3: 'Data Governance', d3: 'Maintain strict control over data lineage, access rights, and retention policies.',
    u1_title: 'Vendor Risk Management', u1_desc: 'Automatically assess and monitor the security posture of third-party vendors and contractors connecting to your network.',
    u2_title: 'Data Subject Requests (DSR)', u2_desc: 'Fulfill "Right to be Forgotten" and data export requests instantly with automated workflows that scan all databases.',
    cta_title: 'Simplify your compliance journey.'
  }
];

const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>`;
const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;

solutions.forEach(sol => {
  const content = `import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

export function ${sol.name}() {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-product-color', 'var(--primary)');
  }, []);

  return (
    <div className="solution-page">
      {/* HERO SECTION */}
      <section className="solution-hero">
        <div className="container">
          <div className="badge">${sol.category}</div>
          <h1>${sol.title}</h1>
          <p>${sol.tagline}</p>
          <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            ${sol.desc}
          </p>
          <Link to="/book-demo" className="btn-solid-white" style={{ background: 'var(--primary)', color: 'white' }}>Book a Demo</Link>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="solution-overview">
        <div className="container">
          <h2>${sol.overview_h2}</h2>
          <p>${sol.overview_p1}</p>
          <p>${sol.overview_p2}</p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="solution-features">
        <div className="container">
          <h2>Core Capabilities</h2>
          <div className="features-grid">
            
            <div className="solution-card">
              <div className="solution-icon">
                ${svgIcon}
              </div>
              <h3>${sol.f1}</h3>
              <p>${sol.d1}</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                ${svgIcon}
              </div>
              <h3>${sol.f2}</h3>
              <p>${sol.d2}</p>
            </div>

            <div className="solution-card">
              <div className="solution-icon">
                ${svgIcon}
              </div>
              <h3>${sol.f3}</h3>
              <p>${sol.d3}</p>
            </div>

          </div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section className="solution-use-cases">
        <div className="container">
          <h2>Proven Use Cases</h2>
          <div className="use-case-list">
            
            <div className="use-case-item">
              <div className="use-case-icon">
                ${checkIcon}
              </div>
              <div className="use-case-content">
                <h4>${sol.u1_title}</h4>
                <p>${sol.u1_desc}</p>
              </div>
            </div>

            <div className="use-case-item">
              <div className="use-case-icon">
                ${checkIcon}
              </div>
              <div className="use-case-content">
                <h4>${sol.u2_title}</h4>
                <p>${sol.u2_desc}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="solution-cta">
        <div className="container">
          <h2>${sol.cta_title}</h2>
          <p>Join thousands of industry leaders who are transforming their business with The Patterns Company.</p>
          <Link to="/book-demo" className="btn-solid-white">Get Started Today</Link>
        </div>
      </section>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(__dirname, 'src/pages/solutions', sol.file), content);
});

fs.writeFileSync(path.join(__dirname, 'src/pages/solutions/Solutions.css'), cssContent);
console.log('Successfully generated expanded solutions pages and CSS!');
