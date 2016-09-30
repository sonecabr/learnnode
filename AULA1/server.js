//importa a lib de http
var http = require('http');

http.createServer(function(request, response){
    response.end("{\"probe\":{\"uptime\":\"10days\", \"status\":\"OK\"}}");
}).listen(8080);
