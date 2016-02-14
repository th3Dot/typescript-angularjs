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
/// <reference path="../../_app.ts"/>
var App;
(function (App) {
    'use strict';
    var LoginCtrl = (function () {
        function LoginCtrl() {
        }
        return LoginCtrl;
    })();
    App.LoginCtrl = LoginCtrl;
})(App || (App = {}));
/// <reference path="../_app.ts"/>
var App;
(function (App) {
    'use strict';
    var myApp = angular.module('myApp', ['ui.router'])
        .controller('mainCtrl', App.MainCtrl)
        .controller('loginCtrl', App.LoginCtrl);
    myApp.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");
        $stateProvider
            .state("login", {
            url: "/login",
            views: {
                "header": { templateUrl: "src/Partials/login/login_header.html" },
                "content": { templateUrl: "src/Partials/login/login_content.html" },
                "footer": { templateUrl: "src/Partials/common/footer.html" }
            }
        })
            .state("app", {
            url: "/app",
            views: {
                "header": { templateUrl: "src/Partials/app/app_header.html" },
                "content": { templateUrl: "src/Partials/app/app_content.html" },
                "footer": { templateUrl: "src/Partials/common/footer.html" }
            }
        });
    });
})(App || (App = {}));
//# sourceMappingURL=appBundle.js.map