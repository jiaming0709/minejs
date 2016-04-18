/**
 * 所一系列的 jsonp 操作封装到一起 */

(function () {
    var namespace = {};

    var globalName = "x";

    /**
     *
     * @param url 请求的jsonp 接口
     * @param data  发送的参数
     * @param jsonpcallback   server定义好的 回调函数参数参数名
     * @param callback   定义的回调函数
     */
    var jsonp = function (url, data, jsonpcallback, callback) {
        var cbName = "cb" + jsonp.count++;

        //定义全局函数名
        var callbackName = "window." + globalName + ".jsonp." + cbName;

        //定义全局函数体
        namespace.jsonp[cbName] = function (data) {
            try {
                callback(data);
            }
            catch (e) {
                script.parentNode.removeChild(script);
                delete window[globalName]["jsonp"][cbName];
            }
        };

        var script = document.createElement("script");
        if (data) {
            data = tool.encodeToURIString(data);
        }
        if (typeof jsonpcallback === "string") {
            jsonpcallback += "=" + callbackName;
        }

        url = tool.hasSearch(url, data);
        url = tool.hasSearch(url, jsonpcallback);

        script.src = url;
        document.body.appendChild(script);

    };


    jsonp.count = 0;


    namespace.jsonp = jsonp;
    this.x = namespace;

    tool = {
        encodeToURIString: function (data) {
            if (typeof data === "string") return;
            if (!data) return "";
            var arr = [];
            for (var n in data) {
                if (!data.hasOwnProperty(n)) continue;
                arr.push(encodeURIComponent(n) + "=" + encodeURIComponent(data[n]));
            }
            return arr.join("&");
        },
        hasSearch: function (url, padString) {
            if (!padString) return url;
            if (typeof padString != "string") return url;
            return url + (/\?/.test(url) ? "&" : "?") + padString;
        }
    }
})();

//window.x.jsonp.cb1();