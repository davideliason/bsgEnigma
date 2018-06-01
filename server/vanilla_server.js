var http = require('http');
var url = require("url");
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
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


server.listen(8080);

