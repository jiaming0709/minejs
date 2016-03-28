//for (var i = 0; i < 3; i++) {
//    setTimeout(function () {
//        alert(i);
//    })
//}

for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        alert(i);
    })
}

for (var i = 0; i < 2; i++) {
    cousole.log("out"+i);
    for(var i=0;i<2;i++){
        cousole.log("in"+i);
    }
}