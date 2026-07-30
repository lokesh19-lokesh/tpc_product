import './Footer.css';

export function Footer() {
  return (
    <footer className="footer border-t border-gray-200">
      <div className="container footer-container">
        
        <div className="footer-top grid">
          <div className="footer-brand flex-col">
            <div>
              <div className="flex items-center mb-6">
                <img src="/logo.png" alt="The Patterns Company" className="footer-logo-img" />
              </div>
              <p className="text-secondary text-sm max-w-xs mb-8">
                Building AI products that transform industries.
              </p>
            </div>
            
            <div className="social-links flex items-center gap-5 text-secondary">
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="X (Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 4.8 0 0 0-1-3.02c3.1-.34 6.36-1.53 6.36-7.05a5.36 5.36 0 0 0-1.5-3.8c.15-.38.6-1.8-.15-3.75 0 0-1.25-.4-3.9 1.4a13.38 13.38 0 0 0-7 0c-2.65-1.8-3.9-1.4-3.9-1.4-.75 1.95-.3 3.37-.15 3.75a5.36 5.36 0 0 0-1.5 3.8c0 5.51 3.25 6.7 6.35 7.05a4.8 4.8 4.8 0 0 0-1 3.02V22"></path><path d="M9 20c-5 1.5-5-2.5-7-3"></path></svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
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

        <div className="footer-bottom flex items-center justify-between">
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
