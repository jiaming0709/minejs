"use strict";

var hDiv = document.getElementsByClassName("hid");
var banner = {
    initAnimate: function initAnimate() {
        var i = hDiv.length - 1;
        window.timer = window.setInterval(function () {
            hDiv[i].style.transform = "rotateY(" + i / hDiv.length * 360 + "deg) translateZ(400px)";
            i--;
            if (i < 0) {
                clearInterval(window.timer);
                window.timer = null;
                document.addEventListener("mousedown", banner.down, false);
            }
        }, 300);
    },
    down: function down(e) {
        this.rotate = {
            x: -20,
            y: 0
        };
        console.log("down");
        this.startX = e.pageX;
        this.startY = e.pageY;
        document.addEventListener("mousemove", banner.move, false);
        document.addEventListener("mouseup", banner.up, false);
    },
    move: function move(e) {
        console.log("move");
        this.moveX = e.pageX;
        this.moveY = e.pageY;
        this.pos = {
            x: (this.moveX - this.startX) / 7,
            y: -(this.moveY - this.startY) / 7
        };
        div1.style.transform = 'perspective(1000px) rotateX(' + this.pos["y"] + 'deg) rotateY(' + this.pos["x"] + 'deg)';
    },

    up: function up(e) {
        this.rotate = {
            x: this.pos["x"] + this.rotate["x"],
            y: this.pos["y"] + this.rotate["y"]
        };
        console.log(this.rotate);
        console.log("up");
        document.removeEventListener("mousemove", banner.move, false);
        document.removeEventListener("mouseup", banner.up, false);
    }
};

banner.initAnimate();

//# sourceMappingURL=index-compiled.js.map