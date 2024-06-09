const fs = require('fs');
const axios = require('axios');

function cat(path) {
  fs.readFile('one.txt', 'utf8', function(err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
    } else {
      console.log(data);
    }
  });
}

async function webCat(url) {
    try {
        let resp = await axios.get('https://www.google.com/');
        console.log(resp.data);
    } catch (err) {
        console.error(`Error fetching ${url}: ${err}`);
    }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}