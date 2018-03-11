'use strict';
// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ui.router',
    'ngRoute',
    'myApp.index',
    'myApp.unlogin',
    'myApp.version'
])

.constant('wapSettings', window.settings)
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

// .factory('apiRedirectInterceptor', ['$location','settings',
//         function ($location,settings) {
//             var router;
//             if ($location.$$absUrl.indexOf('128.1') != -1 || $location.$$absUrl.indexOf('localhost') != -1)
//                 router = settings.innerRouter;
//             else router = settings.outterRouter
//             var interceptor = {
//                 request: function (config) {
//                     if (router) {
//                         for (var key in router) {
//                             var pattern = key.replace('*', '.*').replace('/', '\\/');
//                             var re = new RegExp(pattern);
//                             if (re.test(config.url)) {
//                                 config.url = router[key] + config.url;
//                             }
//                         }
//                     }
//                     var url = config.url;
//                     if (angular.isObject(config.url)) {
//                         url = config.url.url;
//                     }
//                     console.log(url);

//                     return config;
//                 }
//             };
//             return interceptor;
//         }
//     ])

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

.controller('myAppCtrl', ['$scope', '$state', '$http','wapSettings',
    function($scope, $state, $http,wapSettings) {
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