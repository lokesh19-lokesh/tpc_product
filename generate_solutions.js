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

.solution-features {
  padding: 6rem 0;
  background-color: white;
}

.solution-features .container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
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

@media (max-width: 768px) {
  .solution-hero {
    padding: 6rem 0 4rem;
  }
  .solution-hero h1 {
    font-size: 2.5rem;
  }
  .solution-hero p {
    font-size: 1.125rem;
    padding: 0 1rem;
  }
  .solution-features {
    padding: 4rem 0;
  }
  .solution-card {
    padding: 1.5rem;
  }
}
`;

const solutions = [
  {
    file: 'Operations.tsx',
    name: 'Operations',
    category: 'By Team',
    tagline: 'Plan, monitor and automate',
    desc: 'Streamline your daily workflows, allocate resources effectively, and gain real-time visibility into your entire operation. Automate the mundane so your team can focus on what matters.',
    f1: 'Real-time Tracking',
    d1: 'Monitor processes across the organization with millisecond precision and live dashboards.',
    f2: 'Process Automation',
    d2: 'Replace manual data entry and repetitive tasks with intelligent, event-driven workflows.',
    f3: 'Resource Allocation',
    d3: 'Optimize your workforce and assets using AI-powered capacity planning and scheduling.'
  },
  {
    file: 'SalesCRM.tsx',
    name: 'SalesCRM',
    title: 'Sales & CRM',
    category: 'By Team',
    tagline: 'Pipeline on every channel',
    desc: 'Unify your customer touchpoints into a single, intelligent view. Accurately forecast revenue, score leads automatically, and close deals faster with our omnichannel CRM.',
    f1: 'Omnichannel Tracking',
    d1: 'Capture every interaction across email, social, phone, and in-person meetings automatically.',
    f2: 'Predictive Lead Scoring',
    d2: 'Identify the prospects most likely to convert using our proprietary machine learning models.',
    f3: 'Sales Forecasting',
    d3: 'Generate highly accurate revenue forecasts based on historical data and pipeline velocity.'
  },
  {
    file: 'Finance.tsx',
    name: 'Finance',
    category: 'By Team',
    tagline: 'Forecasting and controls',
    desc: 'Bring precision and compliance to your financial operations. Automate auditing, enforce budget controls seamlessly, and predict cash flow with unparalleled accuracy.',
    f1: 'Automated Auditing',
    d1: 'Continuously scan transactions for anomalies, policy violations, and potential fraud.',
    f2: 'Budget Controls',
    d2: 'Enforce spending limits proactively with smart approval routing and real-time alerts.',
    f3: 'Revenue Prediction',
    d3: 'Project future cash flows and financial health using advanced econometric modeling.'
  },
  {
    file: 'PredictiveMaintenance.tsx',
    name: 'PredictiveMaintenance',
    title: 'Predictive Maintenance',
    category: 'By Need',
    tagline: 'Stop failures early',
    desc: 'Transform your maintenance strategy from reactive to proactive. Leverage IoT data and machine learning to predict equipment failures before they happen and minimize downtime.',
    f1: 'IoT Integrations',
    d1: 'Connect seamlessly with thousands of industrial sensors and edge devices out of the box.',
    f2: 'Machine Learning Alerts',
    d2: 'Detect subtle patterns indicative of impending failures using deep neural networks.',
    f3: 'Downtime Prevention',
    d3: 'Automatically schedule maintenance windows and order parts before critical breakdowns occur.'
  },
  {
    file: 'CustomerIntelligence.tsx',
    name: 'CustomerIntelligence',
    title: 'Customer Intelligence',
    category: 'By Need',
    tagline: 'Understand every account',
    desc: 'Turn customer data into actionable insights. Anticipate churn, understand sentiment, and deliver hyper-personalized experiences across the entire customer lifecycle.',
    f1: '360-Degree View',
    d1: 'Aggregate data from marketing, sales, and support into a single unified customer profile.',
    f2: 'Churn Prediction',
    d2: 'Identify at-risk accounts early with AI models that analyze usage drops and support tickets.',
    f3: 'Sentiment Analysis',
    d3: 'Gauge customer satisfaction in real-time by analyzing communications using NLP.'
  },
  {
    file: 'Compliance.tsx',
    name: 'Compliance',
    category: 'By Need',
    tagline: 'Auditable by design',
    desc: 'Navigate complex regulatory landscapes with ease. Automate compliance reporting, enforce data governance policies, and ensure every action is securely logged.',
    f1: 'Automated Reporting',
    d1: 'Generate audit-ready reports for SOC2, GDPR, HIPAA, and other frameworks instantly.',
    f2: 'Policy Enforcement',
    d2: 'Implement rules that automatically block non-compliant actions across the platform.',
    f3: 'Data Governance',
    d3: 'Maintain strict control over data lineage, access rights, and retention policies.'
  }
];

const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>`;

solutions.forEach(sol => {
  const compName = sol.name;
  const title = sol.title || sol.name;
  
  const content = `import { useEffect } from 'react';
import './Solutions.css';

export function ${compName}() {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-product-color', 'var(--primary)');
  }, []);

  return (
    <div className="solution-page">
      <section className="solution-hero">
        <div className="container">
          <div className="badge">${sol.category}</div>
          <h1>${title}</h1>
          <p>${sol.tagline}</p>
          <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            ${sol.desc}
          </p>
        </div>
      </section>

      <section className="solution-features">
        <div className="container">
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
    </div>
  );
}
`;
  fs.writeFileSync(path.join(__dirname, 'src/pages/solutions', sol.file), content);
});

fs.writeFileSync(path.join(__dirname, 'src/pages/solutions/Solutions.css'), cssContent);
console.log('Successfully generated solutions pages and CSS!');
