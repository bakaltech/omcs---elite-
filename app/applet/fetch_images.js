const https = require('https');

https.get('https://unsplash.com/napi/search/photos?query=muslim+volunteer&per_page=10', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      json.results.forEach(r => console.log(r.urls.raw));
    } catch (e) {
      console.error(e);
    }
  });
});
