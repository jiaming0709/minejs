var desW = 640;
var desH = 960;
var winW = document.documentElement.clientWidth;
var winH = document.documentElement.clientHeight;
if (winW / winH < desW / desH) {
    main.style.webkitTransform = "scale(" + (winH / desH) + ")";
}
else {
    main.style.webkitTransform = "scale(" + winW / desW + ")";

}


var oLis = document.querySelectorAll("#main>ul>li");
oLis[0].className = "zIndex";
[].forEach.call(oLis, function (item, index, list) {
    var oLi = arguments[0];
    oLi.addEventListener("touchstart", start, false);
    oLi.addEventListener("touchmove", move, false);
    oLi.addEventListener("touchend", end, false);
    oLi.index = index;

}, "");

function start(e) {
    this.startY = e.changedTouches[0].pageY;
    //this.startY = e.touches[0].pageY;
    this.startX = e.changedTouches[0].pageX;

}
function move(e) {
    e.preventDefault();
    var moveY = e.changedTouches[0].pageY;
    var moveX = e.changedTouches[0].pageX;
    var movePos = moveY - this.startY;
    if (Math.abs(movePos) < Math.abs(moveX - this.startX)) {
        this.flag = false;
        return;
    }
    var index = this.index;
    var lastIndex = oLis.length - 1;
    [].forEach.call(oLis, function () {
        if (index != arguments[1]) {
            arguments[0].style.display = "none";
        }
        arguments[0].className = "";
        arguments[0].firstElementChild.id = "";
    }, "");

    if (movePos > 0) {//向下滑动
        this.prevsIndex = (index == 0) ? lastIndex : index - 1;
        var duration = -this.offsetHeight / 2 + movePos + "px";

    } else {
        this.prevsIndex = (index == lastIndex) ? 0 : index + 1;
        var duration = this.offsetHeight / 2 + movePos + "px";
    }
    oLis[this.prevsIndex].style.webkitTransform = "translate(0," + duration + ")";
    oLis[this.prevsIndex].className = "zIndex";
    oLis[this.prevsIndex].style.display = "block";

    this.flag = true;

    this.style.webkitTransform = "scale(" + (1 - Math.abs(movePos / this.offsetHeight) / 2) + ") translate(0," + movePos + "px)";

}
function end(e) {
    if (this.flag) {
        oLis[this.prevsIndex].firstElementChild.id = "a" + (this.prevsIndex);
        oLis[this.prevsIndex].style.webkitTransform = "translate(0,0)";
        oLis[this.prevsIndex].style.webkitTransition = ".5s";
        //oLis[this.prevsIndex].addEventListener("webkitTransitionEnd", function () {
        //    oLis[this.prevsIndex].style.webkitTransition = "";
        //
        //}, false);
    }
    this.flag = false;


}
