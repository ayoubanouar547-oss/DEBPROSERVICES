const fs = require('fs');
const pages = [
  'app/chauffagiste-grimbergen/page.tsx',
  'app/debouchage-grimbergen/page.tsx',
  'app/electricien-grimbergen/page.tsx',
  'app/installateur-vmc/page.tsx',
  'app/loodgieter-grimbergen/page.tsx',
  'app/plombier-bruxelles/page.tsx',
  'app/plombier-grimbergen/page.tsx',
  'app/plombier-liege/page.tsx',
  'app/plombier-woluwe/page.tsx',
  'app/recherche-de-fuite-bruxelles/page.tsx',
  'app/vidange-fosse-septique-liege/page.tsx'
];

pages.forEach(p => {
  const code = fs.readFileSync(p, 'utf8');
  console.log('-------------------', p);
  const titleMatch = code.match(/title:\s*["`']([^"`']+)["`']/);
  const descMatch = code.match(/description:\s*["`']([^"`']+)["`']/);
  if (titleMatch) console.log('TITLE (' + titleMatch[1].length + ' chars): ' + titleMatch[1]);
  if (descMatch) console.log('DESC  (' + descMatch[1].length + ' chars): ' + descMatch[1]);
});
