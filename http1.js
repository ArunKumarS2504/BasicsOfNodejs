var http = require('http');

var server =  http.createServer(function (req,res){

    if(req.url=='/'){
        res.writeHead(200,{'Content-type' :'text-html'});
        res.write('<html><body><h1></h1></body></html>');
        res.end();
    }
})
server.listen(3002)