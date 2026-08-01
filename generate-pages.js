import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');

const pagesToCreate = [
  // Products
  { path: 'products/PatternsOS.tsx', name: 'PatternsOS' },
  { path: 'products/MintLeafAI.tsx', name: 'MintLeafAI' },
  { path: 'products/YesTick.tsx', name: 'YesTick' },
  { path: 'products/PickMySchoolAI.tsx', name: 'PickMySchoolAI' },
  { path: 'products/PatternsLabs.tsx', name: 'PatternsLabs' },
  { path: 'products/EnterpriseSolutions.tsx', name: 'EnterpriseSolutions' },
  // Industries
  { path: 'industries/Manufacturing.tsx', name: 'Manufacturing' },
  { path: 'industries/Healthcare.tsx', name: 'Healthcare' },
  { path: 'industries/Education.tsx', name: 'Education' },
  { path: 'industries/Retail.tsx', name: 'Retail' },
  { path: 'industries/Hospitality.tsx', name: 'Hospitality' },
  { path: 'industries/Construction.tsx', name: 'Construction' },
  // Solutions
  { path: 'solutions/Operations.tsx', name: 'Operations' },
  { path: 'solutions/SalesCRM.tsx', name: 'SalesCRM' },
  { path: 'solutions/Finance.tsx', name: 'Finance' },
  { path: 'solutions/PredictiveMaintenance.tsx', name: 'PredictiveMaintenance' },
  { path: 'solutions/CustomerIntelligence.tsx', name: 'CustomerIntelligence' },
  { path: 'solutions/Compliance.tsx', name: 'Compliance' },
  // Resources
  { path: 'resources/Documentation.tsx', name: 'Documentation' },
  { path: 'resources/CustomerStories.tsx', name: 'CustomerStories' },
  { path: 'resources/Security.tsx', name: 'Security' },
  { path: 'resources/Status.tsx', name: 'Status' },
  { path: 'resources/Support.tsx', name: 'Support' },
  // Company
  { path: 'company/About.tsx', name: 'About' },
  { path: 'company/Careers.tsx', name: 'Careers' },
  { path: 'company/Leadership.tsx', name: 'Leadership' },
  { path: 'company/Partners.tsx', name: 'Partners' },
  { path: 'company/Investors.tsx', name: 'Investors' },
  { path: 'company/Contact.tsx', name: 'Contact' },
  { path: 'company/Newsroom.tsx', name: 'Newsroom' }, // used by both Company and Resources
  // Legal/Other
  { path: 'legal/Privacy.tsx', name: 'Privacy' },
  { path: 'legal/Terms.tsx', name: 'Terms' },
  { path: 'legal/Cookies.tsx', name: 'Cookies' },
  { path: 'legal/TrustCenter.tsx', name: 'TrustCenter' },
  { path: 'legal/Accessibility.tsx', name: 'Accessibility' },
  { path: 'auth/SignIn.tsx', name: 'SignIn' },
  { path: 'auth/BookDemo.tsx', name: 'BookDemo' },
];

function generateComponentTemplate(name) {
  return `export function ${name}() {
  return (
    <main style={{ padding: '8rem 2rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>${name}</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>This page is currently under construction.</p>
    </main>
  );
}
`;
}

pagesToCreate.forEach(page => {
  const fullPath = path.join(pagesDir, page.path);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, generateComponentTemplate(page.name));
});

console.log('Pages generated successfully!');
