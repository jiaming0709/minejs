var oTab = document.getElementById("tab");
var tHead = oTab.tHead;
var oThs = tHead.rows[0].cells;

var tBody = oTab.tBodies[0];
var oRows = tBody.rows;

//获取JSON(AJAX)-->数据绑定

var data = null;
//1.创建一个ajax对象
var xhr = new XMLHttpRequest();

//2.打开需要请求的文件地址
xhr.open("get", "json/data.txt", true);

//3.监听请求状态
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var val = xhr.responseText;
        console.log(val);
        data = utils.jsonParse(val);
        console.log(data.length);
        bind();
    }
};
xhr.send(null);


function bind() {
    var frg = document.createDocumentFragment();
    for (var i = 0; i < data.length; i++) {
        var cur = data[i];

        var oTr = document.createElement("tr");
        for (var key in cur) {
            var oTd = document.createElement("td");
            //oTd.innerHTML=cur[key];
            oTd.innerHTML = (key === "sex") ? (cur[key] == 0 ? "男" : "女") : cur[key];
            oTr.appendChild(oTd);
        }

        frg.appendChild(oTr);
    }
    tBody.appendChild(frg);
    frg = null;
}


function sort(index_num) {
    var _this = this;
    var ary = utils.listToArray(oRows);
    _this.flag *= -1;
    //点击当前列,需要让其他的列的flag存储的值回归到初始值-1这样在返回头点其他的列,才是按照升序进行排列的
    for (var k = 0; k < oThs.length; k++) {
        if (k != index_num) {
            oThs[k].flag = -1;
        }
    }
    ary.sort(function (a, b) {
        var inna = a.cells[index_num].innerHTML;
        var innb = b.cells[index_num].innerHTML;
        if (isNaN(parseFloat(inna)) || isNaN(parseFloat(innb))) {
            return inna.localeCompare(innb) * _this.flag;
        }
        else {
            return (parseFloat(inna) - parseFloat(innb)) * _this.flag;
        }
        //return (parseFloat(a.cells[index_num].innerHTML) - parseFloat(b.cells[index_num].innerHTML)) * _this.flag;
    });

    var frg = document.createDocumentFragment();
    for (var i = 0; i < ary.length; i++) {
        frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);
}


for (var i = 0; i < oThs.length; i++) {
    var curTh = oThs[i];
    curTh.index = i;
    //if(curTh.className="cursor"){
    //
    //}
    oThs[i].flag = -1;
    oThs[i].onclick = function () {
        sort.call(this, this.index);
    };
}
