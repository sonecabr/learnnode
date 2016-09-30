//importa a lib de http
var http = require('http');
var url = require('url');
var qs = require('querystring');


http.createServer(function(request, response){
    var method = request.method;
    if(method === 'GET'){
        urlParts = url.parse(request.url, true);
        nome = urlParts.query.nome;
        idade = parseInt(urlParts.query.idade);
        if(idade > 30){
            response.end('\nOI '+ nome +', Voce fez uma requisicao do tipo GET e voce e velho\n');
        } else {
            response.end('\nOI '+ nome +', Voce fez uma requisicao do tipo GET e voce e novo\n');
        }

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
