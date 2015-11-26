var util={
    //检测复数数据对象的类型
    typeTest:function(value,type){
        return Object.prototype.toString.call(value)=="[object "+type.charAt(0).toUpperCase()+type.slice(1)+"]";
    }
};