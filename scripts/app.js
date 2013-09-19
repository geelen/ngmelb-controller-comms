(function(angular) {
  'use strict';

  var app = angular.module("ngMelbDemo", []);

  app.config(function($httpProvider) {
    // You only get 60 unathed requests per hour with Github
    // so if you find that you've run out, jump on to
    // https://github.com/settings/applications and
    // generate a Personal Access Token.
    // $httpProvider.defaults.headers.common.Authorization = "token SHA1GOESHERE";
  });

})(window.angular);
