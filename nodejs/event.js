

var http=require("http");
var events=require("events");
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});

    var eventEmitter=new events.EventEmitter();

    eventEmitter.on("connection",connectHandler);
    var connectHandler=function(){
        console.log("连接成功");
        eventEmitter.emit("data_receive");
    };

    eventEmitter.on("data_receive",function(){
        console.log("接收成功");
    });

    eventEmitter.emit("connection");
    console.log("end");

    response.end("hello");
}).listen("8888");
console.log("server start");