'use strict';

// Declare app level module which depends on views, and components
var myApp=angular.module('myApp', [
	'ui.router',
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$stateProvider','$locationProvider', '$urlRouterProvider', function($stateProvider,$locationProvider, $urlRouterProvider) {
  $locationProvider.hashPrefix('!');

  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home',{
        url:"/",
        templateUrl:"index.html",
        controller:"mainCtrl",
        data:{
            pageTitle:'首页'
        }
     
    })
}]);
