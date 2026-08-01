import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer border-t border-gray-200">
      <div className="container footer-container">
        
        <div className="footer-top grid">
          <div className="footer-brand flex-col">
            <div>
              <div className="flex items-center mb-6">
                <img src="/footerlogo.png" alt="The Patterns Company" className="footer-logo-img" />
              </div>
              <p className="text-secondary text-sm max-w-xs mb-8">
                Building AI products that transform industries.
              </p>
            </div>
            
            <div className="social-links flex items-center gap-4 text-secondary">
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="X (Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h4 className="text-xs font-bold tracking-wider uppercase mb-6">Products</h4>
              <ul className="flex-col gap-4">
                <li><Link to="/products/patterns-os" className="text-sm text-secondary hover:text-primary transition-colors">PatternsOS</Link></li>
                <li><Link to="/products/mint-leaf-ai" className="text-sm text-secondary hover:text-primary transition-colors">MintLeafAI</Link></li>
                <li><Link to="/products/yestick" className="text-sm text-secondary hover:text-primary transition-colors">YesTick</Link></li>
                <li><Link to="/products/pick-my-school-ai" className="text-sm text-secondary hover:text-primary transition-colors">PickMySchoolAI</Link></li>
                <li><Link to="/products/patterns-labs" className="text-sm text-secondary hover:text-primary transition-colors">Patterns Labs</Link></li>
                <li><Link to="/products/enterprise-solutions" className="text-sm text-secondary hover:text-primary transition-colors">Enterprise Solutions</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="text-xs font-bold tracking-wider uppercase mb-6">Industries</h4>
              <ul className="flex-col gap-4">
                <li><Link to="/industries/manufacturing" className="text-sm text-secondary hover:text-primary transition-colors">Manufacturing</Link></li>
                <li><Link to="/industries/healthcare" className="text-sm text-secondary hover:text-primary transition-colors">Healthcare</Link></li>
                <li><Link to="/industries/education" className="text-sm text-secondary hover:text-primary transition-colors">Education</Link></li>
                <li><Link to="/industries/retail" className="text-sm text-secondary hover:text-primary transition-colors">Retail</Link></li>
                <li><Link to="/industries/hospitality" className="text-sm text-secondary hover:text-primary transition-colors">Hospitality</Link></li>
                <li><Link to="/industries/construction" className="text-sm text-secondary hover:text-primary transition-colors">Construction</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="text-xs font-bold tracking-wider uppercase mb-6">Solutions</h4>
              <ul className="flex-col gap-4">
                <li><Link to="/solutions/operations" className="text-sm text-secondary hover:text-primary transition-colors">Operations</Link></li>
                <li><Link to="/solutions/sales-crm" className="text-sm text-secondary hover:text-primary transition-colors">Sales & CRM</Link></li>
                <li><Link to="/solutions/finance" className="text-sm text-secondary hover:text-primary transition-colors">Finance</Link></li>
                <li><Link to="/solutions/predictive-maintenance" className="text-sm text-secondary hover:text-primary transition-colors">Predictive maintenance</Link></li>
                <li><Link to="/solutions/customer-intelligence" className="text-sm text-secondary hover:text-primary transition-colors">Customer intelligence</Link></li>
                <li><Link to="/solutions/compliance" className="text-sm text-secondary hover:text-primary transition-colors">Compliance</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="text-xs font-bold tracking-wider uppercase mb-6">Resources</h4>
              <ul className="flex-col gap-4">
                <li><Link to="/resources/documentation" className="text-sm text-secondary hover:text-primary transition-colors">Documentation</Link></li>
                <li><Link to="/resources/customer-stories" className="text-sm text-secondary hover:text-primary transition-colors">Customer stories</Link></li>
                <li><Link to="/resources/newsroom" className="text-sm text-secondary hover:text-primary transition-colors">Newsroom</Link></li>
                <li><Link to="/resources/security" className="text-sm text-secondary hover:text-primary transition-colors">Security</Link></li>
                <li><Link to="/resources/status" className="text-sm text-secondary hover:text-primary transition-colors">Status</Link></li>
                <li><Link to="/resources/support" className="text-sm text-secondary hover:text-primary transition-colors">Support</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="text-xs font-bold tracking-wider uppercase mb-6">Company</h4>
              <ul className="flex-col gap-4">
                <li><Link to="/company/about" className="text-sm text-secondary hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/company/careers" className="text-sm text-secondary hover:text-primary transition-colors">Careers</Link></li>
                <li><Link to="/company/leadership" className="text-sm text-secondary hover:text-primary transition-colors">Leadership</Link></li>
                <li><Link to="/company/partners" className="text-sm text-secondary hover:text-primary transition-colors">Partners</Link></li>
                <li><Link to="/company/investors" className="text-sm text-secondary hover:text-primary transition-colors">Investors</Link></li>
                <li><Link to="/company/contact" className="text-sm text-secondary hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-wrapper">
        <div className="container footer-container">
          <div className="footer-bottom flex items-center justify-between">
            <p className="text-sm text-white">
              © 2026 The Patterns Company. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-white">
              <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
              <Link to="/cookies" className="hover:text-gray-300 transition-colors">Cookies</Link>
              <Link to="/trust-center" className="hover:text-gray-300 transition-colors">Trust Center</Link>
              <Link to="/accessibility" className="hover:text-gray-300 transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
