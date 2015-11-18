var trunGame={
    //生成拼图html
    createPicPortion:function(eleId, row, col,lineWidth) {//容器的ID，行数，列数，间隔像素数
        var htmlStr = '';
        var thisEle = $("#" + eleId);
        var width = (thisEle.width()-(col-1)*lineWidth) / col;
        var height = (thisEle.height()-(row-1)*lineWidth) / row;
        for (var i =0; i<row * col; i++) {
            var left = (i % col) * (width+lineWidth);
            var top = Math.floor(i / col) * (height+lineWidth);
            thisEle.attr("widthSize",width);
            thisEle.attr("heightSize",height);
            htmlStr += '<div class="picPortion" bg-position="-'+left+'px -'+top+'px" style="width:' + width + 'px;height:' + height + 'px;left:' + left + 'px;top:' + top + 'px"></div>';
        }
        htmlStr+='<div id="light" style="width:' + width + 'px;height:' + height + 'px;"><img src="img/aureole.png" alt=""/></div>';//新增一个遮罩层
        thisEle.html(htmlStr);
        for(var index in openList){
            var curr=thisEle.children(".picPortion").eq(openList[index]);
            trunGame.setPicStyle(eleId,curr,"img/investor_pic/pic_0.jpg");
        }
    },
    //清除动画
    clearAnimate:function (eleId){//照片容器
        var elePortion = $("#" + eleId + " .picPortion");
        for(var i=0;i<elePortion.length;i++){
            elePortion.removeClass("turnOut");
            elePortion.removeClass("magnify");
        }
    },
    //    设置当前的照片碎片为打开状态
    setPicStyle:function (eleId,curr,bgUrl){//照片容器，当前将要打开的碎片，图片src
        curr.css("background-image", 'url('+bgUrl+')');
        curr.css("background-position",curr.attr("bg-position"));
        curr.css("background-size",$("#" + eleId).width()+"px "+$("#" + eleId).height()+"px");
        curr.attr("open-flag", "true");
    },
    //click之后要执行的翻牌子的过程
    turnBrand:function (eleId,number) {//照片容器
        var thisEle = $("#" + eleId + " .picPortion").eq(number);
        console.log(thisEle.attr("class")+":before");
        console.log(thisEle.attr("class")+":1");
        if (!thisEle.attr("open-flag")) {//属性open-flag记录牌子是否已经被翻开，"true"已经翻开，若属性不在在，尚未翻开
            trunGame.setPicStyle(eleId,thisEle,"img/investor_pic/pic_0.jpg");
            thisEle.addClass("turnOut");
            setTimeout(function(){trunGame.clearAnimate(eleId);},2750);
            console.log(thisEle.attr("class")+":2");
//            console.log("end");
            return;
        }
        thisEle.addClass("magnify");
        setTimeout(function(){trunGame.clearAnimate(eleId);},2750);
        console.log(thisEle.attr("class")+":2");
    },
    turnBrandNone:function (eleId){
        var number=Math.floor(Math.random() * openList.length);
        $("#" + eleId + " .picPortion").eq(openList[number]).addClass("magnify");
        setTimeout(function(){trunGame.clearAnimate(eleId);},2750);
    },
//设置魔方图的宽高比，以保证投资人图片竖版
    setsize:function (){
        var left=$(".main").css("left");
        var height=$(".main").height();
        var width=$(".main").width();
        $(".main").width(parseFloat(height)*0.8+"px");
        $(".main").css("left",(parseFloat(width)-parseFloat(height)*0.8)/2+parseFloat(left)+"px");
    },
//，发送到朋友圈，邀请好友帮我 样式设置
    inviteFriend:function (){
        $(".container").addClass("hidden");
        $(".container").append('<div class="share"><div class="bg_black"></div><img src="img/share.png" alt="" class="share_pic"/></div>');
        $(".container .bg_black").click(function(){
            $(".share").remove();
            $(".container").removeClass("hidden");
        })
    },
    shadeTimerFunc:function (thisEle,pathIndex,lightPath,number){
        pathIndex=pathIndex>5?0:pathIndex;
        $("#light").css("left",parseFloat(thisEle.children(".picPortion").eq(lightPath[pathIndex]).css("left"))+"px");
        $("#light").css("top",parseFloat(thisEle.children(".picPortion").eq(lightPath[pathIndex]).css("top"))+"px");
        pathIndex++;
        window.clearInterval(window.shadeTimer);
        window.shadeTimer=null;
        if(inTimeStart>inTimeEnd && lightPath[pathIndex-1]==number){  //条件成立停止
            trunGame.turnBrand("picBox",number);
            setTimeout(function(){
                console.log(isanimate());
                $("#picBox  #light").css("z-index","-10");
                $("#light").removeAttr("animate");
            },1000);
            return;
        }
        window.shadeTimer=setTimeout(function(){  //遮罩的定时器
            trunGame.shadeTimerFunc(thisEle,pathIndex,lightPath,number);
        },inTimeStart);
    },
//点击图片，开始跑马灯
    marquee:function (eleId,number){
        $("#light").attr("animate","start");
        var thisEle = $("#" + eleId);
        $("#light").css("z-index","100");
        var lightPath=[0,1,3,5,4,2];
        var pathIndex=Math.floor(Math.random() * lightPath.length);
        console.log(pathIndex);
        inTimeStart=100;//遮罩旋转的速度，后期会等级为加速度
        inTimeEnd=500;//加速度的最高值
        window.startAddSpeed=setTimeout(
            window.countTimer=setInterval(function(){   //开启加速度模式
                inTimeStart+=40;
                if(inTimeStart>inTimeEnd){
                    window.clearInterval(window.countTimer);
                    window.countTimer=null;
                }
            },400)
            ,3000);//先匀速旋转2s,2s后开始加速
        window.shadeTimer=setTimeout(function(){  //遮罩的定时器
            trunGame.shadeTimerFunc(thisEle,pathIndex,lightPath,number);
        },inTimeStart);
    },
    //设置跑马灯的尺寸
    lightsite:function(){
        var w=$("#light").width();
        var h=$("#light").height();
        $("#light img").width(w*1.58+"px");
        $("#light img").height(h*1.7+"px");
        $("#light img").css("left",-0.29*w+"px");
        $("#light img").css("top",-0.346*h+"px");
    }
};