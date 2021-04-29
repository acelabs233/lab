var http = require('http');
var fs   = require('fs');


var server = http.createServer(function(req, res){
    fs.readFile('1.txt', function(err, data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })

});

server.listen(8888,'localhost');
console.log("server is listning on port 8888")
