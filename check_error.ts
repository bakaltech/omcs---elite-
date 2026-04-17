import puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  
  console.log('Navigating to home...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
  
  console.log('Clicking Resources link...');
  await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a'));
    const resourceLink = links.find(a => a.textContent?.includes('Resources'));
    if (resourceLink) {
      resourceLink.click();
    } else {
      console.log('Could not find Resources link');
    }
  });
  
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const opacity = await page.evaluate(() => {
    const mainDiv = document.querySelector('main > div');
    if (!mainDiv) return 'No main > div';
    return window.getComputedStyle(mainDiv).opacity;
  });
  console.log('Opacity of main > div:', opacity);
  
  await browser.close();
}

run().catch(console.error);
