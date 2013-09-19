(function(app) {
  'use strict';

  app.controller("FilesController", function ($scope, $http, GlobalState) {
    $scope.currentRepo = undefined;

    GlobalState.$watch("currentRepo", function(repo) {
      $scope.currentRepo = repo;
      if (repo) {
        $http.get("https://api.github.com/repos/" + $scope.username + "/"+ repo.name +"/contents")
          .success(function(data) {
            $scope.files = data;
          });
      }
    })

  });

})(angular.module("ngMelbDemo"));
