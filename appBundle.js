/// <reference path="./typings/tsd.d.ts"/>
/// <reference path="../../_app.ts"/>
var App;
(function (App) {
    'use strict';
    var MainCtrl = (function () {
        function MainCtrl($scope) {
            this.$scope = $scope;
            this.myPromt = prompt;
            $scope.name = 'Martin';
            $scope.surname = 'Kalenda';
        }
        MainCtrl.$inject = [
            '$scope'
        ];
        return MainCtrl;
    })();
    App.MainCtrl = MainCtrl;
})(App || (App = {}));
/// <reference path="../_app.ts"/>
var App;
(function (App) {
    'use strict';
    var myApp = angular.module('myApp', ['ui.router'])
        .controller('mainCtrl', App.MainCtrl);
    myApp.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");
        $stateProvider
            .state("login", {
            url: "/login",
            templateUrl: "src/Partials/login.html"
        })
            .state("app", {
            url: "/app",
            templateUrl: "src/Partials/app.html"
        });
    });
})(App || (App = {}));
//# sourceMappingURL=appBundle.js.map