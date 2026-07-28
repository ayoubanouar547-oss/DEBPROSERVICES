const fs = require('fs');

let content = fs.readFileSync('components/pdf/DevisDocument.tsx', 'utf8');

const regex = /\bshadow(-[a-z2]+)?\b/g;
content = content.replace(regex, '');

fs.writeFileSync('components/pdf/DevisDocument.tsx', content);
console.log('Shadows removed!');
