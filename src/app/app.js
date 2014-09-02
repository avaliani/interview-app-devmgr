'use strict';

angular.module('devManager', [
  'ngRoute',
  'dashboard'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo:'/dashboard'});
}]);
