var http = require('http');

http.createServer((req,res)=>{
    res.write('hello world')
    res.end()
}).listen(8888)

console.log("server connected to port")