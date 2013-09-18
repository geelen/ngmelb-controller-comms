(function(angular) {
  'use strict';

  var app = angular.module("ngMelbDemo", []);

  app.config(function($httpProvider) {
    $httpProvider.defaults.headers.common.Authorization = "token 8e0e97fe6cfc172a1d640dac677255008e8ee73d";
  });

})(window.angular);
