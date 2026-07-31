import { useState } from 'react';
import './Navbar.css';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setOpenDropdown(openDropdown === name ? null : name);
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container flex items-center justify-between">
        <a href="/" className="flex items-center z-10">
          <img src="/logo.png" alt="The Patterns Company" className="logo-img" />
        </a>

        <button 
          className="mobile-menu-btn z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>

        <div className={`nav-menu-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links flex items-center gap-8 text-sm text-secondary font-medium">
          <li className={`nav-item has-dropdown ${openDropdown === 'products' ? 'open' : ''}`}>
            <a href="#products" className="nav-link flex justify-between items-center" onClick={(e) => toggleDropdown('products', e)}>
              Products
              <svg className="dropdown-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <div className="dropdown-menu mega-menu">
              <div className="container flex">
                <div className="products-grid">
                  <a href="#" className="product-item">
                    <div className="square-icon-medium bg-green"></div>
                    <div>
                      <div className="font-bold text-primary text-base">PatternsOS</div>
                      <div className="text-sm text-secondary mt-1">Manufacturing Intelligence</div>
                    </div>
                  </a>
                  <a href="#" className="product-item">
                    <div className="square-icon-medium bg-purple"></div>
                    <div>
                      <div className="font-bold text-primary text-base">MintLeafAI</div>
                      <div className="text-sm text-secondary mt-1">Healthcare Intelligence</div>
                    </div>
                  </a>
                  <a href="#" className="product-item">
                    <div className="square-icon-medium bg-green"></div>
                    <div>
                      <div className="font-bold text-primary text-base">YesTick</div>
                      <div className="text-sm text-secondary mt-1">Conversational CRM</div>
                    </div>
                  </a>
                  <a href="#" className="product-item">
                    <div className="square-icon-medium bg-blue"></div>
                    <div>
                      <div className="font-bold text-primary text-base">PickMySchoolAI</div>
                      <div className="text-sm text-secondary mt-1">Education Intelligence</div>
                    </div>
                  </a>
                  <a href="#" className="product-item">
                    <div className="square-icon-medium bg-black"></div>
                    <div>
                      <div className="font-bold text-primary text-base">Patterns Labs</div>
                      <div className="text-sm text-secondary mt-1">Applied AI Research</div>
                    </div>
                  </a>
                  <a href="#" className="product-item">
                    <div className="square-icon-medium bg-orange"></div>
                    <div>
                      <div className="font-bold text-primary text-base">Enterprise Solutions</div>
                      <div className="text-sm text-secondary mt-1">Custom deployments</div>
                    </div>
                  </a>
                </div>
                <div className="featured-section border-l pl-12 ml-12 border-gray-200">
                  <div className="text-xs font-semibold text-secondary uppercase tracking-widest mb-4">Featured</div>
                  <h3 className="text-2xl font-normal text-primary leading-tight mb-6 max-w-sm">
                    PatternsOS 4.0 brings autonomous scheduling to 214 plants.
                  </h3>
                  <a href="#" className="text-sm font-semibold text-primary border-b border-primary pb-1 inline-block hover:text-green hover:border-green transition-colors">
                    Read the announcement
                  </a>
                </div>
              </div>
            </div>
          </li>
          
          <li className={`nav-item has-dropdown ${openDropdown === 'solutions' ? 'open' : ''}`}>
            <a href="#solutions" className="nav-link flex justify-between items-center" onClick={(e) => toggleDropdown('solutions', e)}>
              Solutions
              <svg className="dropdown-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <div className="dropdown-menu mega-menu">
              <div className="container solutions-grid">
                <div>
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-6">By Team</div>
                  <div className="flex flex-col gap-6">
                    <a href="#" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Operations</div>
                      <div className="text-sm text-secondary">Plan, monitor and automate</div>
                    </a>
                    <a href="#" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Sales & CRM</div>
                      <div className="text-sm text-secondary">Pipeline on every channel</div>
                    </a>
                    <a href="#" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Finance</div>
                      <div className="text-sm text-secondary">Forecasting and controls</div>
                    </a>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-6">By Need</div>
                  <div className="flex flex-col gap-6">
                    <a href="#" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Predictive maintenance</div>
                      <div className="text-sm text-secondary">Stop failures early</div>
                    </a>
                    <a href="#" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Customer intelligence</div>
                      <div className="text-sm text-secondary">Understand every account</div>
                    </a>
                    <a href="#" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Compliance</div>
                      <div className="text-sm text-secondary">Auditable by design</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          
          <li className="nav-item">
            <a href="#industries" className="nav-link">Industries</a>
          </li>
          <li className="nav-item">
            <a href="#customers" className="nav-link">Customers</a>
          </li>
          <li className="nav-item">
            <a href="#resources" className="nav-link">Resources</a>
          </li>
          
          <li className={`nav-item has-dropdown ${openDropdown === 'company' ? 'open' : ''}`}>
            <a href="#company" className="nav-link flex justify-between items-center" onClick={(e) => toggleDropdown('company', e)}>
              Company
              <svg className="dropdown-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <div className="dropdown-menu mega-menu">
              <div className="container max-w-4xl mx-0">
                <div className="text-xs font-semibold text-secondary uppercase tracking-widest mb-6">The Patterns Company</div>
                <div className="flex flex-col gap-6">
                  <a href="#" className="solution-item">
                    <div className="font-bold text-primary text-base">About</div>
                    <div className="text-sm text-secondary mt-1">Our story and leadership</div>
                  </a>
                  <a href="#" className="solution-item">
                    <div className="font-bold text-primary text-base">Careers</div>
                    <div className="text-sm text-secondary mt-1">Build with us</div>
                  </a>
                  <a href="#" className="solution-item">
                    <div className="font-bold text-primary text-base">Newsroom</div>
                    <div className="text-sm text-secondary mt-1">Announcements and press</div>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div className="nav-actions flex items-center gap-2">
          <button className="btn-ghost text-sm">Sign in</button>
          <button className="btn-primary text-sm">Book Demo</button>
        </div>
        </div>
      </div>
    </nav>
  );
}
