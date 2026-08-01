import fs from 'fs';
import path from 'path';

const navbarPath = path.join(process.cwd(), 'src/components/layout/Navbar.tsx');
let navbarContent = fs.readFileSync(navbarPath, 'utf8');

if (!navbarContent.includes(`import { Link }`)) {
  navbarContent = navbarContent.replace(`import './Navbar.css';`, `import { Link, useNavigate } from 'react-router-dom';\nimport './Navbar.css';`);
}

const replacements = {
  // Products dropdown
  'href="#" className="product-item"': 'to="/products/patterns-os" className="product-item"',
  'href="#" className="product-item"': 'to="/products/mint-leaf-ai" className="product-item"',
  'href="#" className="product-item"': 'to="/products/yestick" className="product-item"',
  'href="#" className="product-item"': 'to="/products/pick-my-school-ai" className="product-item"',
  'href="#" className="product-item"': 'to="/products/patterns-labs" className="product-item"',
  'href="#" className="product-item"': 'to="/products/enterprise-solutions" className="product-item"',
  
  // Solutions
  'href="#" className="solution-item"': 'to="/solutions/operations" className="solution-item"',
  'href="#" className="solution-item"': 'to="/solutions/sales-crm" className="solution-item"',
  'href="#" className="solution-item"': 'to="/solutions/finance" className="solution-item"',
  'href="#" className="solution-item"': 'to="/solutions/predictive-maintenance" className="solution-item"',
  'href="#" className="solution-item"': 'to="/solutions/customer-intelligence" className="solution-item"',
  'href="#" className="solution-item"': 'to="/solutions/compliance" className="solution-item"',
  
  // Company
  'href="#" className="solution-item"': 'to="/company/about" className="solution-item"',
  'href="#" className="solution-item"': 'to="/company/careers" className="solution-item"',
  'href="#" className="solution-item"': 'to="/company/newsroom" className="solution-item"',

  // Buttons
  '<button className="btn-ghost text-sm">Sign in</button>': '<Link to="/sign-in"><button className="btn-ghost text-sm">Sign in</button></Link>',
  '<button className="btn-primary text-sm">Book Demo</button>': '<Link to="/book-demo"><button className="btn-primary text-sm">Book Demo</button></Link>',

  // Featured
  'href="#" className="text-sm font-semibold text-primary border-b border-primary pb-1 inline-block hover:text-green hover:border-green transition-colors"': 'to="/resources/newsroom" className="text-sm font-semibold text-primary border-b border-primary pb-1 inline-block hover:text-green hover:border-green transition-colors"',
  
  // Logo home link
  '<a href="/" className="flex items-center z-10">': '<Link to="/" className="flex items-center z-10">',
  '</a>': '</Link>',
  
  // Top level dropdown links
  '<a href="#products"': '<Link to="#"',
  '<a href="#solutions"': '<Link to="#"',
  '<a href="#industries"': '<Link to="/industries/manufacturing"',
  '<a href="#customers"': '<Link to="/resources/customer-stories"',
  '<a href="#resources"': '<Link to="/resources/documentation"',
  '<a href="#company"': '<Link to="#"'
};

// Handle multiple identical replacements correctly by splitting and joining
let parts;

// Products
parts = navbarContent.split('href="#" className="product-item"');
if (parts.length === 7) {
  navbarContent = parts[0] + 'to="/products/patterns-os" className="product-item"' + parts[1] + 'to="/products/mint-leaf-ai" className="product-item"' + parts[2] + 'to="/products/yestick" className="product-item"' + parts[3] + 'to="/products/pick-my-school-ai" className="product-item"' + parts[4] + 'to="/products/patterns-labs" className="product-item"' + parts[5] + 'to="/products/enterprise-solutions" className="product-item"' + parts[6];
}

// Solutions
parts = navbarContent.split('href="#" className="solution-item"');
// First 6 are solutions, last 3 are company
if (parts.length === 10) {
  navbarContent = parts[0] + 'to="/solutions/operations" className="solution-item"' + parts[1] + 
                  'to="/solutions/sales-crm" className="solution-item"' + parts[2] + 
                  'to="/solutions/finance" className="solution-item"' + parts[3] + 
                  'to="/solutions/predictive-maintenance" className="solution-item"' + parts[4] + 
                  'to="/solutions/customer-intelligence" className="solution-item"' + parts[5] + 
                  'to="/solutions/compliance" className="solution-item"' + parts[6] + 
                  'to="/company/about" className="solution-item"' + parts[7] + 
                  'to="/company/careers" className="solution-item"' + parts[8] + 
                  'to="/company/newsroom" className="solution-item"' + parts[9];
}

navbarContent = navbarContent.replace('<a href="/" className="flex items-center z-10">', '<Link to="/" className="flex items-center z-10">');
// Since I just replaced the start, I need to replace the specific closing tag.
navbarContent = navbarContent.replace('<img src="/logo.png" alt="The Patterns Company" className="logo-img" />\n        </a>', '<img src="/logo.png" alt="The Patterns Company" className="logo-img" />\n        </Link>');

navbarContent = navbarContent.replace('<a href="#products"', '<Link to="#"');
navbarContent = navbarContent.replace('<a href="#solutions"', '<Link to="#"');
navbarContent = navbarContent.replace('<a href="#industries"', '<Link to="/industries/manufacturing"');
navbarContent = navbarContent.replace('<a href="#customers"', '<Link to="/resources/customer-stories"');
navbarContent = navbarContent.replace('<a href="#resources"', '<Link to="/resources/documentation"');
navbarContent = navbarContent.replace('<a href="#company"', '<Link to="#"');

// Also update the featured link
navbarContent = navbarContent.replace('href="#" className="text-sm font-semibold text-primary border-b border-primary pb-1 inline-block hover:text-green hover:border-green transition-colors"', 'to="/company/newsroom" className="text-sm font-semibold text-primary border-b border-primary pb-1 inline-block hover:text-green hover:border-green transition-colors"');

// And buttons
navbarContent = navbarContent.replace('<button className="btn-ghost text-sm">Sign in</button>', '<Link to="/sign-in"><button className="btn-ghost text-sm">Sign in</button></Link>');
navbarContent = navbarContent.replace('<button className="btn-primary text-sm">Book Demo</button>', '<Link to="/book-demo"><button className="btn-primary text-sm">Book Demo</button></Link>');

// Convert all remaining internal <a to=...> to <Link>
navbarContent = navbarContent.replace(/<a to=/g, '<Link to=');

// Fix closing tags for dropdown triggers and nav links
navbarContent = navbarContent.replace(/<\/svg>\n            <\/a>/g, '</svg>\n            </Link>');
navbarContent = navbarContent.replace(/className="nav-link">Industries<\/a>/g, 'className="nav-link">Industries</Link>');
navbarContent = navbarContent.replace(/className="nav-link">Customers<\/a>/g, 'className="nav-link">Customers</Link>');
navbarContent = navbarContent.replace(/className="nav-link">Resources<\/a>/g, 'className="nav-link">Resources</Link>');
navbarContent = navbarContent.replace(/<\/div>\n                  <\/a>/g, '</div>\n                  </Link>');
navbarContent = navbarContent.replace(/<\/div>\n                    <\/a>/g, '</div>\n                    </Link>');
navbarContent = navbarContent.replace(/<\/a>\n                <\/div>/g, '</Link>\n                </div>');

fs.writeFileSync(navbarPath, navbarContent);
console.log('Navbar links updated!');
