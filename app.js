var express = require('express');
var app = express();
var path = require('path');

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.sendFile(path.join(__dirname,'./index.html'));
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST req");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/react', function (req, res) {
   console.log("React client");
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on


app.listen(3000, function () {

   console.log("Server listening at 3000");
});
