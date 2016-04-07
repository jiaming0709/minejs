function getCss(ele, attr) {
    if (window.getComputedStyle) {
        return parseFloat(getComputedStyle(ele, null)[attr]);
    }
    if (attr == "opacity") {   //alpha(opacity=20)
        var reg = /alpha\(opacity=(\d+(\.\d+)?)\)/;
        var res = ele.currentStyle[attr];
        if (reg.test(res)) {
            return RegExp.$1 / 100;
        }
        else {
            return 1;
        }
    }
    return parseFloat(ele.currentStyle[attr]);
}

function setCss(ele, attr, value) {
    if (attr == "opacity") {
        ele.style.opacity = value;
        ele.style.filter = "alpha(opacity=" + (value * 100) + ")";
    }
    else {
        ele.style[attr] = value + "px";
    }
}
function animate(ele, obj, duration) {
    var times = 0;
    var interval = 10;

    if (!ele.timer) {
        ele.timer = setInterval(step, interval);
    }
    else {
        clearInterval(ele.timer);
        ele.timer = null;
    }

    var beginObj = {};
    var changeObj = {};
    var flag = 0;
    for (var attr in obj) {
        var begin = getCss(ele, attr);
        var change = parseFloat(obj[attr]) - begin;
        if (change != 0) {
            flag++;
            beginObj[attr] = begin;
            changeObj[attr] = obj[attr] - begin;
        }
    }

    if (flag === 0) {
        return;
    }

    function step() {
        times += interval;
        var curPos = {};

        if (times >= duration) {
            for (var attr in obj) {
                curPos = obj[attr];
                clearInterval(ele.timer);
                ele.timer = null;
                setCss(ele, attr, curPos);
            }
            return;
        }
        for (var attr in obj) {
            curPos = times / duration * changeObj[attr] + beginObj[attr];
            setCss(ele, attr, curPos);
        }

    }

}