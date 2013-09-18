(function(app) {
  'use strict';

  app.controller("ReposController", function ($scope, $http) {
    $http.get("https://api.github.com/users/" + $scope.username + "/repos")
      .success(function(data) {
        $scope.repos = data;
      });
  });

})(angular.module("ngMelbDemo"));
