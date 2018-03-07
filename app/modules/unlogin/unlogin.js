'use strict';

angular.module('myApp.unlogin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/unlogin', {
    templateUrl: 'app/modules/unlogin/unlogin.html',
    controller: 'unloginCtrl'
  });
}])

.controller('unloginCtrl', [function() {
	console.log('unloginCtrl');
}]);