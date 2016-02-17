messages = [
    {
        id: 0,
        sender: "0jean@fds.com",
        subject: "hi there,friend",
        date:"Dec 7, 2015 12:23:00",
        recipients:["0jean@fds.com"],
        message:"hey,we should get together"
    },
    {
        id: 1,
        sender: "1jean@fds.com",
        subject: "hi there,friend",
        date:"Dec 7, 2015 12:23:00",
        recipients:["1jean@fds.com"],
        message:"hey,we should get together"
    },
    {
        id: 2,
        sender: "2jean@fds.com",
        subject: "hi there,friend",
        date:"Dec 7, 2015 12:23:00",
        recipients:["2jean@fds.com"],
        message:"hey,we should get together"
    },
    {
        id: 3,
        sender: "3jean@fds.com",
        subject: "hi there,friend",
        date:"Dec 7, 2015 12:23:00",
        recipients:["3jean@fds.com"],
        message:"hey,we should get together"
    }
];




function routeConfig($routeProvider) {
    $routeProvider
        .when("/",{
            templateUrl:"views/hello.html"
        })
        .when("/views", {
            controller: listController,
            templateUrl: "views/list.html"
        })
        .when("/views/:id",{
            controller:detailsController,
            templateUrl:"views/details.html"
        })
        .otherwise({
            redirectTo:"/views"
        })
}

function listController($scope){
    $scope.messages=messages;
}
function detailsController($scope,$routeParams){
$scope.message=messages[$routeParams.id]
}

var aMailServices = angular.module("AMail", ["ngRoute"]);
aMailServices.config(routeConfig);