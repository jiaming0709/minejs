(function (global, undefined) { //防止 undefined被重写(IE中,undefined可被重写)
    //$.noConflict();
    var x = {};
    var defaultOptions = {
        url: "",
        data: "",
        type: "",
        async: true,
        success: function (data) {
        },
        error: function (errInfo) {
        },
        header: function () {
        },
        overrideMimeType: function () {

        },
        catch: true,
        timeout: 0,
        processData: true,  //是否格式化参数为uri string
        contentType: 'application/x-www-form-urlencoded', //请求的mime类型,默认为表单提交
        dataType: "text"  //text/json
    };
    var ajax = function (options) {
        if (!tool.isObject(options)) {
            throw new TypeError("Error");
        }
        var userOptions = tool.extent(defaultOptions, options);
        userOptions.data = tool.encodeToURIString(userOptions.data);

        var xhr = tool.getXHR();
        //是否是get系,需要把data接到url后
        if (/^(get|delete|head)$/img.test(userOptions.type)) {
            userOptions.url = tool.hasSearch(userOptions.url, userOptions.data);
            userOptions.data = null;
        }
        //是否走缓存,不走url后加随机数
        if (userOptions.catch === false) {
            var random = "_=" + (Math.random() * 10000).toFixed(0);
            userOptions.url = tool.hasSearch(userOptions.url, random);

        }

        if (tool.isString(userOptions.overrideMimeType)) {
            xhr.overrideMimeType(userOptions.overrideMimeType);
        }
        if (tool.isNumber(userOptions.timeout) && userOptions.timeout > 0) {
            xhr.timeout = userOptions.timeout;
            if ("ontimeout" in xhr) {
                xhr.ontimeout = function () {
                    userOptions.error("timeout");
                }
            } else {
                setTimeout(function () {
                    if (xhr.readyState != 4) {
                        xhr.about();
                    }
                }, xhr.timeout);
            }
        }

        //当给服务器发送的数据为二进制或者formate数据时,userOptions.processData=false
        if (/^(post|put)$/img.test(userOptions.type) && userOptions.processData == true) {
            userOptions.data = tool.encodeToURIString(userOptions.data);
        }


        xhr.open(userOptions.type, userOptions.url, userOptions.async);
        if (tool.isObject(userOptions.header)) {
            tool.eachObject(userOptions.header, function (key, value) {
                xhr.setRequestHeader(key, value);
            })
        }
        if (userOptions.contentType && tool.isString(userOptions.contentType)) {
            xhr.setRequestHeader('content-type', userOptions.contentType);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == "4") {
                var responseText = xhr.responseText;
                if (/^2\d{2}$/.test(xhr.status)) {
                    if (userOptions.dataType === "json") {
                        try {
                            responseText =tool.JSONParse(responseText);
                        } catch (e) {
                            userOptions.error(e);
                            return;
                        }
                    }
                    userOptions.success(responseText);
                } else if (/^(4|5\d{2})$/.test(xhr.state)) {
                    userOptions.error(xhr.status);
                }
            }
        };
        xhr.send(userOptions.data);
    };

    var getType = function (type) {
        return function (obj) {
            return Object.prototype.toString.call(obj) === "[object " + type + "]";
        }
    };

    var tool = {
        getXHR: function () {
            return new XMLHttpRequest();
        },
        //合并多个对象,当key冲突时,前面对象的被覆盖
        extent: function () {
            var params = [].slice.call(arguments, 0);
            var voidObj = {};
            this.each(params, function (item) {
                tool.eachObject(item, function (key, value) {
                    voidObj[key] = value || "";
                })
            });
            return voidObj;
        },
        each: function (list, callback, context) {
            if ([].forEach) {
                [].forEach.call(list, callback, context);
            } else {
                for (var i = 0, j = list.length; i < j; i++) {
                    callback.call(context, list[i], i, list);
                }
            }
        },
        eachObject: function (obj, callback, context) {
            for (var n in obj) {
                if (!obj.hasOwnProperty(n)) continue;
                callback.call(context, n, obj[n]);
            }
        },
        init: function () {
            this.each(["Object", "Function", "Array", "String", "Number"], function (item) {
                tool["is" + item] = getType(item);
            });
            return tool;
        },
        encodeToURIString: function (data) {
            if (this.isString(data))return;
            if (!this.isObject(data))return "";
            var arr = [];
            this.eachObject(data, function (key, value) {
                arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
            });
            return arr.join("&");
        },
        hasSearch: function (url, padString) {
            if (!padString) return url;
            if (/\?/.test(url)) {
                return url + '&' + padString;
            }
            else {
                return url + '?' + padString;
            }

            //return url + (/\?/.test(url)) ? '&' : '?' + padString;
        },
        JSONParse: function (jsonString) {
            if (window.JSON) {
                return JSON.parse(jsonString);
            }
            return eval("(" + jsonString + ")");
        }
    };
    tool.init();
    x.ajax = ajax;

    //封装简单的get post
    tool.each(["get", "post"], function (item) {
        x[item] = function (url, data, callback, dataType) {
            ajax({
                url: url,
                type: item,
                data: data,
                success: callback,
                dataType: dataType
            })
        }
    });

    //解决全局同名的冲突
    var globalX = global.x;
    x.noConflict = function (symbol) {   //backbone lodash jquery
        if (symbol && tool.isString(symbol)) {
            window.symbol = x;
        }
        window.x = globalX;
        return x;
    };

    global.x = x; //暴露到全局环境中
})(this);//自执行函数this是window

//http:username:pass@www.baidu.com:80/index.html?a=1&b=2#hash
//<scheme>:<username>:<password>@<hostname>:<port><pathname>?<search>#<hash>