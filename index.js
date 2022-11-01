const express = require('express');
const ejs = require('ejs');

var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen(4000);

app.get('/', function(req, res) {
    res.render('pages/index');
});
