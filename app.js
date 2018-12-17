
var express = require('express');
var fs = require('fs');

var app = new express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    fs.readFile(__dirname +'/products.json', 'utf8', (err, file) => {
        console.log(JSON.parse(file));
        res.render('public/index', {products: JSON.parse(file)});
    });
});

// about page 
app.get('/oder-by-id/:id', function(req, res) {
    console.log(req.params.id);
    res.send("ok ok");
});

app.listen(8080);
console.log('8080 is the magic port');