var express = require('express');
var app 	= express();
var path 	= require('path');

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("got a GET request");
   res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.get('/coffee', function(req,res){
	res.setHeader(200,{'Content-Type': 'text/plain'});
	res.end("need some caffeine");
});

app.get('/water', (req,res) => {
	res.setHeader({"Content-Type": "text/plain"});
	res.end('only if there is no coffee');
});

app.get('/drink/:beverage', (req,res) => {
	res.setHeader('Content-Type', 'text/plain');
	res.end('You\'re drinking ' + req.params.beverage);
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    // res.send(404, 'Page cannot be found!'); // deprec.
    res.status(404).send('Page can\'t be found');
});



app.listen(8080, function () {
   console.log("Server listening at 8080");
});
