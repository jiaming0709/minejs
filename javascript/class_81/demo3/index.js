var desW = 640;
var desH = 1136;
var winW = document.documentElement.clientWidth;
var winH = document.documentElement.clientHeight;

if (winW / winH < desW / desH) {
    main.style.webkitTransform = "scale(" + winH / desH + ")";
}
else {
    main.style.webkitTransform = "scale(" + winW / desW + ")";

}

function fnLoad() {
    var arr = ['phoneBg.jpg', 'cubeBg.jpg', 'cubeImg1.png', 'cubeImg2.png', 'cubeImg3.png', 'cubeImg4.png', 'cubeImg5.png', 'cubeImg6.png', 'phoneBtn.png', 'phoneKey.png', 'messageHead1.png', 'messageHead2.png', 'messageText.png', 'phoneHeadName.png'];
    var process = document.querySelector(".process");

    var n = 0; //记录加载图片的个数
    // 遍历加载图片
    arr.forEach(function (item, index, list) {
        var oImg = new Image();
        oImg.src = "images/" + item;
        oImg.onload = function () {
            n++;
            process.style.width = n / arr.length * 100 + "%";

            process.addEventListener("webkitTransitionEnd", function () {
                this.style.webkitTransition = "";
            }, false);

            if (n == arr.length && loading) {
                window.setTimeout(function () {
                    main.removeChild(loading);
                    fnPhone.init();
                    bell.play();
                }, 1000);
            }
        }
    });
}

fnLoad();

var speak = document.querySelector(".speak");
var fnPhone = {
    init: function () {
        phone.addEventListener("touchend", this.touch, false);
    },
    touch: function (e) {
        var target = e.target;
        if (target.className == "listenTouch") {
            target.parentNode.style.display = "none";
            speak.style.transform = "translate(0,0)";
            bell.pause();
            say.play();
        }
        if (target.className == "refuse") {
            phone.style.transform = "translate(0,100%)";
            say.pause();
            window.setTimeout(function () {
                main.removeChild(phone);
                fnMessage();
                music.play();
            }, 1000)
        }
    }
};

//前三个li每隔1s往上移动20px,回到原始位置
//出现的li超过3个之后,整体往上移动已经出现的li之和,
var msg = document.querySelector("#message");
var oLis = document.querySelectorAll("#message>ul>li");
var oUl = document.querySelector("#message>ul");
function fnMessage() {
    var n = 0;
    var h = null;

    var timer = window.setInterval(function () {
        if (n == oLis.length) {
            clearInterval(timer);
            timer = null;
            main.removeChild(msg);
            fnCube();
        }
        oLis[n].style.opacity = "1";
        oLis[n].style.webkitTransform = "translate(0,0)";
        n++;
        h += oLis[n].offsetHeight;
        if (n >= 3) {
            oUl.style.webkitTransform = "translate(0," + (-h) + "px)";
            oUl.style.webkitTransition = "1s";
        }


    }, 1000);

}


var cubeBox = document.querySelector("#cubeBox");

function fnCube() {
    //一开始放大和旋转
    cubeBox.style.webkitTransform = "scale(0.7) rotateX(-135deg) rotateY(-45deg)";
    var startX = -135;
    var startY = -45;
    var x = null;
    var y = null;
    document.addEventListener("touchstart", start, false);
    document.addEventListener("touchmove", move, false);
    document.addEventListener("touchend", end, false);

    function start(e) {
        this.startTouch = {
            x: e.changedTouches[0].pageX,
            y: e.changedTouches[0].pageY
        }
    }

    function move(e) {
        this.flag = true;
        var moveTouch = {
            x: e.changedTouches[0].pageX,
            y: e.changedTouches[0].pageY
        };
        x = moveTouch.x - this.startTouch.x;
        y = moveTouch.y - this.startTouch.y;

        cubeBox.style.webkitTransform = "scale(0.7) rotateX(" + (startX - y) + "deg) rotateY(" + (startY - x) + "deg)";
    }

    function end(e) { //更新起始值
        if (this.flag) {
            startX -= y;
            startY -= x;
            this.flag = false;
        }
    }
}


