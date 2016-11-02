"use strict";

var fs = require("fs");
//fs.readFile("data.json","UTF-8",function(error,data){
//    if(error){
//        console.log(error);
//    }
//    else{
//        console.log(data);
//    }
//});

var data = fs.readFileSync("data.json", "utf-8");
console.log(data);
console.log("end");

//# sourceMappingURL=1-compiled.js.map