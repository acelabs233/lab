var http = require('http');
var fs   = require('fs');
var server = http.createServer(function(req, res){
    fs.readFile('img.jpg', function(err, data){
        res.writeHead(200, {'Content-Type':'image/jpeg'});
        res.write(data);
        return res.end();
    });

});


server.listen(8888);
console.log("listening on 8888");