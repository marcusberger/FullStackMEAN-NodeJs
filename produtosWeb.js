var http = require('http');

http.createServer(function(req, res){
	if(req.url == "/produtos"){
	res.end("<h1>listando produtos</h1>");
} else{
	res.end("<h1>Home Casa do Código</h1>");
}

}).listen(3000, "localhost");

console.log("servidor rodando");





