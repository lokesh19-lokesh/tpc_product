import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isProductPage = location.pathname.startsWith('/products/');
  
  const navbarTheme = isHomePage ? 'theme-dark' : (isProductPage ? 'theme-product' : 'theme-light');

  const navRef = useRef<HTMLElement>(null);

  // Close mobile menu on location change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav ref={navRef} className={`navbar ${navbarTheme}`}>
      <div className="container navbar-container flex items-center justify-between">
        <Link to="/" className="flex items-center z-10">
          <img src="/logo.png" alt="The Patterns Company" className="logo-img" />
        </Link>

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
            <Link to="#" className="nav-link flex justify-between items-center" onClick={(e) => toggleDropdown('products', e)}>
              Products
              <svg className="dropdown-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </Link>
            <div className="dropdown-menu mega-menu">
              <div className="container flex">
                <div className="products-grid">
                  <Link to="/products/patterns-os" className="product-item">
                    <div className="square-icon-medium bg-orange"></div>
                    <div>
                      <div className="font-bold text-primary text-base">PatternsOS</div>
                      <div className="text-sm text-secondary mt-1">Manufacturing Intelligence</div>
                    </div>
                  </Link>
                  <Link to="/products/mint-leaf-ai" className="product-item">
                    <div className="square-icon-medium bg-purple"></div>
                    <div>
                      <div className="font-bold text-primary text-base">MintLeafAI</div>
                      <div className="text-sm text-secondary mt-1">Healthcare Intelligence</div>
                    </div>
                  </Link>
                  <Link to="/products/yestick" className="product-item">
                    <div className="square-icon-medium bg-green"></div>
                    <div>
                      <div className="font-bold text-primary text-base">YesTick</div>
                      <div className="text-sm text-secondary mt-1">Conversational CRM</div>
                    </div>
                  </Link>
                  <Link to="/products/pick-my-school-ai" className="product-item">
                    <div className="square-icon-medium bg-red"></div>
                    <div>
                      <div className="font-bold text-primary text-base">PickMySchoolAI</div>
                      <div className="text-sm text-secondary mt-1">Education Intelligence</div>
                    </div>
                  </Link>
                  <Link to="/products/patterns-labs" className="product-item">
                    <div className="square-icon-medium bg-black"></div>
                    <div>
                      <div className="font-bold text-primary text-base">Patterns Labs</div>
                      <div className="text-sm text-secondary mt-1">Applied AI Research</div>
                    </div>
                  </Link>
                  <Link to="/products/enterprise-solutions" className="product-item">
                    <div className="square-icon-medium bg-orange"></div>
                    <div>
                      <div className="font-bold text-primary text-base">Enterprise Solutions</div>
                      <div className="text-sm text-secondary mt-1">Custom deployments</div>
                    </div>
                  </Link>
                </div>
                <div className="featured-section border-l pl-12 ml-12 border-gray-200">
                  <div className="text-xs font-semibold text-secondary uppercase tracking-widest mb-4">Featured</div>
                  <h3 className="text-2xl font-normal text-primary leading-tight mb-6 max-w-sm">
                    PatternsOS 4.0 brings autonomous scheduling to 214 plants.
                  </h3>
                  <Link to="/company/newsroom" className="text-sm font-semibold text-primary border-b border-primary pb-1 inline-block hover:text-green hover:border-green transition-colors">
                    Read the announcement
                  </Link>
                </div>
              </div>
            </div>
          </li>
          
          <li className={`nav-item has-dropdown ${openDropdown === 'solutions' ? 'open' : ''}`}>
            <Link to="#" className="nav-link flex justify-between items-center" onClick={(e) => toggleDropdown('solutions', e)}>
              Solutions
              <svg className="dropdown-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </Link>
            <div className="dropdown-menu mega-menu">
              <div className="container solutions-grid">
                <div>
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-6">By Team</div>
                  <div className="flex flex-col gap-6">
                    <Link to="/solutions/operations" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Operations</div>
                      <div className="text-sm text-secondary">Plan, monitor and automate</div>
                    </Link>
                    <Link to="/solutions/sales-crm" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Sales & CRM</div>
                      <div className="text-sm text-secondary">Pipeline on every channel</div>
                    </Link>
                    <Link to="/solutions/finance" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Finance</div>
                      <div className="text-sm text-secondary">Forecasting and controls</div>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-6">By Need</div>
                  <div className="flex flex-col gap-6">
                    <Link to="/solutions/predictive-maintenance" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Predictive maintenance</div>
                      <div className="text-sm text-secondary">Stop failures early</div>
                    </Link>
                    <Link to="/solutions/customer-intelligence" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Customer intelligence</div>
                      <div className="text-sm text-secondary">Understand every account</div>
                    </Link>
                    <Link to="/solutions/compliance" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Compliance</div>
                      <div className="text-sm text-secondary">Auditable by design</div>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-6">By Service</div>
                  <div className="flex flex-col gap-6">
                    <Link to="/solutions/cloud-services" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Cloud Services</div>
                    </Link>
                    <Link to="/solutions/devsecops" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">DevSecOps</div>
                    </Link>
                    <Link to="/solutions/cloud-native" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Cloud Native Development Services</div>
                    </Link>
                    <Link to="/solutions/platform-engineering" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Design Led Platform Engineering</div>
                    </Link>
                    <Link to="/solutions/agile-devops" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Agile Development & DevOps</div>
                    </Link>
                    <Link to="/solutions/ui-ux-design" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">UI/UX Design</div>
                    </Link>
                    <Link to="/solutions/mobile-app-dev" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Mobile App Development</div>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-6">More Services</div>
                  <div className="flex flex-col gap-6">
                    <Link to="/solutions/network-services" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Network Services</div>
                    </Link>
                    <Link to="/solutions/cyber-security" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Cyber Security</div>
                    </Link>
                    <Link to="/solutions/digital-enterprise-apps" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Digital Enterprise Applications</div>
                    </Link>
                    <Link to="/solutions/data-and-ai" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Data and AI</div>
                    </Link>
                    <Link to="/solutions/digital-strategy" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Digital Strategy</div>
                    </Link>
                    <Link to="/solutions/engineering-rd" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Engineering Research & Development</div>
                    </Link>
                    <Link to="/solutions/enterprise-platforms" className="solution-item">
                      <div className="font-bold text-primary text-base mb-0.5">Enterprise Platforms</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          
          <li className="nav-item">
            <Link to="/industries/manufacturing" className="nav-link">Industries</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources/customer-stories" className="nav-link">Customers</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources/documentation" className="nav-link">Resources</Link>
          </li>
          
          <li className={`nav-item has-dropdown ${openDropdown === 'company' ? 'open' : ''}`}>
            <Link to="#" className="nav-link flex justify-between items-center" onClick={(e) => toggleDropdown('company', e)}>
              Company
              <svg className="dropdown-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </Link>
            <div className="dropdown-menu mega-menu">
              <div className="container max-w-4xl mx-0">
                <div className="text-xs font-semibold text-secondary uppercase tracking-widest mb-6">The Patterns Company</div>
                <div className="flex flex-col gap-6">
                  <Link to="/company/about" className="solution-item">
                    <div className="font-bold text-primary text-base">About</div>
                    <div className="text-sm text-secondary mt-1">Our story and leadership</div>
                  </Link>
                  <Link to="/company/careers" className="solution-item">
                    <div className="font-bold text-primary text-base">Careers</div>
                    <div className="text-sm text-secondary mt-1">Build with us</div>
                  </Link>
                  <Link to="/company/newsroom" className="solution-item">
                    <div className="font-bold text-primary text-base">Newsroom</div>
                    <div className="text-sm text-secondary mt-1">Announcements and press</div>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div className="nav-actions flex items-center gap-2">
          <Link to="/sign-in"><button className="btn-ghost text-sm">Sign in</button></Link>
          <Link to="/book-demo"><button className="btn-primary text-sm">Book Demo</button></Link>
        </div>
        </div>
      </div>
    </nav>
  );
}
