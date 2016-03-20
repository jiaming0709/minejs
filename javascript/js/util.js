var utils = {
    listToArray: function (likeAry) {//实现将类数
        // 组转化为数组
        var ary = [];
        try {
            ary = Array.prototype.slice.call(likeAry);
        } catch (e) {
            for (var i = 0; i < likeAry.length; i++) {
                ary[length] = likeAry[i];
            }
        }
        return ary;
    },
    jsonParse: function (str) {
        //var val = null;
        //try {
        //    val = JSON.parse(str);
        //} catch (e) {
        //    val = eval("(" + str + ")");
        //}
        //return val;
        return "JSON" in window ? JSON.parse(str) : eval("(" + str + ")");
    },
    offset: function (ele) {
        var t = ele.offsetTop;
        var l = ele.offsetLeft;
        var p = ele.offsetParent;
        while (p) {
            if (window.navigator.userAgent.indexOf("MSIE 8.0") == -1) {
                t += p.clientTop; //上边框
                l += +p.clientLeft; //左边框
            }
            t += p.offsetTop;
            l += p.offsetLeft;
            p = p.offsetParent;
        }
        return {left: l, top: t};
    }
}