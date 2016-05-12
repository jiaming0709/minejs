var winW = document.documentElement.clientWidth,
    banner = document.querySelector("#banner"),
    bannerInner = banner.firstElementChild,
    bannerTip = banner.querySelector(".tip"),
    tipList = null;

var ary = ["img/banner1.jpg", "img/banner2.jpg", "img/banner3.jpg", "img/banner4.jpg", "img/banner5.jpg"];
~function () {
    var str = '';
    str += "<div><img src='' trueImg='" + ary[ary.length - 1] + "'/></div>";
    for (var i = 0, len = ary.length; i < len; i++) {
        str += "<div><img src='' trueImg='" + ary[i] + "'/></div>";
    }
    str += "<div><img src='' trueImg='" + ary[0] + "'/></div>";
    bannerInner.innerHTML = str;

    bannerInner.style.width = winW * (len + 2) + "px";

    str = '';
    for (i = 0, len = ary.length; i < len; i++) {
        i === 0 ? str += "<li class='bg'></li>" : str += "<li></li>";
    }
    bannerTip.innerHTML = str;
    tipList = bannerTip.querySelectorAll("li");
}();

var divList = bannerInner.querySelectorAll("div");
[].forEach.call(divList, function (curItem, curIndex) {
    curItem.style.width = winW + "px";
});
window.setTimeout(function () {
    var imgList = bannerInner.querySelectorAll("img");
    [].forEach.call(imgList, function (curImg) {
        var oImg = new Image;
        oImg.src = curImg.getAttribute("trueImg");
        oImg.onload = function () {
            curImg.src = this.src;
            curImg.className = "imgMove";
            oImg = null;
        }
    });
}, 1000);

function changeTip() {
    var temp = step;
    temp > ary.length ? temp = 1 : null;
    temp < 1 ? temp = ary.length : null;
    [].forEach.call(tipList, function (curTip, index) {
        temp === (index + 1) ? curTip.className = "bg" : curTip.className = null;
    });
}

var step = 1, interval = 3000, autoTimer = null, autoTimer2 = null;
autoTimer = window.setInterval(autoMove, interval);
function autoMove() {
    bannerInner.style.webkitTransitionDuration = "0.3s";
    step++;
    bannerInner.style.left = -step * winW + "px";
    if (step === (ary.length + 1)) {
        window.setTimeout(function () {
            bannerInner.style.webkitTransitionDuration = "0s";
            bannerInner.style.left = -winW + "px";
            step = 1;
        }, 300);
    }
    changeTip();
}

document.addEventListener("touchmove", function (e) {
    e.preventDefault();
}, false);

["start", "move", "end"].forEach(function (item) {
    bannerInner.addEventListener("touch" + item, eval(item), false);
});

function start(e) {

    window.clearInterval(autoTimer);
    window.clearInterval(autoTimer2);
    this.style.webkitTransitionDuration = "0s";

    var touchPoint = e.touches[0];
    this["strX"] = touchPoint.pageX;
    this["strY"] = touchPoint.pageY;
    this["strL"] = parseFloat(this.style.left);
}

function move(e) {
    //->????????????
    var touchPoint = e.touches[0];
    this["endX"] = touchPoint.pageX;
    this["endY"] = touchPoint.pageY;

    this["swipeFlag"] = isSwipe(this["strX"], this["endX"], this["strY"], this["endY"]);

    if (this["swipeFlag"]) {
        this["swipeDir"] = swipeDirection(this["strX"], this["endX"], this["strY"], this["endY"]);

        if (/^(Right|Left)$/.test(this["swipeDir"])) {
            this["changeX"] = this["endX"] - this["strX"];
            var curL = this["strL"] + this["changeX"];
            if (curL > 0) {
                curL = 0;
            } else if (curL < -(ary.length + 1) * winW) {
                curL = -(ary.length + 1) * winW;
            }
            this.style.left = curL + "px";
        }
    }
}

function end(e) {
    if (this["swipeFlag"]) {
        if (this["swipeDir"] === "Left") {
            if (Math.abs(this["changeX"]) >= (winW / 4)) {
                step++;
            }
        }
        if (this["swipeDir"] === "Right") {
            if (Math.abs(this["changeX"]) >= (winW / 4)) {
                step--;
            }
        }
    }
    this.style.webkitTransitionDuration = "0.5s";
    this.style.left = -step * winW + "px";
    changeTip();

    var _this = this;
    if (step > ary.length) {
        window.setTimeout(function () {
            _this.style.webkitTransitionDuration = "0s";
            _this.style.left = -winW + "px";
            step = 1;
        }, 500);
    }
    if (step < 1) {r
        window.setTimeout(function () {
            _this.style.webkitTransitionDuration = "0s";
            _this.style.left = -ary.length * winW + "px";
            step = ary.length;
        }, 500);
    }

    autoTimer2 = window.setTimeout(function () {
        autoTimer = window.setInterval(autoMove, interval);
    }, interval);

    ["strX", "strY", "strL", "endX", "endY", "swipeDir", "swipeFlag", "changeX"].forEach(function (item) {
        _this[item] = null;
    });
}

function isSwipe(strX, endX, strY, endY) {
    return Math.abs(endX - strX) > 30 || Math.abs(endY - strY) > 30;
}

function swipeDirection(strX, endX, strY, endY) {
    var changeX = endX - strX;
    var changeY = endY - strY;
    return Math.abs(changeX) > Math.abs(changeY) ? (changeX > 0 ? "Right" : "Left") : (changeY > 0 ? "Down" : "Up");
}







