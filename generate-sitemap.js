import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const domain = 'https://thepatternscompany.com';
let urls = [];

walkDir('./src/pages', (filePath) => {
  if (!filePath.endsWith('.tsx')) return;
  if (filePath.includes('LegalLayout.tsx')) return; // skip layout component
  
  let filename = path.basename(filePath);
  let dirName = path.basename(path.dirname(filePath));
  let componentName = filename.replace('.tsx', '');
  
  let urlBase = dirName === 'pages' ? '' : dirName;
  let kebabName = componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  
  let urlPath = `/${urlBase ? urlBase + '/' : ''}${kebabName}`;
  if(urlPath === '/home' || urlPath === '/-home') urlPath = '/';
  
  urls.push(`${domain}${urlPath}`);
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>\n    <loc>${url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${url === domain + '/' ? '1.0' : '0.8'}</priority>\n  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync('./public/sitemap.xml', sitemap);
console.log('Generated public/sitemap.xml');

const robots = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;

fs.writeFileSync('./public/robots.txt', robots);
console.log('Generated public/robots.txt');
