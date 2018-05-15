'use strict';

var app = angular.module('apiService', []);
app.config(['$controllerProvider', '$stateProvider', '$provide',
    function($controllerProvider, $stateProvider, $provide) {

        // 注册angular全局功能提供器
        var register = {
            controller: $controllerProvider.register,
            constant: $provide.constant,
            service: $provide.service
        };
        app.register = register;
        //注册apiService模块
        app.register.service('apiService', ['$rootScope', 'wapSettings', '$http', '$location', function($rootScope, wapSettings, $http, $location) {

            var QYwechatRes = wapSettings.resources['QYwechatRes'];
            var userInfoRes = wapSettings.resources['userInfoRes'];

            ////////////////////企业微信接口
            //测试接口，发送信息给JinYuanZhen
            this.wechatSendMessageTest = function() {
                var promise = $http.get(QYwechatRes + 'sendMessageTest');
                return promise;
            }
            this.getQYMemberById = function(id) {
                var promise = $http.get(QYwechatRes + 'getQYMemberById?id='+id);
                return promise;
            }

            //userInfo接口
            this.getUserInfoByName = function(userName) {
                var promise = $http.get(userInfoRes + 'getUserInfoByName?userName=' + userName);
                return promise;
            }
        }]);
    }
])