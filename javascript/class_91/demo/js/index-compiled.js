"use strict";

var ary = ["img/banner1.jpg", "img/banner2.jpg", "img/banner3.jpg", "img/banner4.jpg", "img/banner5.jpg"];
var count = ary.length;

var banner = document.getElementById("banner");
var bannerInner = banner.firstElementChild;
var bannerTip = banner.lastElementChild;

var divList = bannerInner.getElementsByTagName("div");
var imgList = bannerInner.getElementsByTagName("img");
var tipList = bannerTip.getElementsByTagName("li");

var winW = document.documentElement.clientWidth;
bannerInner.style.width = winW * (count + 2) + "px";

//init data
~function () {
    var str = "";
    var str2 = "";
    str += "<div><img src='' trueImg='" + ary[count - 1] + "' alt=''/></div>";
    for (var i = 0; i < count; i++) {
        str += "<div><img src='' trueImg='" + ary[i] + "' alt=''/></div>";
        str2 += "<li class=" + (i == 0 ? "bg" : "") + "></li>";
    }
    str += "<div><img src='' trueImg='" + ary[0] + "' alt=''/></div>";
    bannerInner.innerHTML = str;
    bannerTip.innerHTML = str2;
}();

//size
[].forEach.call(divList, function (item, index, list) {
    item.style.width = winW + "px";
});

//lazy load
window.setTimeout(function () {
    [].forEach.call(imgList, function (item, index, list) {
        var oImg = new Image();
        oImg.src = item.getAttribute("trueImg");
        oImg.onload = function () {
            oImg = null;
            item.src = this.src;
            item.className = "imgMove";
        };
    });
}, 500);

//auto play
var step = 1;
var interval = 5000;
var autoTimer = null;
var autoDelay = null;
autoTimer = window.setInterval(autoMove, interval);

function changeTip() {
    var temp = step > count ? 1 : step;
    temp = temp < 1 ? count : temp;
    [].forEach.call(tipList, function (item, index, list) {
        item.className = index + 1 == temp ? "bg" : "";
    });
}
function autoMove() {
    bannerInner.style.webkitTransitionDuration = "0.3s";
    step++;
    changeTip();
    bannerInner.style.left = -winW * step + "px";
    if (step > count) {
        window.setTimeout(function () {
            bannerInner.style.webkitTransitionDuration = "0s";
            bannerInner.style.left = -winW + "px";
            step = 1;
        }, 300);
    }
}

//touch bind touchmove need preventDefault();
["start", "move", "end"].forEach(function (item, index) {
    bannerInner.addEventListener("touch" + item, eval(item), false);
});

function start(e) {
    var touchPoint = e.touches[0];
    this.strX = touchPoint.clientX;
    this.strY = touchPoint.clientY;
    this.strL = parseFloat(window.getComputedStyle(this, null)["left"]);
    clearInterval(autoTimer);
    clearInterval(autoDelay);
}
function move(e) {
    e.preventDefault();
    var touchPoint = e.touches[0];
    this.curX = touchPoint.clientX;
    this.curY = touchPoint.clientY;
    this.isFlag = swipeFlag(this.strX, this.curX, this.strY, this.curY);
    if (this.isFlag) {
        this.swipeDir = swipeDirection(this.strX, this.curX, this.strY, this.curY);
        if (this.swipeDir == "Left" || this.swipeDir == "Right") {
            this.changeX = this.curX - this.strX;
            this.curL = this.changeX + this.strL;
            this.style.webkitTransitionDuration = "0s";

            //边界判断
            if (this.curL > 0) {
                this.style.left = "0";
            } else if (this.curL < -(count + 1) * winW) {
                this.style.left = -(count + 1) * winW + "px";
            } else {
                this.style.left = this.curL + "px";
            }
        }
    }
}
function end(e) {
    var _this = this;
    if (!this.isFlag) {
        return;
    }
    if (this.swipeDir == "Left") {
        if (Math.abs(this.changeX) >= winW / 4) {
            step++;
        }
    } else if (this.swipeDir == "Right") {
        if (Math.abs(this.changeX) >= winW / 4) {
            step--;
        }
    }
    console.log(step);
    this.style.webkitTransitionDuration = "0.3s";
    this.style.left = -step * winW + "px";
    changeTip();

    if (step < 1) {
        window.setTimeout(function () {
            step = count;
            _this.style.webkitTransitionDuration = "0s";
            _this.style.left = -step * winW + "px";
        }, 300);
    } else if (step > count) {
        window.setTimeout(function () {
            step = 1;
            _this.style.webkitTransitionDuration = "0s";
            _this.style.left = -step * winW + "px";
        }, 300);
    }

    autoDelay = window.setTimeout(function () {
        autoTimer = window.setInterval(autoMove, interval);
    }, interval);
}

function swipeFlag(x1, x2, y1, y2) {
    return Math.abs(x2 - x1) > 30 || Math.abs(y2 - y1) > 30;
}
function swipeDirection(x1, x2, y1, y2) {
    var changeX = x2 - x1;
    var changeY = y2 - y1;
    return Math.abs(changeX) > Math.abs(changeY) ? changeX < 0 ? "Left" : "Right" : changeY < 0 ? "Up" : "Down";
}

//# sourceMappingURL=index-compiled.js.map