var userInfoModule=angular.module("UserInfoModel",[]);
userInfoModule.controller("UserInfoCtrl",function($scope){
    $scope.userInfo={
        email:"654435677@qq.com",
        password:"123456",
        autoLogin:true
    };
    $scope.getFormData=function(){
        console.log($scope.userInfo);
    }
    $scope.setFormData=function(){
        $scope.userInfo={
            email:"1234567@qq.com",
            password:"123456789",
            autoLogin:false
        };
    }
});