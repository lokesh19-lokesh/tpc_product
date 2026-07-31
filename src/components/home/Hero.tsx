import { useState } from 'react';
import './Hero.css';

const products = [
  { 
    id: 'patterns-os', 
    name: 'PatternsOS', 
    category: 'Manufacturing Intelligence',
    subtitle: 'The operating system for the factory floor.',
    color: 'bg-green',
    textColor: 'text-green',
    underlineClass: 'underline-green',
    colorVar: 'var(--accent-green)',
    layoutType: 'bars',
    stats: [
      { label: 'OEE', value: '92.4%' },
      { label: 'Downtime', value: '-38%' },
      { label: 'Plants Live', value: '214' }
    ]
  },
  { 
    id: 'mint-leaf-ai', 
    name: 'MintLeafAI', 
    category: 'Healthcare Intelligence',
    subtitle: 'Clinical operations, quietly automated.',
    color: 'bg-purple',
    textColor: 'text-purple',
    underlineClass: 'underline-purple',
    colorVar: 'var(--accent-purple)',
    layoutType: 'bars',
    stats: [
      { label: 'Doc Time', value: '-61%' },
      { label: 'Bed Turns', value: '3.4x' },
      { label: 'Care Sites', value: '1,180' }
    ]
  },
  { 
    id: 'yestick', 
    name: 'YesTick', 
    category: 'Conversational CRM',
    subtitle: 'Every customer conversation, closed.',
    color: 'bg-green',
    textColor: 'text-green',
    underlineClass: 'underline-green',
    colorVar: 'var(--accent-green)',
    layoutType: 'chat',
    stats: [
      { label: 'Reply Rate', value: '84%' },
      { label: 'Win Rate', value: '+27%' },
      { label: 'Messages/Mo', value: '96M' }
    ]
  },
  { 
    id: 'pick-my-school', 
    name: 'PickMySchoolAI', 
    category: 'Education Intelligence',
    subtitle: 'Admissions and outcomes on one rail.',
    color: 'bg-blue',
    textColor: 'text-blue',
    underlineClass: 'underline-blue',
    colorVar: 'var(--accent-blue)',
    layoutType: 'hero-metric',
    stats: [
      { label: 'Enrolment', value: '+34%' },
      { label: 'Response', value: '4 min' },
      { label: 'Institutions', value: '620' }
    ]
  },
  { 
    id: 'patterns-labs', 
    name: 'Patterns Labs', 
    category: 'Applied AI Research',
    subtitle: 'Inventing the next decade of industrial AI.',
    color: 'bg-black',
    textColor: 'text-primary',
    underlineClass: 'underline-black',
    colorVar: 'var(--primary)',
    layoutType: 'grid',
    stats: [
      { label: 'Researchers', value: '48' },
      { label: 'Papers', value: '31' },
      { label: 'Models', value: '9' }
    ]
  }
];

