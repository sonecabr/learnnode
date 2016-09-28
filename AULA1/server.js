//importa a lib de http
var http = require('http');

http.createServer(function(request, response){
    response.end("Ola Node!");
}).listen(8080);
