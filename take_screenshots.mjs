import puppeteer from 'puppeteer';
import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Starting Next.js server...");
const server = exec('npx next dev');

server.stdout.on('data', async (data) => {
  console.log(`[Next.js] ${data.trim()}`);
  if (data.includes('Ready in') || data.includes('compiled client and server successfully')) {
    console.log("Server is ready! Launching Puppeteer...");
    try {
      const browser = await puppeteer.launch({ headless: 'new' });
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });

      const routes = [
        { url: 'http://localhost:3000/', name: 'home' },
        { url: 'http://localhost:3000/uslugi', name: 'services' },
        { url: 'http://localhost:3000/raboty', name: 'gallery' },
        { url: 'http://localhost:3000/o-salone', name: 'about' },
        { url: 'http://localhost:3000/kontakty', name: 'contacts' }
      ];

      for (const route of routes) {
        try {
          console.log(`Navigating to ${route.url}...`);
          await page.goto(route.url, { waitUntil: 'networkidle0', timeout: 15000 });
          const screenshotPath = path.join(__dirname, `screenshot_${route.name}.png`);
          await page.screenshot({ path: screenshotPath, fullPage: true });
          console.log(`Saved screenshot to ${screenshotPath}`);
        } catch (err) {
          console.error(`Failed to screenshot ${route.url}:`, err.message);
        }
      }

      await browser.close();
      console.log("Screenshots done. Killing server...");
      server.kill();
      process.exit(0);
    } catch (e) {
      console.error(e);
      server.kill();
      process.exit(1);
    }
  }
});

server.stderr.on('data', (data) => {
  console.error(`[Next.js Error] ${data.trim()}`);
});
