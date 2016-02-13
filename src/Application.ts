/// <reference path="../_app.ts"/>

module App {
  'use strict';
  var myApp = angular.module('myApp', ['ui.router'])
    .controller('mainCtrl', MainCtrl)

  myApp.config(function($stateProvider : angular.ui.IStateProvider,
      $urlRouterProvider : angular.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise("/login");

        $stateProvider
          .state("login", {
            url : "/login",
            templateUrl: "src/Partials/login.html"
          })
          .state("app", {
            url : "/app",
            templateUrl: "src/Partials/app.html"
          });
    });
}
