function animate(ele, obj, duration, callback) {
    var times = 0;
    var interval = 10;

    var beginObj = {};
    var changeObj = {};
    var flag = 0;
    for (var attr in obj) {
        var begin = parseFloat(animate.getCss(ele, attr));
        var change = obj[attr] - begin;
        if (change) {
            beginObj[attr] = begin;
            changeObj[attr] = change;
            flag++;
        }
    }
    if (flag === 0) {
        return;
    }

    if (ele.timer) {
        clearInterval(ele.timer);
        ele.timer = null;
    }

    function step() {
        times += interval;
        var curPos = {};
        for (attr in obj) {
            curPos[attr] = times / duration * changeObj[attr] + beginObj[attr];
        }
        if (times >= duration) {
            clearInterval(ele.timer);
            ele.timer = null;
            for (attr in obj) {
                curPos[attr] = obj[attr];
            }
        }
        for (attr in obj) {
            animate.setCss(ele, attr, curPos[attr]);
        }
    }

    ele.timer = setInterval(step, interval);

}
;
animate.getCss = function (ele, attr) {
    if (window.getComputedStyle) {
        return getComputedStyle(ele, null)[attr];
    }
    else {
        if (attr = "opacity") {
            var value = ele.currentStyle.filter.replace(/ +/g, "");  //alpha(opacity=66.66);
            var reg = /alpha\(opacity=(\d+(\.\d+)?)\)/;
            var res = reg.exec(value);
            if (reg.test(value)) {
                return parseFloat(RegExp.$1) / 100;
            }
            else {
                return 1;
            }
        }
        return parseFloat(ele.currentStyle[attr]);
    }
};
animate.setCss = function (ele, attr, value) {
    if (attr == "opacity") {
        ele.style.opacity = value;
        ele.style.filter = "alpha(opacity=" + value * 100 + ")";
    }
    else {
        ele.style[attr] = value + "px";
    }
};