export function Hero() {
  const [activeTab, setActiveTab] = useState('patterns-os');
  const activeProduct = products.find(p => p.id === activeTab) || products[0];

  const renderDashboardContent = () => {
    switch(activeProduct.layoutType) {
      case 'bars':
        return (
          <>
            <div className="metrics-grid">
              <div className="metric-box">
                <div className="text-xs text-secondary uppercase font-semibold mb-2">Throughput</div>
                <div className={`text-2xl font-bold ${activeProduct.textColor}`}>18,402</div>
              </div>
              <div className="metric-box">
                <div className="text-xs text-secondary uppercase font-semibold mb-2">Uptime</div>
                <div className="text-2xl font-bold">99.2%</div>
              </div>
              <div className="metric-box">
                <div className="text-xs text-secondary uppercase font-semibold mb-2">Alerts</div>
                <div className="text-2xl font-bold">3</div>
              </div>
            </div>
            <div className="chart-area">
              <div className="bars">
                {[30, 45, 50, 60, 55, 70, 75, 60, 80, 85, 95, 65, 80].map((h, i) => (
                   <div key={i} className={`bar ${activeProduct.color}`} style={{ height: `${h}%`, opacity: 0.2 + (i / 12) * 0.8 }}></div>
                ))}
              </div>
              <div className="progress-lines mt-4">
                <div className="line-wrapper"><div className={`line ${activeProduct.color}`} style={{width: '72%'}}></div> <span className="text-xs text-secondary ml-2">72%</span></div>
                <div className="line-wrapper"><div className={`line ${activeProduct.color}`} style={{width: '46%'}}></div> <span className="text-xs text-secondary ml-2">46%</span></div>
                <div className="line-wrapper"><div className={`line ${activeProduct.color}`} style={{width: '88%'}}></div> <span className="text-xs text-secondary ml-2">88%</span></div>
              </div>
            </div>
          </>
        );
      case 'chat':
        return (
          <div className="chat-layout">
            <div className="chat-bubbles">
              <div className="chat-bubble left">Hi — is the enterprise plan still open?</div>
              <div className="chat-bubble right">It is. I've reserved 40 seats for you.</div>
              <div className="chat-bubble left">Send the invoice on WhatsApp?</div>
              <div className="chat-bubble right">Sent. Payment link inside the thread.</div>
              <div className="chat-input-box">
                <span className="text-secondary text-sm">Reply with AI...</span>
                <div className="chat-input-circle"></div>
              </div>
            </div>
            <div className="yestick-sidebar">
              <div className="yestick-card">
                <div className="text-xs text-secondary font-semibold uppercase mb-1">Stage</div>
                <div className="font-bold text-sm">Negotiation</div>
              </div>
              <div className="yestick-card">
                <div className="text-xs text-secondary font-semibold uppercase mb-1">Deal</div>
                <div className="font-bold text-sm">$48,000</div>
              </div>
              <div className="yestick-card">
                <div className="text-xs text-secondary font-semibold uppercase mb-1">Owner</div>
                <div className="font-bold text-sm">R. Menon</div>
              </div>
            </div>
          </div>
        );
      case 'hero-metric':
        return (
          <div style={{ width: '100%' }}>
            <div className="hero-metric-container">
              <div>
                <div className="text-xs text-secondary font-semibold uppercase tracking-wider mb-2">Applications</div>
                <div className="text-4xl font-extrabold">12,486</div>
              </div>
              <div className="metric-badge">+34% YoY</div>
            </div>
            <div className="bars" style={{ height: '80px', marginTop: '1rem', borderBottom: 'none' }}>
              {[20, 30, 45, 35, 25, 40, 50, 60, 45, 55, 75, 95].map((h, i) => (
                 <div key={i} className={`bar ${activeProduct.color}`} style={{ height: `${h}%` }}></div>
              ))}
            </div>
            <div className="school-list">
              <div className="school-list-row">
                <span className="font-medium">Northfield Academy</span>
                <span className="text-secondary">Enrolled</span>
                <span className={`font-bold ${activeProduct.textColor}`}>98</span>
              </div>
              <div className="school-list-row">
                <span className="font-medium">Cedar Valley High</span>
                <span className="text-secondary">In review</span>
                <span className={`font-bold ${activeProduct.textColor}`}>76</span>
              </div>
              <div className="school-list-row" style={{ borderBottom: '1px solid var(--border-color)' }}>
                <span className="font-medium">Riverside Institute</span>
                <span className="text-secondary">Interview</span>
                <span className={`font-bold ${activeProduct.textColor}`}>54</span>
              </div>
            </div>
          </div>
        );
      case 'grid':
        return (
          <div style={{ width: '100%' }}>
            <div className="text-xs text-secondary font-semibold uppercase tracking-widest mb-4">Research Runs · Reasoning-V4</div>
            <div className="labs-grid-container">
              <div className="labs-grid">
                {Array.from({length: 40}).map((_, i) => (
                  <div key={i} className="labs-square" style={{ opacity: Math.random() * 0.8 + 0.1 }}></div>
                ))}
              </div>
            </div>
            <div className="labs-bottom-cards mt-6">
              <div className="labs-card">
                <div className="text-xs text-secondary font-semibold uppercase mb-2">Eval Score</div>
                <div className="text-2xl font-bold">0.941</div>
              </div>
              <div className="labs-card">
                <div className="text-xs text-secondary font-semibold uppercase mb-2">Latency</div>
                <div className="text-2xl font-bold">182ms</div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="hero">
      <div className="container hero-grid">
        {/* Left Content */}
        <div className="hero-content">
          <p className="overline text-sm font-semibold text-secondary uppercase tracking-wide mb-6">
            The Patterns Company
          </p>
          <h1 className="hero-title text-8xl font-extrabold mb-8 tracking-tight">
            Building AI<br />
            Products<br />
            That<br />
            Transform<br />
            <span className={activeProduct.underlineClass}>Industries.</span>
          </h1>
          <p className="hero-subtitle text-lg text-secondary max-w-md">
            Six products. One intelligence layer. We build the software that runs manufacturing plants, hospitals, schools and the businesses in between.
          </p>
          
          <div className="mt-8 flex gap-4">
            <button className="btn-primary">Book a Demo</button>
            <button className="btn-ghost" style={{ border: '1px solid var(--border-color)' }}>Explore Products</button>
          </div>
        </div>

        {/* Right Content - Dashboard Mock */}
        <div className="hero-dashboard">
          <div className="dashboard-header flex items-center gap-2 mb-4">
            <span className="status-dot" style={{ backgroundColor: activeProduct.colorVar }}></span>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              {activeProduct.category}
            </span>
          </div>
          
          <h2 className="text-4xl font-extrabold mb-2">{activeProduct.name}</h2>
          <p className="text-secondary mb-8">{activeProduct.subtitle}</p>

          <div className="dashboard-card">
            <div className="card-topbar">
              <div className="dots">
                <span></span><span></span><span></span>
              </div>
              <div className="card-title flex items-center gap-2">
                <div className={`square-icon-small ${activeProduct.color}`}></div>
                <span className="text-xs font-semibold">{activeProduct.name}</span>
              </div>
            </div>

            <div className="card-content flex">
              {/* Sidebar */}
              <div className="card-sidebar">
                <ul>
                  <li className="active">
                    <span className="dot" style={{ backgroundColor: activeProduct.colorVar }}></span> Overview
                  </li>
                  <li><span className="dot gray"></span> Operations</li>
                  <li><span className="dot gray"></span> Insights</li>
                  <li><span className="dot gray"></span> Automations</li>
                  <li><span className="dot gray"></span> Reports</li>
                  <li><span className="dot gray"></span> Settings</li>
                </ul>
              </div>
              
              {/* Main Area */}
              <div className="card-main" style={{ width: '100%', minWidth: 0, overflow: 'hidden' }}>
                {renderDashboardContent()}
              </div>
            </div>
          </div>

          <div className="dashboard-stats flex items-center justify-between mt-12 pb-2">
            {activeProduct.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-xs font-semibold text-secondary uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="tabs mt-8">
            {products.map(p => (
              <button 
                key={p.id}
                className={`tab-item ${activeTab === p.id ? 'active' : ''}`}
                onClick={() => setActiveTab(p.id)}
              >
                <div className="tab-indicator" style={{ backgroundColor: activeTab === p.id ? p.colorVar : '#e5e7eb' }}></div>
                <span className="text-xs font-semibold">{p.name}</span>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
