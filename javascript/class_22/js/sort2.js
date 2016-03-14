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


function sort() {
    var _this = this;
    var ary = utils.listToArray(oRows);
    _this.flag *= -1;
    ary.sort(function (a, b) {
        //匿名函数是this是window
        return (parseFloat(a.cells[1].innerHTML) - parseFloat(b.cells[1].innerHTML)) * _this.flag;
    });

    var frg = document.createDocumentFragment();
    for (var i = 0; i < ary.length; i++) {
        frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);
}

//优化解决this问题
oThs[1].flag = 1;
oThs[1].onclick = function () {
    //sort.call(oThs[1]);
    sort.call(this);
};
