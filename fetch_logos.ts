import https from 'https';
import http from 'http';

const urls = [
  'https://ottawa.ca/en',
  'https://www.bgcottawa.org/',
  'https://nzfcanada.com/',
  'https://www.casott.on.ca/',
  'https://tarbiyahlearning.ca/',
  'https://humanconcern.org/',
  'https://hosacounselling.com/',
  'https://www.pqchc.com/',
  'https://www.rubikscounsellingservices.com/'
];

function fetchUrl(url: string): Promise<{url: string, logo: string}> {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const logoMatch = data.match(/<img[^>]+src=["']([^"'>]+logo[^"'>]+)["']/i) || data.match(/<img[^>]+src=["']([^"'>]+)["'][^>]*class=["'][^"']*logo[^"']*["']/i);
        resolve({ url, logo: logoMatch ? logoMatch[1] : 'Not found' });
      });
    }).on('error', () => resolve({ url, logo: 'Error' }));
  });
}

Promise.all(urls.map(fetchUrl)).then(results => {
  console.log(JSON.stringify(results, null, 2));
});
