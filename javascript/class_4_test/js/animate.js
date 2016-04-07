function getCss(ele, attr) {
    if (window.getComputedStyle) {
        return parseFloat(getComputedStyle(ele, null)[attr]);
    }
    else {
        return ele.currentStyle[attr];
    }
}

function setCss(ele, attr, value) {
    ele.style[attr] = value + "px";
    if (attr == "opacity") {
        ele.style[attr] = value;
        ele.style.filter = "alpha(opacity=" + (value * 100) + ")";
    }
}

function animate(ele, obj, duration) {

    var changeObj = {};
    var beginObj = {};
    var flag = 0;
    for (key in obj) {
        var begin = getCss(ele, key);
        var change = parseFloat(obj[key]) - begin;
        if (change != 0) {
            flag = 1;
            changeObj[key] = change;
            beginObj[key] = begin;
        }
    }
    if (flag == 0) {
        return;
    }

    var times = 0;
    var interval = 15;

    if (!ele.timer) {
        ele.timer = setInterval(step, interval);
    }
    else {
        clearInterval(ele.timer);
        ele.timer = null;
    }
    function step() {
        times += 15;
        var curPos = {};
        for (key in obj) {
            curPos[key] = times / duration * changeObj[key] + beginObj[key];
            setCss(ele, key, curPos[key]);
        }
        if (times >= duration) {
            clearInterval(ele.timer);
            ele.timer = null;
            for (key in obj) {
                curPos[key] = obj[key];
                setCss(ele, key, curPos[key]);
            }
        }
    }

}

