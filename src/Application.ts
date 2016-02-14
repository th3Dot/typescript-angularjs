/// <reference path="../_app.ts"/>

module App {
  'use strict';
  var myApp = angular.module('myApp', ['ui.router'])
    .controller('mainCtrl', MainCtrl)
    .controller('loginCtrl', LoginCtrl);

  myApp.config(function($stateProvider : angular.ui.IStateProvider,
      $urlRouterProvider : angular.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise("/login");

        $stateProvider
          .state("login", {
            url : "/login",
            views : {
              "header" : { templateUrl : "src/Partials/login/login_header.html" },
              "content" : { templateUrl : "src/Partials/login/login_content.html" },
              "footer" : { templateUrl : "src/Partials/common/footer.html" }
            }
          })
          .state("app", {
            url : "/app",
            views : {
              "header" : { templateUrl : "src/Partials/app/app_header.html" },
              "content" : { templateUrl : "src/Partials/app/app_content.html" },
              "footer" : { templateUrl : "src/Partials/common/footer.html" }
            }
          });
    });
}
