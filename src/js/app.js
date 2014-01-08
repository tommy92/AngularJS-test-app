(function() {
  'use strict';
  var tomsApp;

  tomsApp = angular.module('TomsApp', ['ngRoute', 'ngTouch', 'TomsApp.controllers']);

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
      $scope.pageTitle = "Homepage";
      return $scope.bannerText = "This is an example to show the potential of an offcanvas layout pattern in Bootstrap. Try some responsive-range viewport sizes to see it in action.";
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
  ]).controller('NavCtrl', [
    '$scope', '$window', '$location', function($scope, $window, $location) {
      return $scope.setActiveClass = function(path) {
        if ($location.path().substr(0, path.length) === path) {
          if (path === "/" && $location.path() === "/") {
            return "active";
          } else if (path === "/") {
            return "";
          }
          return "active";
        } else {
          return "";
        }
      };
    }
  ]).controller('SwipeContent', [
    '$scope', function($scope) {
      $scope.setActiveView = "active-main";
      $scope.swipeToLeft = function() {
        if ($scope.setActiveView === "active-main") {
          return $scope.setActiveView = "active-right-sidebar";
        } else if ($scope.setActiveView === "active-left-sidebar") {
          return $scope.setActiveView = "active-main";
        } else {
          return false;
        }
      };
      return $scope.swipeToRight = function() {
        if ($scope.setActiveView === "active-main") {
          return $scope.setActiveView = "active-left-sidebar";
        } else if ($scope.setActiveView === "active-right-sidebar") {
          return $scope.setActiveView = "active-main";
        } else {
          return false;
        }
      };
    }
  ]);

}).call(this);
