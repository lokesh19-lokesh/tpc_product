import { Link } from 'react-router-dom';
import './ProductEcosystem.css';

export function ProductEcosystem() {
  const products = [
    {
      id: 'patterns-os',
      title: 'PatternsOS',
      category: 'MANUFACTURING INTELLIGENCE',
      description: 'Machine-level telemetry, predictive maintenance and production planning in a single operational surface.',
      className: 'manufacturing',
      image: '/images/pattersos.jpeg',
      colorClass: 'explore-green',
      path: '/products/patterns-os'
    },
    {
      id: 'mint-leaf-ai',
      title: 'MintLeafAI',
      category: 'HEALTHCARE INTELLIGENCE',
      description: 'Patient flow, documentation and revenue cycle intelligence built for hospitals and multi-site clinics.',
      className: 'healthcare',
      image: '/images/MintleafeAi.png',
      colorClass: 'explore-purple',
      path: '/products/mint-leaf-ai'
    },
    {
      id: 'yestick',
      title: 'YesTick',
      category: 'CONVERSATIONAL CRM',
      description: 'A WhatsApp-first CRM where pipeline, campaigns and support live inside the thread your customer already uses.',
      className: 'hospitality',
      image: '/images/3.png',
      colorClass: 'explore-green',
      path: '/products/yestick'
    },
    {
      id: 'pick-my-school',
      title: 'PickMySchoolAI',
      category: 'EDUCATION INTELLIGENCE',
      description: 'From enquiry to enrolment to learning outcomes — the intelligence layer for modern institutions.',
      className: 'education',
      image: '/images/4.png',
      colorClass: 'explore-blue',
      path: '/products/pick-my-school-ai'
    },
    {
      id: 'patterns-labs',
      title: 'Patterns Labs',
      category: 'APPLIED AI RESEARCH',
      description: 'Frontier research in reasoning, forecasting and autonomous operations — shipped into products people use daily.',
      className: 'construction',
      image: '/images/5.png',
      colorClass: 'explore-white',
      path: '/products/patterns-labs'
    },
    {
      id: 'enterprise-solutions',
      title: 'Enterprise Solutions',
      category: 'CUSTOM DEPLOYMENTS',
      description: 'Private cloud, bespoke models and dedicated engineering for organisations operating at national scale.',
      className: 'enterprise',
      image: '/images/enterprise_bg_1785484546004.png',
      colorClass: 'explore-orange',
      path: '/products/enterprise-solutions'
    }
  ];

  return (
    <section className="ecosystem-section">
      <div className="ecosystem-container">
        
        <div className="ecosystem-header">
          <p className="ecosystem-overline">THE PRODUCT ECOSYSTEM</p>
          <h2 className="ecosystem-title">
            Six products.<br />
            One intelligence layer.
          </h2>
        </div>

        <div className="ecosystem-bento-grid">
          {products.map(product => (
            <div 
              key={product.id}
              className={`ecosystem-bento-item ${product.className}`}
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <div className="ecosystem-bento-overlay"></div>
              <div className="ecosystem-bento-content">
                <p className="ecosystem-bento-category">{product.category}</p>
                <h3 className="ecosystem-bento-title">{product.title}</h3>
                <p className="ecosystem-bento-description">{product.description}</p>
                <div className="ecosystem-bento-explore mt-4">
                  <Link to={product.path} className={`explore-btn font-semibold text-sm ${product.colorClass} flex items-center gap-1`}>
                    Explore <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
