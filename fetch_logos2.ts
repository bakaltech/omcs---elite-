import https from 'https';
import http from 'http';

const urls = [
  'https://ottawa.ca/en',
  'https://nzfcanada.com/',
  'https://www.casott.on.ca/',
  'https://tarbiyahlearning.ca/',
  'https://humanconcern.org/',
  'https://hosacounselling.com/'
];

function fetchUrl(url: string): Promise<{url: string, logo: string}> {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Look for og:image or any image with logo in the name
        const ogMatch = data.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) || data.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
        const logoMatch = data.match(/<img[^>]+src=["']([^"'>]+logo[^"'>]+)["']/i);
        resolve({ url, logo: logoMatch ? logoMatch[1] : (ogMatch ? ogMatch[1] : 'Not found') });
      });
    }).on('error', () => resolve({ url, logo: 'Error' }));
  });
}

Promise.all(urls.map(fetchUrl)).then(results => {
  console.log(JSON.stringify(results, null, 2));
});
