var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var comment = require('./routes/comment');
var app = express();

// MIDDLEWARE

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/comment', comment);

app.listen(3000, function() {
	console.log("server at 3000");
});