const fs = require('fs');
let content = fs.readFileSync('components/pdf/DevisDocument.tsx', 'utf8');

const colorMap = {
  'bg-white': 'bg-[#ffffff]',
  'text-white': 'text-[#ffffff]',
  'text-slate-900': 'text-[#0f172a]',
  'text-slate-800': 'text-[#1e293b]',
  'text-slate-700': 'text-[#334155]',
  'text-slate-600': 'text-[#475569]',
  'text-slate-500': 'text-[#64748b]',
  'text-slate-100': 'text-[#f1f5f9]',
  'bg-slate-50': 'bg-[#f8fafc]',
  'border-slate-100': 'border-[#f1f5f9]',
  'border-slate-200': 'border-[#e2e8f0]',
  'bg-sky-50': 'bg-[#f0f9ff]',
  'text-sky-200': 'text-[#bae6fd]',
  'text-sky-300': 'text-[#7dd3fc]',
  'border-sky-200': 'border-[#bae6fd]',
  'border-sky-300': 'border-[#7dd3fc]',
  'border-sky-400': 'border-[#38bdf8]',
  'border-sky-400/40': 'border-[#38bdf866]',
  'text-blue-950': 'text-[#172554]',
  'text-blue-900': 'text-[#1e3a8a]',
  'text-blue-800': 'text-[#1e40af]',
  'text-blue-600': 'text-[#2563eb]',
  'border-blue-600': 'border-[#2563eb]'
};

for (const [key, value] of Object.entries(colorMap)) {
  const regex = new RegExp(`\\b${key}\\b`, 'g');
  content = content.replace(regex, value);
}
const regexShadow = /\bshadow(-[a-z2]+)?\b/g;
content = content.replace(regexShadow, '');
content = content.replace(/drop-shadow-md/g, '');

fs.writeFileSync('components/pdf/DevisDocument.tsx', content);
console.log('Colors and shadows replaced!');
