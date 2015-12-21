angular.module('starter.controllers', [])

  .controller('DashCtrl', function($scope, $ionicSlideBoxDelegate, Banner, Industry, Company) {
    $scope.banners = Banner.query();
    $scope.banners.$promise.then(function(){
      $ionicSlideBoxDelegate.update();
    });
    $scope.industries = Industry.query();

    $scope.companies = [];
    $scope.pageNum = 1;
    $scope.loadMore = function() {
      Company.query({page: $scope.pageNum}, function(data) {
        $scope.companies = $scope.companies.concat(data);
        //$scope.companies.push(data);
        $scope.$broadcast('scroll.infiniteScrollComplete');
        $scope.pageNum +=1;
      });
    };
    $scope.loadMore();

    $scope.doRefresh = function() {
      $scope.$broadcast("scroll.refreshComplete");
    };

  })

  .controller('CouponsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  })
  .controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
