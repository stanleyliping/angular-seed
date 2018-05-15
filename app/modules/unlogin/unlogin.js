'use strict';

angular.module('myApp.unlogin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/unlogin', {
        templateUrl: 'app/modules/unlogin/unlogin.html',
        controller: 'unloginCtrl'
    });
}])

.controller('unloginCtrl', ['$scope', '$state', 'wapSettings', '$http', 'apiService', function($scope, $state, wapSettings, $http, apiService) {
    console.log('unloginCtrl');

    function initPageCss() { //初始化页面样式

        var mainHeight = $('#unlogin_main')[0].offsetHeight;
        var mainWidth = $('#unlogin_main')[0].offsetWidth;
        $('#unlogin_main')[0].style.minHeight = mainHeight + "px"; //手机点开输入法时防止页面压缩

        if (mainHeight * 0.3 <= mainWidth * 0.8) {
            $('#logoImg')[0].style.backgroundSize = mainHeight * 0.3 + "px";
        } else {
            $('#logoImg')[0].style.backgroundSize = mainWidth * 0.8 + "px";
        }
        $('.unlogin_input_img')[0].style.backgroundSize = $('.unlogin_input_text').height() * 0.7 + "px"; //输入框图片大小修正
        $('.unlogin_input_img')[1].style.backgroundSize = $('.unlogin_input_text').height() * 0.7 + "px";
        console.log(1);
        $state.go("unlogin");


    }
    window.onresize = function() {
        initPageCss();
    }


    $('#unlogin_content').ready(function() {
        $(".unlogin_botton").click(function() {
            if ($scope.userName && $scope.password) {
                apiService.getUserInfoByName($scope.userName).then(function(result) {
                    console.log(result);
                    if (result && result.data) {
                        var wechatId = result.data.wechatId;
                        // apiService.getQYMemberById(wechatId).then(function(result) {//获取用户企业微信详细信息
                        //     console.log(result);
                        //     if (result && result.data) {
                        //     }
                        // })
                        
                    }

                });
            }
            // apiService.wechatSendMessageTest().then(function(response) {
            //     console.log(response);
            // });
        });
    });
    setTimeout(function() {
        initPageCss();
    }, 100);
}]);