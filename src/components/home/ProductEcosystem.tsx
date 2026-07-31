import './ProductEcosystem.css';

export function ProductEcosystem() {
  const products = [
    {
      id: 'patterns-os',
      title: 'PatternsOS',
      category: 'MANUFACTURING INTELLIGENCE',
      description: 'Machine-level telemetry, predictive maintenance and production planning in a single operational surface.',
      className: 'manufacturing',
      image: '/images/manufacturing_bg_1785483405758.png',
      colorClass: 'explore-green'
    },
    {
      id: 'mint-leaf-ai',
      title: 'MintLeafAI',
      category: 'HEALTHCARE INTELLIGENCE',
      description: 'Patient flow, documentation and revenue cycle intelligence built for hospitals and multi-site clinics.',
      className: 'healthcare',
      image: '/images/healthcare_bg_1785483416290.png',
      colorClass: 'explore-purple'
    },
    {
      id: 'yestick',
      title: 'YesTick',
      category: 'CONVERSATIONAL CRM',
      description: 'A WhatsApp-first CRM where pipeline, campaigns and support live inside the thread your customer already uses.',
      className: 'hospitality',
      image: '/images/hospitality_bg_1785483450990.png',
      colorClass: 'explore-green'
    },
    {
      id: 'pick-my-school',
      title: 'PickMySchoolAI',
      category: 'EDUCATION INTELLIGENCE',
      description: 'From enquiry to enrolment to learning outcomes — the intelligence layer for modern institutions.',
      className: 'education',
      image: '/images/education_bg_1785483427832.png',
      colorClass: 'explore-blue'
    },
    {
      id: 'patterns-labs',
      title: 'Patterns Labs',
      category: 'APPLIED AI RESEARCH',
      description: 'Frontier research in reasoning, forecasting and autonomous operations — shipped into products people use daily.',
      className: 'construction',
      image: '/images/construction_bg_1785483463000.png',
      colorClass: 'explore-white'
    },
    {
      id: 'enterprise-solutions',
      title: 'Enterprise Solutions',
      category: 'CUSTOM DEPLOYMENTS',
      description: 'Private cloud, bespoke models and dedicated engineering for organisations operating at national scale.',
      className: 'enterprise',
      image: '/images/enterprise_bg_1785484546004.png',
      colorClass: 'explore-orange'
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

        <div className="bento-grid">
          {products.map(product => (
            <div 
              key={product.id}
              className={`bento-item ${product.className}`}
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <div className="bento-overlay"></div>
              <div className="bento-content">
                <p className="bento-category">{product.category}</p>
                <h3 className="bento-title">{product.title}</h3>
                <p className="bento-description">{product.description}</p>
                <div className="bento-explore mt-4">
                  <span className={`explore-btn font-semibold text-sm ${product.colorClass} flex items-center gap-1`}>
                    Explore <span>→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
