var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var comment = require('./routes/comment');
var app = express();

// MIDDLEWARE
// app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));

// router route
app.use('/api/comment', comment);
// plain route
app.get('/', (req,res) => {
	res.json("hello");
});
// catchall route handler
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

const port = process.env.PORT || 5000;

app.listen(port, function() {
	console.log(`Server listening on ${port}`);
});