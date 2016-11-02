"use strict";

var winW = document.documentElement.clientWidth,
    banner = document.querySelector("#banner"),
    bannerInner = banner.firstElementChild,
    bannerTip = banner.querySelector(".tip"),
    tipList = null;

//->���ݰ���
var ary = ["img/banner1.jpg", "img/banner2.jpg", "img/banner3.jpg", "img/banner4.jpg", "img/banner5.jpg"];
~function () {
    //->ƴ������
    var str = '';
    str += "<div><img src='' trueImg='" + ary[ary.length - 1] + "'/></div>";
    for (var i = 0, len = ary.length; i < len; i++) {
        str += "<div><img src='' trueImg='" + ary[i] + "'/></div>";
    }
    str += "<div><img src='' trueImg='" + ary[0] + "'/></div>";
    bannerInner.innerHTML = str;

    //->��������
    bannerInner.style.width = winW * (len + 2) + "px";

    //->ƴ��LI
    str = '';
    for (i = 0, len = ary.length; i < len; i++) {
        i === 0 ? str += "<li class='bg'></li>" : str += "<li></li>";
    }
    bannerTip.innerHTML = str;
    tipList = bannerTip.querySelectorAll("li");
}();

//->�ӳټ���
var divList = bannerInner.querySelectorAll("div");
[].forEach.call(divList, function (curItem, curIndex) {
    curItem.style.width = winW + "px";
});
window.setTimeout(function () {
    var imgList = bannerInner.querySelectorAll("img");
    [].forEach.call(imgList, function (curImg) {
        var oImg = new Image();
        oImg.src = curImg.getAttribute("trueImg");
        oImg.onload = function () {
            curImg.src = this.src;
            curImg.className = "imgMove";
            oImg = null;
        };
    });
}, 1000);

//->����ѡ��
function changeTip() {
    var tempStep = step > ary.length ? 1 : step;
    [].forEach.call(tipList, function (curTip, index) {
        tempStep === index + 1 ? curTip.className = "bg" : curTip.className = null;
    });
}

//->�Զ��ֲ�
var step = 1,
    interval = 1000,
    autoTimer = null;
autoTimer = window.setInterval(autoMove, interval);
function autoMove() {
    bannerInner.style.webkitTransitionDuration = "0.3s";
    step++;
    bannerInner.style.left = -step * winW + "px";
    if (step === ary.length + 1) {
        window.setTimeout(function () {
            bannerInner.style.webkitTransitionDuration = "0s";
            bannerInner.style.left = -winW + "px";
            step = 1;
        }, 300);
    }
    changeTip();
}

//# sourceMappingURL=index备份-compiled.js.map