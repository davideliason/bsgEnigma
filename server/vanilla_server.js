// modules
var http = require('http');
var url = require("url");
var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;
var mymodule = require('../mymodule');


var server = http.createServer();

server.on("request", function(req, res) {
	var params = querystring.parse(url.parse(req.url).query);
	var page = url.parse(req.url).pathname;
	var all_req = url.parse(req.url);

	console.log(page);
	console.log(all_req);

	console.log(params['firstname']);

	res.writeHead(200, {"Content-Type": "text/html"});
	if(page == '/'){
		res.write("home");
	}
	else if(page == '/hello'){
		res.write("hello to you too");
	}
	else{
		res.writeHead(404);
	}
	res.end();
    });

server.on('close', () => {
	console.log("goodbye");
});

// use my own module

mymodule.sayHello();
mymodule.sayGoodbye();

var testMessage = new EventEmitter();

testMessage.on('testMessage', function(message){
    console.log(message);
});

testMessage.emit('testMessage', 'hello there world!');


server.listen(8080);

server.close();

