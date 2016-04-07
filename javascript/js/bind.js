function bind(ele, type, fn) {
    if (ele.addEventListener) {
        ele.addEventListener(type, fn, false);
    }
    else if (ele.attachEvent) {
        if (!ele["fnEvent" + type]) { //给不同的事件类型定义不同的数组,来有区别的保存方法
            ele["fnEvent" + type] = [];
        }
        var a = ele["fnEvent" + type];
        for (var i = 0; i < a.length; i++) {
            if (a[i].flag == fn) {
                return;
            }
        }

        var fnTemp = function () {
            fn.call(ele);
        };
        fnTemp.flag = fn;//识别的标志
        a.push(fnTemp);
        ele.attachEvent("on" + type, fnTemp);
    }
}
function unbind(ele, type, fn) {
    if (ele.removeEventListener) {
        ele.removeEventListener(type, fn, false);
    }
    else if (ele.detachEvent) {
        var a = ele["fnEvent" + type];
        if (a && a.length) {
            for (var i = 0; i < a.length; i++) {
                if (a[i].flag == fn) {
                    ele.detachEvent("on" + type, a[i]); //将事件移除
                    a.splice(i, 1);  //从数组中移除
                    return;
                }
            }
        }
    }
}