var http = require("http");
var url = require("url");
var path = require("path");
var server = http.createServer(function (request, response) {
    var urlObj = url.parse(request.url, true);//获取url中search true:{key:value,key:value} false:key=value&key=value
    var val=urlObj.query.callback;
    var json = JSON.stringify({name:"123",content:"china"});
    response.end(val+'('+json+')');
});
server.listen(8080, function () {
    console.log("start");
});