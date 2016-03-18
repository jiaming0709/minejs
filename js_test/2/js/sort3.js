var xhr = new XMLHttpRequest();
xhr.open("get", "json/data.txt", true);
xhr.onreadystatechange = function (request, response) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var val = JSON.parse(xhr.responseText);
        bind(val);
    }
};
xhr.send(null);


var table=document.getElementById("table");
var tHead=table.tHead;
var ths=tHead.rows[0].cells;
var tBody=table.tBodies[0];
var trs=tBody.rows;

for(var i=0;i<ths.length;i++){
    (function(i){
        ths[i].flag=-1;
        ths[i].onclick=function(){
            sort.call(this,i);
        }
    })(i);
}
function bind(data) {
    var frg=document.createDocumentFragment();
    for(var i=0;i<data.length;i++){
        var tr=document.createElement("tr");
        for(key in data[i]){
            var td=document.createElement("td");
            td.innerHTML=key=="sex"?(data[i][key]==1?"女":"男"):(data[i][key]);
            tr.appendChild(td);

        }
        frg.appendChild(tr);
    }
    tBody.appendChild(frg);
    frg=null;
}

function sort(index){
    var _this=this;
    _this.flag*=-1;
    for(var k=0;k<ths.length;k++){
        if(k!=index){
            ths[k].flag=-1;
        }
    }
    var ary=Array.prototype.slice.call(trs,0);
    ary.sort(function(a,b){
        var ina= a.cells[index].innerHTML;
        var inb= b.cells[index].innerHTML;
        if(isNaN(a) || isNaN(b)){
            return (ina.localeCompare(inb))*_this.flag;
        }
        else{
            return (parseFloat(ina)-parseFloat(inb))*_this.flag;
        }
    });
    var frg=document.createDocumentFragment();
    for(var i=0;i<ary.length;i++){
        frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);

}