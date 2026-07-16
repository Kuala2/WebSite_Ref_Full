import fs from 'fs';
import https from 'https';

const content = fs.readFileSync('src/constants/data.ts', 'utf8');
// also check page.tsx
const content2 = fs.readFileSync('src/app/page.tsx', 'utf8');

const allContent = content + content2;
const urls = [...new Set(allContent.match(/https:\/\/images\.unsplash\.com\/photo-[^?"' ]+/g) || [])];

console.log(`Checking ${urls.length} URLs...`);

async function checkUrl(url) {
  return new Promise((resolve) => {
    const reqUrl = url.includes('?') ? url : `${url}?w=10`; // just to ping
    https.get(reqUrl, (res) => {
      resolve({ url, status: res.statusCode, location: res.headers.location });
    }).on('error', (e) => {
      resolve({ url, status: 'error', error: e.message });
    });
  });
}

async function main() {
  const results = await Promise.all(urls.map(checkUrl));
  const bad = results.filter(r => r.status !== 200 && r.status !== 302 && r.status !== 301);
  if (bad.length > 0) {
    console.log('Bad URLs found:');
    console.log(bad);
  } else {
    console.log('All URLs are HTTP 200/302.');
  }
}

main();
