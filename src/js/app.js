(function() {
  'use strict';
  var HomeCtrl, tomsApp;

  tomsApp = angular.module('TomsApp', ['ngRoute']);

  tomsApp.config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
        templateUrl: 'main.html',
        controller: 'HomeCtrl'
      }).otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
    }
  ]);

  HomeCtrl = function($scope) {
    $scope.name = "test";
    return $scope.surname = "Jaworski";
  };

}).call(this);
