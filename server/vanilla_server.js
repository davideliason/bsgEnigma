var http = require('http');
var url = require("url");

var server = http.createServer(function(req, res) {
	var page = url.parse(req.url).pathname;
	var all_req = url.parse(req.url);
	console.log(page);
	console.log(all_req);

	res.writeHead(200, {"Content-Type": "text/html"});
	res.write('hello world');
	res.end();
    });


server.listen(8080);

