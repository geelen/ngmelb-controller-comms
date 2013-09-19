(function(app) {
  'use strict';

  app.controller("ReposController", function ($scope, $http, GlobalState) {
    $http.get("https://api.github.com/users/" + $scope.username + "/repos")
      .success(function(data) {
        $scope.repos = data;
      });

    $scope.clickedOnRepo = function(repo) {
      GlobalState.currentRepo = repo;
    }
  });

})(angular.module("ngMelbDemo"));
