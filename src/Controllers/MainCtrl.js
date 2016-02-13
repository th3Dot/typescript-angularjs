var App;
(function (App) {
    'use strict';
    var MainCtrl = (function () {
        function MainCtrl($scope) {
            this.$scope = $scope;
            $scope.name = 'Martin';
        }
        MainCtrl.$inject = [
            '$scope'
        ];
        return MainCtrl;
    }());
    App.MainCtrl = MainCtrl;
})(App || (App = {}));
