'use strict'

angular.module('TomsApp.controllers', [])
	.controller('HomeCtrl', ['$scope', ($scope) ->
		$scope.pageTitle = "Homepage"
		$scope.bannerText = "This is an example to show the potential of an offcanvas layout pattern in Bootstrap. Try some responsive-range viewport sizes to see it in action."
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
	.controller('NavCtrl', ['$scope', '$window', '$location', ($scope, $window, $location) ->
		$scope.setActiveClass = (path) ->
			if $location.path().substr(0, path.length) is path
				if path is "/" and $location.path() is "/"
					return "active"
				else if path is "/"
					return ""

				return "active"
			else
				return ""
	])