import https from 'https';

const ids = [
  '1594708767771-a7502209ff51',
  '1576769267415-9642010aa962',
  '1607748862156-7c548e7e98f4',
  '1531206715517-5c0ba140b2b8',
  '1588681664899-f142ff2dc9b1',
  '1590080875515-8a3a8dc5735e',
  '1559027615-cd4628902d4a',
  '1469571486292-0ba58a3f068b',
  '1577415124269-b9140d53d2e5'
];

ids.forEach(id => {
  const url = `https://images.unsplash.com/photo-${id}?w=10`;
  https.get(url, (res) => {
    console.log(`${id}: ${res.statusCode}`);
  }).on('error', (e) => {
    console.error(`${id}: ${e.message}`);
  });
});
