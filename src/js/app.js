(function() {
  'use strict';
  var tomsApp;

  tomsApp = angular.module('TomsApp', ['ngRoute', 'TomsApp.controllers']);

  tomsApp.config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
        templateUrl: 'main.html',
        controller: 'HomeCtrl'
      }).when('/page1', {
        templateUrl: 'page1.html',
        controller: 'Page1Ctrl'
      }).when('/page2', {
        templateUrl: 'page2.html',
        controller: 'Page2Ctrl'
      }).when('/page3', {
        templateUrl: 'page3.html',
        controller: 'Page3Ctrl'
      }).otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
    }
  ]);

}).call(this);

(function() {
  'use strict';
  angular.module('TomsApp.controllers', []).controller('HomeCtrl', [
    '$scope', function($scope) {
      $scope.name = "Tom";
      return $scope.surname = "Jaworski";
    }
  ]).controller('Page1Ctrl', [
    '$scope', function($scope) {
      return $scope.pageTitle = 'Page 1';
    }
  ]).controller('Page2Ctrl', [
    '$scope', function($scope) {
      return $scope.pageTitle = 'Page 2';
    }
  ]).controller('Page3Ctrl', [
    '$scope', function($scope) {
      return $scope.pageTitle = 'Page 3';
    }
  ]);

}).call(this);
