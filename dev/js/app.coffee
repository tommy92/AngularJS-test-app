'use strict'

tomsApp = angular.module( 'TomsApp', ['ngRoute', 'ngTouch', 'TomsApp.controllers'] )

tomsApp.config( ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
	$routeProvider
		.when( '/', {templateUrl: 'main.html', controller: 'HomeCtrl'} )
		.when( '/page1', {templateUrl: 'page1.html', controller: 'Page1Ctrl'} )
		.when( '/page2', {templateUrl: 'page2.html', controller: 'Page2Ctrl'} )
		.when( '/page3', {templateUrl: 'page3.html', controller: 'Page3Ctrl'} )
		.otherwise({ redirectTo: '/' })

	$locationProvider.html5Mode(true)
	return
])