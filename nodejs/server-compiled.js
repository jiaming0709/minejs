"use strict";

var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.end("hello World\n");
}).listen(8888);
console.log("success");

//# sourceMappingURL=server-compiled.js.map