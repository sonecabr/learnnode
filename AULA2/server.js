//importa a lib de http
var http = require('http');

http.createServer(function(request, response){
    var method = request.method;
    if(method === 'GET'){
        response.end('\nVoce fez uma requisicao do tipo GET\n');
    }
    if(method === 'POST'){
        response.end('\nVoce fez uma requisição do tipo POST\n');
    }
    if(method === 'PUT'){
        response.end('\nVoce fez uma requisição do tipo PUT\n');
    }
    if(method === 'DELETE'){
        response.end('\nVoce fez uma requisição do tipo DELETE\n');
    }
}).listen(8080);
