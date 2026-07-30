import { useState } from 'react';
import './Hero.css';

const products = [
  { id: 'patterns-os', name: 'PatternsOS', color: 'bg-green' },
  { id: 'mint-leaf-ai', name: 'MintLeafAI', color: 'bg-purple' },
  { id: 'yestick', name: 'YesTick', color: 'bg-green' },
  { id: 'pick-my-school', name: 'PickMySchoolAI', color: 'bg-blue' },
  { id: 'patterns-labs', name: 'Patterns Labs', color: 'bg-black' }
];

export function Hero() {
  const [activeTab, setActiveTab] = useState('patterns-os');

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
            <span className="underline-green">Industries.</span>
          </h1>
          <p className="hero-subtitle text-lg text-secondary max-w-md">
            Six products. One intelligence layer. We build the software that runs manufacturing plants, hospitals, schools and the businesses in between.
          </p>
        </div>

        {/* Right Content - Dashboard Mock */}
        <div className="hero-dashboard">
          <div className="dashboard-header flex items-center gap-2 mb-4">
            <span className="status-dot green"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Manufacturing Intelligence
            </span>
          </div>
          
          <h2 className="text-4xl font-extrabold mb-2">PatternsOS</h2>
          <p className="text-secondary mb-8">The operating system for the factory floor.</p>

          <div className="dashboard-card">
            <div className="card-topbar">
              <div className="dots">
                <span></span><span></span><span></span>
              </div>
              <div className="card-title flex items-center gap-2">
                <div className="square-icon-small bg-green"></div>
                <span className="text-xs font-semibold">PatternsOS</span>
              </div>
            </div>

            <div className="card-content flex">
              {/* Sidebar */}
              <div className="card-sidebar">
                <ul>
                  <li className="active"><span className="dot green"></span> Overview</li>
                  <li><span className="dot gray"></span> Operations</li>
                  <li><span className="dot gray"></span> Insights</li>
                  <li><span className="dot gray"></span> Automations</li>
                  <li><span className="dot gray"></span> Reports</li>
                  <li><span className="dot gray"></span> Settings</li>
                </ul>
              </div>
              
              {/* Main Area */}
              <div className="card-main">
                <div className="metrics-grid">
                  <div className="metric-box">
                    <div className="text-xs text-secondary uppercase font-semibold mb-2">Throughput</div>
                    <div className="text-2xl font-bold text-green">18,402</div>
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
                       <div key={i} className="bar" style={{ height: `${h}%`, opacity: h / 100 }}></div>
                    ))}
                  </div>
                  <div className="progress-lines mt-4">
                    <div className="line-wrapper"><div className="line bg-green" style={{width: '72%'}}></div> <span className="text-xs text-secondary ml-2">72%</span></div>
                    <div className="line-wrapper"><div className="line bg-green" style={{width: '46%'}}></div> <span className="text-xs text-secondary ml-2">46%</span></div>
                    <div className="line-wrapper"><div className="line bg-green" style={{width: '88%'}}></div> <span className="text-xs text-secondary ml-2">88%</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-stats flex items-center justify-between mt-8 pb-8 border-bottom">
            <div>
              <div className="text-3xl font-extrabold mb-1">92.4%</div>
              <div className="text-xs font-semibold text-secondary uppercase tracking-widest">OEE</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold mb-1">-38%</div>
              <div className="text-xs font-semibold text-secondary uppercase tracking-widest">Downtime</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold mb-1">214</div>
              <div className="text-xs font-semibold text-secondary uppercase tracking-widest">Plants Live</div>
            </div>
          </div>

          <div className="tabs flex justify-between mt-6">
            {products.map(p => (
              <button 
                key={p.id}
                className={`tab-item ${activeTab === p.id ? 'active' : ''}`}
                onClick={() => setActiveTab(p.id)}
              >
                <div className={`tab-indicator ${activeTab === p.id ? 'active' : ''}`}></div>
                <span className="text-xs font-semibold">{p.name}</span>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
