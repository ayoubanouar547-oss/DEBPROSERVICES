import { getSitemapEntries } from './lib/sitemap-utils';
const entries = getSitemapEntries();
console.log("Total entries:", entries.length);
console.log("Total URLs generated:", entries.length * 2);
