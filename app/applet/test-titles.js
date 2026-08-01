const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file === 'page.tsx' || file === 'layout.tsx') {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk('app');
files.forEach(f => {
  const code = fs.readFileSync(f, 'utf8');
  console.log('===', f);
  const titleMatches = code.match(/title:\s*[`"']([^`"']+)[`"']/g);
  const descMatches = code.match(/description:\s*[`"']([^`"']+)[`"']/g);
  if (titleMatches) {
    titleMatches.forEach(t => console.log('  ' + t));
  }
  if (descMatches) {
    descMatches.forEach(d => console.log('  ' + d));
  }
});
