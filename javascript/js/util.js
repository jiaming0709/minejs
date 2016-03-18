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
    }
}