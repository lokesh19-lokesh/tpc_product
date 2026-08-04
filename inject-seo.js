import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function generateMetadata(filename, dirName, componentName) {
  let title = componentName.replace(/([A-Z])/g, ' $1').trim();
  let description = `Learn more about ${title} at The Patterns Company. We provide enterprise solutions for ${dirName}.`;
  
  // Format URL path based on App.tsx routes
  let urlBase = dirName === 'pages' ? '' : dirName;
  // Convert PascalCase to kebab-case
  let kebabName = componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  
  let urlPath = `/${urlBase ? urlBase + '/' : ''}${kebabName}`;
  if(urlPath === '/home' || urlPath === '/-home') urlPath = '/';
  
  let keywords = `${title}, The Patterns Company, AI, enterprise solutions, ${dirName}`;
  
  // Custom tweaks based on directory
  if (dirName === 'products') {
    description = `Discover ${title}, our enterprise AI product designed to scale your operations, automate workflows, and drive intelligence.`;
    keywords = `${title}, AI product, enterprise AI, The Patterns Company, artificial intelligence platform`;
  } else if (dirName === 'industries') {
    description = `The Patterns Company provides powerful AI solutions tailored for the ${title} industry to optimize processes and increase efficiency.`;
    keywords = `${title} AI solutions, enterprise AI for ${title}, The Patterns Company ${title}, data intelligence`;
  } else if (dirName === 'solutions') {
    description = `Explore our ${title} solutions to accelerate digital transformation, ensure compliance, and build robust enterprise architectures.`;
    keywords = `${title} solutions, digital transformation, AI for ${title}, enterprise architecture`;
  } else if (dirName === 'legal') {
    description = `Read the ${title} for The Patterns Company. We are committed to transparency, privacy, and compliance.`;
  } else if (dirName === 'company') {
    description = `Learn more about The Patterns Company: our mission, leadership, and careers. Join us in building the future of AI.`;
  }
  
  return { title, description, urlPath, keywords };
}

walkDir('./src/pages', (filePath) => {
  if (!filePath.endsWith('.tsx')) return;
  if (filePath.includes('LegalLayout.tsx')) return; // skip layout component
  
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('<SEO')) return; // skip if already injected
  
  let filename = path.basename(filePath);
  let dirName = path.basename(path.dirname(filePath));
  let componentName = filename.replace('.tsx', '');
  
  let { title, description, urlPath, keywords } = generateMetadata(filename, dirName, componentName);
  
  // Determine relative path to SEO.tsx
  let relativePath = '';
  if (dirName === 'pages') relativePath = '../components/seo/SEO';
  else relativePath = '../../components/seo/SEO';

  let importStatement = `import { SEO } from '${relativePath}';\n`;
  
  // Insert import below existing imports, or at the top
  // We'll just put it at the very top.
  content = importStatement + content;
  
  // Find where to inject `<SEO>`
  // Typically, a component returns something like:
  // return (
  //   <div className="...">
  // OR
  // return (
  //   <LegalLayout ...>
  // OR
  // return (
  //   <>
  // OR
  // return <main>
  
  // Regex to match "return (" followed by whitespace, then `<` and a tag name or `>`
  const regex = /return\s*\(\s*(<[a-zA-Z]*[^>]*>)/;
  let match = content.match(regex);
  
  if (match) {
    let insertion = `\n      <SEO \n        title="${title}" \n        description="${description}" \n        keywords="${keywords}"\n        path="${urlPath}" \n      />`;
    
    let newContent = content.slice(0, match.index + match[0].length) + insertion + content.slice(match.index + match[0].length);
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated ${filePath}`);
  } else {
    // Try matching return without parenthesis
    const regex2 = /return\s*(<[a-zA-Z]*[^>]*>)/;
    let match2 = content.match(regex2);
    if (match2) {
      let insertion = `\n      <SEO \n        title="${title}" \n        description="${description}" \n        keywords="${keywords}"\n        path="${urlPath}" \n      />`;
      let newContent = content.slice(0, match2.index + match2[0].length) + insertion + content.slice(match2.index + match2[0].length);
      fs.writeFileSync(filePath, newContent);
      console.log(`Updated ${filePath}`);
    } else {
      console.log(`Could not find insertion point in ${filePath}`);
    }
  }
});
