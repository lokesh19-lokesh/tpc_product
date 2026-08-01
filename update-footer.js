import fs from 'fs';
import path from 'path';

const footerPath = path.join(process.cwd(), 'src/components/layout/Footer.tsx');
let footerContent = fs.readFileSync(footerPath, 'utf8');

footerContent = footerContent.replace(`import './Footer.css';`, `import { Link } from 'react-router-dom';\nimport './Footer.css';`);

const replacements = {
  // Products
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">PatternsOS': 'to="/products/patterns-os" className="text-sm text-secondary hover:text-primary transition-colors">PatternsOS',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">MintLeafAI': 'to="/products/mint-leaf-ai" className="text-sm text-secondary hover:text-primary transition-colors">MintLeafAI',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">YesTick': 'to="/products/yestick" className="text-sm text-secondary hover:text-primary transition-colors">YesTick',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">PickMySchoolAI': 'to="/products/pick-my-school-ai" className="text-sm text-secondary hover:text-primary transition-colors">PickMySchoolAI',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Patterns Labs': 'to="/products/patterns-labs" className="text-sm text-secondary hover:text-primary transition-colors">Patterns Labs',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Enterprise Solutions': 'to="/products/enterprise-solutions" className="text-sm text-secondary hover:text-primary transition-colors">Enterprise Solutions',
  // Industries
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Manufacturing': 'to="/industries/manufacturing" className="text-sm text-secondary hover:text-primary transition-colors">Manufacturing',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Healthcare': 'to="/industries/healthcare" className="text-sm text-secondary hover:text-primary transition-colors">Healthcare',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Education': 'to="/industries/education" className="text-sm text-secondary hover:text-primary transition-colors">Education',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Retail': 'to="/industries/retail" className="text-sm text-secondary hover:text-primary transition-colors">Retail',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Hospitality': 'to="/industries/hospitality" className="text-sm text-secondary hover:text-primary transition-colors">Hospitality',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Construction': 'to="/industries/construction" className="text-sm text-secondary hover:text-primary transition-colors">Construction',
  // Solutions
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Operations': 'to="/solutions/operations" className="text-sm text-secondary hover:text-primary transition-colors">Operations',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Sales & CRM': 'to="/solutions/sales-crm" className="text-sm text-secondary hover:text-primary transition-colors">Sales & CRM',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Finance': 'to="/solutions/finance" className="text-sm text-secondary hover:text-primary transition-colors">Finance',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Predictive maintenance': 'to="/solutions/predictive-maintenance" className="text-sm text-secondary hover:text-primary transition-colors">Predictive maintenance',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Customer intelligence': 'to="/solutions/customer-intelligence" className="text-sm text-secondary hover:text-primary transition-colors">Customer intelligence',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Compliance': 'to="/solutions/compliance" className="text-sm text-secondary hover:text-primary transition-colors">Compliance',
  // Resources
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Documentation': 'to="/resources/documentation" className="text-sm text-secondary hover:text-primary transition-colors">Documentation',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Customer stories': 'to="/resources/customer-stories" className="text-sm text-secondary hover:text-primary transition-colors">Customer stories',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Newsroom': 'to="/resources/newsroom" className="text-sm text-secondary hover:text-primary transition-colors">Newsroom',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Security': 'to="/resources/security" className="text-sm text-secondary hover:text-primary transition-colors">Security',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Status': 'to="/resources/status" className="text-sm text-secondary hover:text-primary transition-colors">Status',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Support': 'to="/resources/support" className="text-sm text-secondary hover:text-primary transition-colors">Support',
  // Company
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">About': 'to="/company/about" className="text-sm text-secondary hover:text-primary transition-colors">About',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Careers': 'to="/company/careers" className="text-sm text-secondary hover:text-primary transition-colors">Careers',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Leadership': 'to="/company/leadership" className="text-sm text-secondary hover:text-primary transition-colors">Leadership',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Partners': 'to="/company/partners" className="text-sm text-secondary hover:text-primary transition-colors">Partners',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Investors': 'to="/company/investors" className="text-sm text-secondary hover:text-primary transition-colors">Investors',
  'href="#" className="text-sm text-secondary hover:text-primary transition-colors">Contact': 'to="/company/contact" className="text-sm text-secondary hover:text-primary transition-colors">Contact',
  
  // Legal
  'href="#" className="hover:text-gray-300 transition-colors">Privacy': 'to="/privacy" className="hover:text-gray-300 transition-colors">Privacy',
  'href="#" className="hover:text-gray-300 transition-colors">Terms': 'to="/terms" className="hover:text-gray-300 transition-colors">Terms',
  'href="#" className="hover:text-gray-300 transition-colors">Cookies': 'to="/cookies" className="hover:text-gray-300 transition-colors">Cookies',
  'href="#" className="hover:text-gray-300 transition-colors">Trust Center': 'to="/trust-center" className="hover:text-gray-300 transition-colors">Trust Center',
  'href="#" className="hover:text-gray-300 transition-colors">Accessibility': 'to="/accessibility" className="hover:text-gray-300 transition-colors">Accessibility'
};

for (const [key, val] of Object.entries(replacements)) {
  footerContent = footerContent.replace(key, val);
}

// Convert <a> to <Link> for internal links, except for social links which we leave as <a>
footerContent = footerContent.replace(/<a to=/g, '<Link to=');
footerContent = footerContent.replace(/<\/a><\/li>/g, '</Link></li>');
footerContent = footerContent.replace(/<\/a>\n              <a to="\/terms"/, '</Link>\n              <Link to="/terms"');
footerContent = footerContent.replace(/<\/a>\n              <a to="\/cookies"/, '</Link>\n              <Link to="/cookies"');
footerContent = footerContent.replace(/<\/a>\n              <a to="\/trust-center"/, '</Link>\n              <Link to="/trust-center"');
footerContent = footerContent.replace(/<\/a>\n              <a to="\/accessibility"/, '</Link>\n              <Link to="/accessibility"');
footerContent = footerContent.replace(/>Accessibility<\/a>/, '>Accessibility</Link>');

fs.writeFileSync(footerPath, footerContent);
console.log('Footer links updated!');
