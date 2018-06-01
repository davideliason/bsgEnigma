var http = require('http');

var server = http.createServer(function(req,res) {
	res.writeHead(200,{"Content-Type" : "text/html"});
	res.end("<h3>BSG Enigma</h3>");
});

server.listen(8080);