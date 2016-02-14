/// <reference path="../../_app.ts"/>

module App {
  'use strict';

  export class MainCtrl {
    public static $inject = [
  		'$scope'
  	];

    constructor(private $scope){
      $scope.name = 'Martin';
      $scope.surname = 'Kalenda';
    }
  }
}
