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
            var userDaoRes = wapSettings.resources['userDaoRes'];
            var expressInfoRes = wapSettings.resources['expressInfoRes'];
            var uploadRes = wapSettings.resources['uploadRes'];


            ////////////////////企业微信接口
            //测试接口，发送信息给JinYuanZhen
            this.wechatSendMessageTest = function() {
                var promise = $http.get(QYwechatRes + 'sendMessageTest');
                return promise;
            }
            //通过企业号用户id获取企业号用户信息
            this.getQYMemberById = function(id) {
                var promise = $http.get(QYwechatRes + 'getQYMemberById/'+id);
                return promise;
            }


            //////////////////////userInfo接口
            //获取所有用户信息
            this.getAllUserInfo= function() {
                var promise = $http.get(userInfoRes + 'getAllUserInfo/');
                return promise;
            }

            //通过用户姓名获取用户信息
            this.getUserInfoByName = function(userName) {
                var promise = $http.get(userInfoRes + 'getUserInfoByName/' + userName);
                return promise;
            }



            //////////////////////userDao接口
            this.loginRequest=function(userName,password){
                var promise = $http.get(userDaoRes + 'loginRequest/' + userName+'/'+password);
                return promise;
            }


            ///////////////////////express接口
            this.insertExpressInfoWithImg=function(formData){
                var promise=$http({
                    url: expressInfoRes+'insertExpressInfoWithImg/',
                    method: 'POST',
                    data: formData,
                    headers: {  
                        'Content-Type': undefined  
                    } 
                });
                return promise;
            }

            ///////////////////////upload接口
            this.uploadImgAndORC=function(formData){
                    var promise=$http({
                    url: uploadRes+'uploadImgAndORC/',
                    method: 'POST',
                    data: formData,
                    headers: {  
                        'Content-Type': undefined  
                    } 
                });
                return promise;
            }
        }]);
    }
])