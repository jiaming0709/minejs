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
