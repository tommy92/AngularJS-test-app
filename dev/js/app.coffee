'use strict'

tomsApp = angular.module( 'TomsApp', ['ngRoute'] )

tomsApp.config( ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
			$routeProvider
				.when( '/', {templateUrl: 'main.html', controller: 'HomeCtrl'} )
				# .when( '/page1', {templateUrl: 'page1.html', controller: Page1Ctrl} )
				# .when( '/page2', {templateUrl: 'page2.html', controller: Page2Ctrl} )
				.otherwise({ redirectTo: '/' })

			$locationProvider.html5Mode(true)
			return
])

# tomsApp.controller('HomeCtrl', ($scope) ->
# 	$scope.name = "Tom"
# 	return
# )

HomeCtrl = ($scope) ->
	$scope.name = "test"
	$scope.surname = "Jaworski"