var http=require("http");
http.createServer(function(request,responsed){
    responsed.writeHead(200,{"Content-Type":"text/plain"});
    responsed.end("hello");
}).listen("8888");
console.log("server start");