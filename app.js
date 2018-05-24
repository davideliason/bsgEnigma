var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
const generatePassword = require('password-generator');

// var comment = require('./routes/comment');
var app = express();

// MIDDLEWARE
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

// router route
// app.use('/api/comments', comment);

app.get('/api/comments', (req,res) => {
	// this is where i would populate via database & server
	// but for now just hard-code
	const comments = ["one","two"];
	res.json(comments);
})

app.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )
  // Return them as json
  res.json(passwords);
});
// catchall route handler

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});



const port = process.env.PORT || 5000;

app.listen(port, function() {
	console.log(`Server listening on ${port}`);
});