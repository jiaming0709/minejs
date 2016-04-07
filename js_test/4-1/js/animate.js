function getCss(ele, attr) {
    if (window.getComputedStyle) {
        return parseFloat(getComputedStyle(ele, null)[attr]);
    }
    else {
        if (attr == "opacity") {  //filter:alpha(opacity=100)
            var reg = /alpha\(opacity=(\d+(\.\d+)?)\)/;
            var val = ele.currentStyle.filter;
            if (reg.test(val)) {
                return parseFloat(RegExp.$1) / 100;
            }
            else {
                return 1;
            }
        }
        return parseFloat(ele.currentStyle[attr]);
    }
}

function setCss(ele, attr, value) {
    if (attr == "opacity") {
        ele.style.opacity = value;
        ele.style.filter = "alpha(opacity=" + (value * 100) + ")";
    }
    ele.style[attr] = value + "px";
}


function animate(ele, obj, duration, callback) {
    var times = 0;
    var interval = 15;
    if (!ele.timer) {
        ele.timer = setInterval(step, interval);
    }
    else {
        clearInterval(ele.timer);
        ele.timer = null;
    }

    var flag = 0;
    var changeObj = {};
    var beginObj = {};
    for (key in obj) {
        var begin = getCss(ele, key);
        var change = obj[key] - begin;

        if (change != 0) {
            changeObj[key] = change;
            beginObj[key] = begin;
            flag = 1;
        }
    }

    if (flag == 0) {
        return;
    }

    function step() {
        times += interval;
        var curPos = {};
        for (var attr in obj) {
            curPos[attr] = times / duration * changeObj[attr] + beginObj[attr];
            setCss(ele, attr, curPos[attr]);
        }
        if (times >= duration) {
            clearInterval(ele.timer);
            ele.timer = null;
            for (var attr in obj) {
                curPos[attr] = obj[attr];
                setCss(ele, attr, curPos[attr]);
            }
        }

    }

}

