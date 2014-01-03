'use strict'

angular.module('TomsApp.controllers', [])
	.controller('HomeCtrl', ['$scope', ($scope) ->
		$scope.name = "Tom"
		$scope.surname = "Jaworski"
	])
	.controller('Page1Ctrl', ['$scope', ($scope) ->
		$scope.pageTitle = 'Page 1'
	])
	.controller('Page2Ctrl', ['$scope', ($scope) ->
		$scope.pageTitle = 'Page 2'
	])
	.controller('Page3Ctrl', ['$scope', ($scope) ->
		$scope.pageTitle = 'Page 3'
	])