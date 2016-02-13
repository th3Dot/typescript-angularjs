var App;
(function (App) {
    'use strict';
    var myApp = angular.module('myApp', [])
        .controller('mainCtrl', App.MainCtrl);
})(App || (App = {}));
