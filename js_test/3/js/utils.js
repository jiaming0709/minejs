var utils = {
    toJson: function (str) {
        return "JSON" in window ? JSON.parse(str) : eval("(" + str + ")");
    },
    ajax: function (url, callback) {
        var _this=this;
        var xhr=new XMLHttpRequest();
        xhr.open("get",url,true);
        xhr.onreadystatechange=function(){
            if(this.readyState==4 && /^2\d{2}$/.test(this.status)){
                var val=this.responseText;
                typeof callback=="function"?callback(_this.toJson(val)):null;
            }
        };
        xhr.send();
    }
}