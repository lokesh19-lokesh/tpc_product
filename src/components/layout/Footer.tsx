import './Footer.css';

export function Footer() {
  return (
    <footer className="footer border-t border-gray-200">
      <div className="container footer-container">
        
        <div className="footer-top grid">
          <div className="footer-brand flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="square-logo"></div>
                <span className="font-bold text-lg">The Patterns Company</span>
              </div>
              <p className="text-secondary text-sm max-w-xs mb-8">
                Building AI products that transform industries.
              </p>
            </div>
            
            <div className="social-links flex items-center gap-4 text-secondary">
              <a href="#" className="hover:text-primary transition-colors text-sm font-medium">LinkedIn</a>
              <a href="#" className="hover:text-primary transition-colors text-sm font-medium">X</a>
              <a href="#" className="hover:text-primary transition-colors text-sm font-medium">GitHub</a>
              <a href="#" className="hover:text-primary transition-colors text-sm font-medium">YouTube</a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h4 className="text-xs font-bold tracking-wider uppercase mb-6">Products</h4>
              <ul className="flex-col gap-4">
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">PatternsOS</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">MintLeafAI</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">YesTick</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">PickMySchoolAI</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Patterns Labs</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Enterprise Solutions</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="text-xs font-bold tracking-wider uppercase mb-6">Industries</h4>
              <ul className="flex-col gap-4">
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Manufacturing</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Healthcare</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Education</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Retail</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Hospitality</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Construction</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="text-xs font-bold tracking-wider uppercase mb-6">Solutions</h4>
              <ul className="flex-col gap-4">
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Operations</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Sales & CRM</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Finance</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Predictive maintenance</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Customer intelligence</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Compliance</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="text-xs font-bold tracking-wider uppercase mb-6">Resources</h4>
              <ul className="flex-col gap-4">
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Customer stories</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Newsroom</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Security</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Status</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="text-xs font-bold tracking-wider uppercase mb-6">Company</h4>
              <ul className="flex-col gap-4">
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Leadership</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Partners</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Investors</a></li>
                <li><a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom flex items-center justify-between mt-20 pt-8 border-t border-gray-100">
          <p className="text-sm text-secondary">
            © 2026 The Patterns Company. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            <a href="#" className="hover:text-primary transition-colors">Trust Center</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
