var util={
    //��⸴�����ݶ��������
    typeTest:function(value,type){
        return Object.prototype.toString.call(value)=="[object "+type.charAt(0).toUpperCase()+type.slice(1)+"]";
    }
};