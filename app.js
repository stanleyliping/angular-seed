'use strict';
// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ui.router',
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
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

/* 初始化路由配置 */
// .config(['$stateProvider', '$sceProvider',
//     function($stateProvider, $sceProvider) {
//         $stateProvider.state({
//             name: 'view1',
//             url: '/view1',
//             // abstract: true,
//             templateUrl: 'view1/view1.html'
//         });
//     }
// ])

.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
    function($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('!');

        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home', {
            url: "/",
            templateUrl: "index.html",
            controller: "myAppCtrl",
            data: {
                pageTitle: '首页'
            }

        })
        $stateProvider.state('view1', {
            url: "/app/view1",
            name: 'view1',
            templateUrl: "app/view1/view1.html",
            controller: "View1Ctrl",
            data: {
                pageTitle: 'view1'
            }

        })
        $stateProvider.state('view2', {
            url: "/view2",
            name: 'view2',
            templateUrl: "app/view2/view2.html",
            controller: "View2Ctrl",
            data: {
                pageTitle: 'view2'
            }
        })
    }
])

.controller('myAppCtrl', ['$scope','$state', function($scope,$state) {
    $state.go("view1");
    // $state.go("page2",{type:1});
}])