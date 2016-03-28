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
            alert(window.navigator.userAgent.indexOf("MSIE 8.0"));
            if (window.navigator.userAgent.indexOf("MSIE 8.0") == -1) {
                t += p.clientTop; //上边框
                l += +p.clientLeft; //左边框
            }
            t += p.offsetTop;
            l += p.offsetLeft;
            p = p.offsetParent;
        }
        return {left: l, top: t};
    },
    getCss: function (ele, attr) {
        if (window.getComputedStyle) {
            return getComputedStyle(ele, null)[attr];
        }
        else {
            return ele.currentStyle[attr];
        }
    },
    addCss: function (ele, attr) {
        var c_name = ele.getAttribute("class");
        c_name += " " + attr;
        ele.className = c_name;
    },
    removeCss: function (ele, attr) {
        var c_name = ele.getAttribute("class");
        var reg = new RegExp("\\b" + attr + "\\b", "g");
        ele.className = c_name.replace(reg, " ");
    },
    getIndex: function (_this) {
        var index = 0;
        var prev = _this.previousSibling;
        while (prev) {
            if (prev.nodeType == 1) {
                index++;
            }
            prev = prev.previousSibling;
        }
        return index;
    },
    children: function (parent, tagName) {
        var childNodes = parent.childNodes;
        var ary = [];
        for (var i = 0; i < childNodes.length; i++) {

            if (typeof tagName == "string") {
                if (childNodes[i].tagName == tagName.toUpperCase()) {
                    ary.push(childNodes[i]);
                }
            }
            else if (childNodes[i].nodeType == 1) {
                ary.push(childNodes[i]);
            }
            else {
                return null;
            }
        }
        return ary;
    },
    siblings: function (ele) {
        var child = ele.parentNode.children;
        var ary = [];
        for (var i = 0; i < child.length; i++) {
            if (child[i].nodeType == 1 && child[i] != ele) {
                ary.push(child[i]);
            }
        }
        return ary;
    },
    siblings_2: function (ele) {
        var ary = [];
        var p = ele.previousSibling;
        while (p) {
            if (p.nodeType == 1) {
                ary.push(p);
            }
            p = p.previousSibling;
        }
        ary.reverse();
        var n = ele.nextSibling;
        while (n) {
            if (n.nodeType == 1) {
                ary.push(n);
            }
            n = n.nextSibling;
        }
        return ary;
    },
    next: function (ele) {
        if (typeof ele.nextElementSibling == "object") {
            return ele.nextElementSibling;
        }
        else {
            var n = ele.previousSibling;
            while (n) {
                if (n.nodeType == 1) {
                    return n;
                }
            }
        }
        return null;
    },
    prev: function (ele) {
        var p = ele.previousSibling;
        while (p) {
            if (p.nodeType == 1) {
                return p;
            }
        }
        return null;
    },
    nextSiblings: function (ele) {
        var ary = [];
        var n = ele.nextSibling;
        while (n) {
            if (n.nodeType == 1) {
                ary.push(n);
            }
            n = n.nextSibling;
        }
        return ary;
    },
    prevSiblings: function (ele) {
        var ary = [];
        var p = ele.previousSibling;
        while (p) {
            if (p.nodeType == 1) {
                ary.push(p);
            }
            p = p.previousSibling;
        }
        return ary;
    },
    insertAfter: function (newEle, oldEle) {
        //if(oldEle.nextSibling){
        //    oldEle.parentNode.insertBefore(newEle,oldEle.nextSibling);
        //}
        //else{
        //    oldEle.parentNOde.appendChild(newEle);
        //}
        oldEle.parentNode.insertBefore(newEle, oldEle.nextSibling);
    },
    prependChild: function (parent, newEle) {
        parent.insertBefore(newEle, parent.firstChild);
    },
    getEleByClassName: function (class_name, eles) {
        //var reg=/(?:^| )tab(?: |$)/;
        //var reg=new RegExp("\\b"+str+"\\b");
        var reg = new RegExp("(?:^| )" + class_name + "(?: |$)");
        var ary = [];
        for (var i = 0; i < eles.length; i++) {
            //if(eles[i].className.indexOf("tab")>-1){}
            if (reg.test(eles[i].className)) {
                ary.push(eles[i]);
            }
        }
        return ary;
    }
};