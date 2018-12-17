var fs = require('fs');

var file = 'products.json';
fs.readFile(`${__dirname}/${file}`, 'utf8', (err, file) => {
    console.log(err, file);
});