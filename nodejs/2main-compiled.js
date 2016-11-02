"use strict";

var fs = require("fs");

fs.readFile("input.txt", function (err, data) {
    if (err) {
        console.log("err:" + err);
    }
    console.log("data:" + data);
});
console.log("end");

//# sourceMappingURL=2main-compiled.js.map