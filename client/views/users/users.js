(function(){
  'use strict';

  angular.module('trainer')
  .controller('UsersCtrl', ['$rootScope', '$scope', '$state', 'User', function($rootScope, $scope, $state, User){
    $scope.user   = {};
    $scope.avatar = [];
    $scope.mode   = $state.current.name[0].toUpperCase() + $state.current.name.substring(1);

    if($scope.mode === 'logout'){
      User.logout().then(function(){
        $state.go('home');
      });
    }

    $scope.submit = function(){
      if($scope.userForm.$valid){
        if($state.current.name === 'register'){
          User.register($scope.user, $scope.avatar[0]).then(function(res){
            console.log(res.data);
            $rootScope.rootuser = res.data;
            $state.go('home');
          }, function(res){
            $scope.user = {};
          });
        }else{
          User.login($scope.user).then(function(res){
            $rootScope.rootuser = res.data;
            $state.go('home');
          }, function(res){
            $scope.user = {};
          });
        }
      }
    };
  }]);
})();