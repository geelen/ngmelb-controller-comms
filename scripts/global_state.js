(function(app) {
  'use strict';

  app.factory("GlobalState", function ($rootScope) {
    var GlobalState = $rootScope.$new(false);
    GlobalState.currentRepo = undefined;
    return GlobalState;
  });

})(angular.module("ngMelbDemo"));
