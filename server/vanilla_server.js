var http = require('http');
var url = require("url");

var server = http.createServer(function(req, res) {
	var page = url.parse(req.url).pathname;
	var all_req = url.parse(req.url);
	console.log(page);
	console.log(all_req);

	res.writeHead(200, {"Content-Type": "text/html"});
	if(page == '/'){
		res.write("home");
	}
	else if(page == '/hello'){
		res.write("hello to you too");
	}
	res.end();
    });


server.listen(8080);

