var xhr = new XMLHttpRequest();
xhr.open("get", "json/data.txt", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var val = xhr.responseText;
        var data_obj = JSON.parse(val);
        bind_data(data_obj);
    }
}
xhr.send(null);


var table = document.getElementById("table");
var tHead = table.tHead;
var oThs = tHead.rows[0].cells;
var tBody = table.tBodies[0];
var oTrs = tBody.rows;

function bind_data(data) {
    var frg = document.createDocumentFragment();
    for (var i = 0; i < data.length; i++) {
        var cur = data[i];
        var oTr = document.createElement("tr");
        for (var key in cur) {
            var oTd = document.createElement("td");
            oTd.innerHTML = key=="sex"?(cur[key]==0?"女":"男"):cur[key];
            oTr.appendChild(oTd);
        }
        frg.appendChild(oTr);
    }
    tBody.appendChild(frg);
    frg = null;
}
function sort(index) {
    var _this = this;
    _this.flag *= -1;
    for(var j=0;j<oThs.length;j++){
        if(j!=index){
            oThs[j].flag=1;
        }
    }
    var ary = Array.prototype.slice.call(oTrs, 0);
    ary.sort(function (a, b) {
        var ina=a.cells[index].innerHTML;
        var inb=b.cells[index].innerHTML;
        if( isNaN(ina) || isNaN(inb)){
            return (ina.localeCompare(inb))*_this.flag;
        }
        return (parseFloat(ina) - parseFloat(inb)) * _this.flag;
    });
    var frg = document.createDocumentFragment();
    for (var i = 0; i < ary.length; i++) {
        frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);
}


for(var i=0;i<oThs.length;i++){
    oThs[i].flag = -1;
    oThs[i].onclick = (function (i) {
        return function(){
            sort.call(this,i);
        }
    })(i);
}


