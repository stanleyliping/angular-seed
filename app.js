'use strict';
// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ui.router',
    'ngRoute',
    'myApp.index',
    'myApp.unlogin',
    'myApp.version'
])

/* 初始化全局配置 */
.config(['$controllerProvider', '$stateProvider', '$provide',
    function($controllerProvider, $stateProvider, $provide) {

        // 注册angular全局功能提供器
        var register = {
            controller: $controllerProvider.register,
            constant: $provide.constant,
            service: $provide.service
        };
        myApp.register = register;
    }
])

//路由配置
.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
    function($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('!');

        // $urlRouterProvider.otherwise('/');
        $stateProvider.state('home', {
            url: "/",
            templateUrl: "index.html",
            controller: "myAppCtrl",
            data: {
                pageTitle: '首页'
            }

        })
        $stateProvider.state('index', {
            url: "/index",
            name: 'index',
            templateUrl: "app/modules/index/index.html",
            controller: "indexCtrl",
            data: {
                pageTitle: 'index'
            }

        })
        $stateProvider.state('unlogin', {
            url: "/unlogin",
            name: 'unlogin',
            templateUrl: "app/modules/unlogin/unlogin.html",
            controller: "unloginCtrl",
            data: {
                pageTitle: 'unlogin'
            }
        })
    }
])

.controller('myAppCtrl', ['$scope', '$state', '$http',
    function($scope, $state, $http) {
        $state.go("unlogin");

        // var promise = $http({
        //     method: 'GET',
        //     url: 'http://128.1.1.4:8000/Api/wsmp/v1/Mobile/scada/QueryAllRecentPoints'
        // });
        // promise.then(function(resp) {
        //     console.log(resp);
        // }, function(resp) {
        //     console.log(resp);
        // });
        // $state.go("page2",{type:1});
    }
])