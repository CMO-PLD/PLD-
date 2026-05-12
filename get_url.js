const https = require('https');
https.get('https://maps.app.goo.gl/nmyuYbL6j1qrd2YA8', (res) => {
  console.log(res.headers.location);
});
