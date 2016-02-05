var aMailService = angular.module("AMail", ["ngRoute"]);
function emailRouteConfig($routeProvider) {
    $routeProvider
        .when("/views", {
            controller: ListController,
            templateUrl: 'views/list.html'
        })
        .when("/views/:id", {
            controller: DetailController,
            templateUrl: 'views/details.html'
        })
        .otherwise({
            redirectTo: "/views"
        });
}

aMailService.config(emailRouteConfig);

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

function ViewService() {
    // model...
    // get data, Ajax....
}

ViewService.getViews = function() {
        // $.get("http://www.vc.cn/api/views.json", {}, function(){
        //   Ajax get data
        // })
        return messages;

}

function ListController($scope){
    // console.log('-------');
    array = ViewService.getViews();
    console.log(array);
    $scope.messages = array;
}

function DetailController($scope,$routeParams){
    console.log('DetailController triggered');
    $scope.message=messages[$routeParams.id];

}


