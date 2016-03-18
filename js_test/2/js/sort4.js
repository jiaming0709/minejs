var xhr = new XMLHttpRequest();
xhr.open("get", "json/data.txt", true);
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && /^2\d{2}$/.test(this.status)) {
        var val = eval("(" + this.responseText + ")");
        console.log(val);
        bind(val);
    }
};
xhr.send();


var table = document.getElementById("table");
var tHead = table.tHead;
var ths = tHead.rows[0].cells;
var tBody = table.tBodies[0];
var trs = tBody.rows;


function bind(data) {
    var frg = document.createDocumentFragment();
    for (var i = 0; i < data.length; i++) {
        var tr = document.createElement("tr");
        for (key in data[i]) {
            var td = document.createElement("td");
            td.innerHTML = key == "sex" ? (data[i][key] == 1 ? "女" : "男") : data[i][key];
            tr.appendChild(td);

        }
        frg.appendChild(tr);
    }
    tBody.appendChild(frg);
    frg = null;
}

function sort(index) {
    var _this = this;
    _this.flag *= -1;
    for (var j = 0; j < ths.length; j++) {
        if (j != index) {
            ths[j].flag = -1;
        }
    }
    var ary = Array.prototype.slice.call(trs);
    ary.sort(function (a, b) {
        var ina = a.cells[index].innerHTML;
        var inb = b.cells[index].innerHTML;
        return (parseFloat(ina) - parseFloat(inb)) * _this.flag;
    });
    console.log(ary);

    var frg = document.createDocumentFragment();
    for (var i = 0; i < ary.length; i++) {
        frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);
    frg = null;
}

for (var i = 0; i < ths.length; i++) {
    (function (i) {
        ths[i].flag = -1;
        ths[i].onclick = function () {
            sort.call(this, i);
        }
    })(i)
}


//作用:
//如:fn.call();
//1.让Function.prototype.call()方法执行,将fn方法中的this变为call的第一个参数
//2.让fn方法执行

//区别:
//call方法可以有多个参数,第一个参数为fn的this,第二个开始以后的参数是fn中的参数
//apply只能有两个参数,第二个参数是把要传给fn的参数放到一个数组中


function likeToArray(like_ary) {
    var ary=[];
    try {
        Array.prototype.slice.call(liek_ary,0);
    } catch (e) {
        for(var i=0;i<like_ary.length;i++){
            ary[i]=like_ary[i];
        }
    }
    return ary;
}
