var getXHR = (function () {
    log = function () {
        console.log("has if");
        return true
    };

    var list = [
        function () {
            return new XMLHttpRequest();
        },
        function () {
            return ActiveXObject("Microsoft.XMLHTTP");
        },
        function () {
            new ActiveXObject("Msxm12.XMLHTTP");
        },
        function () {
            new ActiveXObject("Msxm13.XMLHTTP");
        }
    ];

    var len = list.length;
    var xhr = null;
    while (len--) {
        try {
            list[len]();
            xhr = list[len];
            break;
        } catch (e) {
            xhr = null;
            continue;
        }
    }
    if (xhr != null) {
        return xhr;
    }
    throw new Error("当前浏览器不支持此方法")
})();