function on(ele, type, fn) {
    ele.addEventListener(type, fn, false);
}
function off(ele, type, fn) {
    ele.removeEventListener(type, fn, false);
}
function processThis(fn, obj) {
    return function (e) {
        fn.call(obj, e);
    }
}

function EventEmitter() {

}
EventEmitter.prototype.on = function (type, fn) {
    if (!this["emitter" + type]) {
        this["emitter" + type] = [];
    }
    var a = this["emitter" + type];
    for (var i = 0; i < a.length; i++) {
        if (a[i] == fn)return;
    }
    a.push(fn);
    return this;
};
EventEmitter.prototype.run = function (type, e) {
    var a = this["emitter" + type];
    if (a) {
        for (var i = 0; i < a.length; i++) {
            if (typeof a[i] == "function") {
                a[i].call(this, e);
            }
            else {
                a.splice(i, 1);
                i--;
            }
        }
    }
};
EventEmitter.prototype.off = function (type, on) {
    var a = this["emitter" + type];
    if (a) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] == fn) {
                a[i] = null;
                return;
            }
        }
    }
    return this;
};
Drag.prototype = new EventEmitter();


function Drag(ele) {
    this.ele = ele;
    this.x = null;
    this.y = null;
    this.mx = null;
    this.my = null;
    this.DOWN = processThis(this.down, this);
    this.MOVE = processThis(this.move, this);
    this.UP = processThis(this.up, this);
    on(this.ele, "mousedown", this.DOWN);
}
Drag.prototype.down = function (e) {
    this.x = this.ele.offsetLeft;
    this.y = this.ele.offsetTop;
    this.mx = e.pageX;
    this.my = e.pageY;
    if (this.ele.setCapture) {
        this.ele.setCapture();
        on(this.ele, "mousemove", this.MOVE);
        on(this.ele, "mouseup", this.UP)
    }
    else {
        on(document, "mousemove", this.MOVE);
        on(document, "mouseup", this.UP)
    }
    e.preventDefault();

    this.run("eventDown", e);
};
Drag.prototype.move = function (e) {
    this.ele.style.left = e.pageX - this.mx + this.x + "px";
    this.ele.style.top = e.pageY - this.my + this.y + "px";
    this.run("eventMove", e);
};
Drag.prototype.up = function (e) {
    if (this.ele.releaseCapture) {
        this.ele.releaseCapture();
        off(this.ele, "mousemove", this.MOVE);
        off(this.ele, "mouseup", this.UP);
    }
    else {
        off(document, "mousemove", this.MOVE);
        off(document, "mouseup", this.UP)
    }
    this.run("eventUp", e);
};


Drag.prototype.range = function () {
    //obj = {left: 0, right: 900, top: 0, bottom: 500};
    obj = this.objRange;
    var currentX = this.ele.offsetLeft;
    var currentY = this.ele.offsetTop;
    if (currentX <= obj.left) {
        this.ele.style.left = obj.left + "px";
    } else if (currentX >= obj.right) {
        this.ele.style.left = obj.right + "px";
    }
    if (currentY <= obj.top) {
        this.ele.style.top = obj.top + "px";
    } else if (currentY >= obj.bottom) {
        this.ele.style.top = obj.bottom + "px";
    }
};
Drag.prototype.addRange = function (obj) {
    this.objRange = obj;
    this.on("eventMove", this.range);
};
Drag.prototype.addBorder = function () {
    this.ele.style.border = "10px solid #0ff";
};
Drag.prototype.removeBorder = function () {
    this.ele.style.border = "none";
};
Drag.prototype.border = function () {
    this.on("eventDown", this.addBorder);
    this.on("eventUp", this.removeBorder);
}