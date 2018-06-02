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

    $scope.initPageCss = function() { //初始化页面样式

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
    }
    window.onresize = function() {
        $scope.initPageCss();
    }

    $(".unlogin_botton").click(function() {
        if ($scope.userName && $scope.password) {

            apiService.loginRequest($scope.userName,$scope.password).then(function(result){
                if (result && result.data) {
                    switch(result.data){//1--成功，0--系统错误，-1--查无此用户，-2--用户没有分配任何功能权限，-3--密码错误，-4--用户状态为已删除
                        case 0:
                        $.toast("系统错误");
                        break;
                        case -1:
                        $.toast("无此用户");
                        break;
                        case -2:
                        $.toast("没有权限");
                        break;
                        case -3:
                        $.toast("密码错误");
                        break;
                        case -4:
                        $.toast("用户未激活");
                        break;
                        default:
                        $.toast("验证成功");
                        localStorage.setItem('guid',result.data);
                        localStorage.setItem('userName',$scope.userName);
                        $state.go("index");
                    }
                }
            });
        }
    });

}]);