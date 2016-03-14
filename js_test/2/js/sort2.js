


var xhr=new XMLHttpRequest();
xhr.open("get","json/data.txt","true");
xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
        var val=JSON.parse(xhr.responseText);
        bind(val);
    }
};
xhr.send(null);


var table=document.getElementById("table");
var tHead=table.tHead;
var tBody=table.tBodies[0];
var ths=tHead.rows[0].cells;
var trs=tBody.rows;

function bind(data){
    var frg=document.createDocumentFragment();
    for(var i=0;i<data.length;i++){
        var otr=document.createElement("tr");
        for(var key in data[i]){
            var otd=document.createElement("td");
            otd.innerHTML=key=="sex"?(data[i][key]==1?"男":"女"):data[i][key];
            otr.appendChild(otd)

        }
        frg.appendChild(otr);
    }
    tBody.appendChild(frg);
    frg=null;
}

function sort(index){
    var _this=this;
    _this.flag*=-1;
    console.log("start");
    for(var k=0;k<ths.length;k++){
        if (k!=index){
            ths[k].flag=-1;
        }
    }
    var ary=Array.prototype.slice.call(trs);
    ary.sort(function(a,b){
        var ina= a.cells[index].innerHTML;
        var inb= b.cells[index].innerHTML;
        if(isNaN(ina) && isNaN(inb)){
            return ina.localeCompare(inb)*_this.flag;
        }
        return parseFloat(ina-inb)*_this.flag;
    });
    //console.log(ary);
    var frg=document.createDocumentFragment();
    for(var i=0;i<ary.length;i++){
        frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);
}


for(var i=0;i<ths.length;i++){
    (function(i){
        ths[i].flag=-1;
        ths[i].onclick=function(){
            sort.call(this,i);
        }
    })(i)
}