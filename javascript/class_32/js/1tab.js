var oLis = document.getElementsByClassName("tab"); //IE8不兼容
//(a b tab)先把文档中所有元素找到,再过滤(1,类名包含a的找到,结果中找包含b的,再找包含 tab的)
function getEleByClass1(class_name,eles) {
    //var reg=/(?:^| )tab(?: |$)/;
    //var reg=new RegExp("\\b"+str+"\\b");
    var reg=new RegExp("(?:^| )"+class_name+"(?: |$)");
    var ary=[];
    for (var i = 0; i < eles.length; i++) {
        //if(eles[i].className.indexOf("tab")>-1){}
        if(reg.test(eles[i].className)){
            ary.push(eles[i]);
        }
    }
    return ary;
}
//var eleAll=getEleByClassName("tab",eleAll);
//eleAll=getEleByClassName("selected",eleAll);


function getEleByClass2(str){
    var ary=str.trim().split(/ +/);
    var eleAll = document.getElementsByTagName("*");

    for(var i=0;i<ary.length;i++){
        eleAll=getEleByClass1(ary[i],eleAll);
    }
    return eleAll;
}


function getEleByClassFinish(str){
    str=str.replace(/^ +| +$/g,"");
    var ary=str.split(/ +/);

    var eleAll=document.getElementsByTagName("*");
    for(var i=0;i<ary.length;i++){
        var ele_ary=[];
        var reg=new RegExp("(?:^| )"+ary[i]+"(?: |$)");
        for(var j=0;j<eleAll.length;j++){
            if(reg.test(eleAll[j].className)){
                ele_ary.push(eleAll[j]);
            }
        }
        eleAll=ele_ary;
        console.log(ele_ary);
    }
    return eleAll;
}
getEleByClassFinish("   tab     selected   ");



for (var i = 0; i < oLis.length; i++) {
    oLis[i].onclick = changeTab;  //不带括号,表示只是事件绑定,不是把运行结果返回给事件
}
function changeTab() {
    //索引不用传递,当前函数自己计算
    //this为当前触发事件的元素
    var curIndex = utils.getIndex(this);
    console.log(curIndex);
    utils.addCss(this, "selected");
    var siblings = utils.siblings(this);
    for (var i = 0; i < siblings.length; i++) {
        //siblings[i].className="tab";
        utils.removeCss(siblings[i], "selected");
    }

    var contents = this.parentNode.nextElementSibling.children;
    var contents = utils.children(utils.next(this.parentNode), "div");
    for (var i = 0; i < contents.length; i++) {
        //contents[i].className="content";
        utils.removeCss(contents[i], "selected");
    }
    //contents[curIndex].className = "content selected";
    utils.addCss(contents[curIndex],"selected");
}