"use strict";

var http = require("http");
http.createServer(function (request, responsed) {
    responsed.writeHead(200, { "Content-Type": "text/plain" });
    responsed.end("hello Worldddd\n");
}).listen("8888");
console.log("server running 8888");

//# sourceMappingURL=1-compiled.js.map