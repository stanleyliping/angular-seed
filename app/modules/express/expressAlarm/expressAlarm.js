'use strict';

angular.module('myApp.expressAlarm', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/expressAlarm', {
            templateUrl: 'app/modules/express/expressAlarm/expressAlarm.html',
            controller: 'expressAlarmCtrl'
        });
    }])
    .controller('expressAlarmCtrl', ['$scope', '$state', '$http', 'apiService',
        function($scope, $state, $http, apiService) {
            $scope.img="";
            $scope.allUserInfo = [];
            $scope.expressInfo = {
                "RowId": "",
                "ExpressId": "",
                "Company": "",
                "PhoneNum": "",
                "Address": "",
                "Status": 1,
                "ImgPath": "",
                "ExpressCode":""
            }
            $scope.initData = function() { //初始化
                apiService.getAllUserInfo().then(function(result) {
                    if (result && result.data) {
                        console.log(result.data);
                        $scope.allUserInfo = result.data;
                        $scope.user = $scope.allUserInfo[0].Name;
                    }
                })
            }

            function getUserByUserName(userName) {//通过用户名查找该用户信息
                var result = {};
                if ($scope.allUserInfo.length > 0) {
                    for (var i = 0; i < $scope.allUserInfo.length; i++) {
                        if ($scope.allUserInfo[i].Name == userName) {
                            result = $scope.allUserInfo[i];
                        }
                    }
                }
                return result;
            }
            $("#imgInput").change(function(){//上传的截图变更时
                var imgData = new FormData($("#uploadForm")[0]);
                $.showPreloader('识别中');
                apiService.uploadImgAndORC(imgData).then(function(result){
                    $.hidePreloader();
                    if(result&&result.data&&result.data.words_result){
                        var stringInImg=result.data.words_result;
                        console.log(stringInImg);
                        for(var i=0;i<stringInImg.length;i++){
                            if(stringInImg[i].words.indexOf("取件码:") != -1){
                                $scope.expressInfo.ExpressCode=stringInImg[i].words.split(':')[1];
                            }
                            if(stringInImg[i].words.indexOf("取件地址:") != -1){
                                $scope.expressInfo.Address=stringInImg[i].words.split(':')[1];
                                $scope.expressInfo.Address+=stringInImg[i+1].words
                            }
                            if(stringInImg[i].words.indexOf("快递公司:") != -1){
                                $scope.expressInfo.Company=stringInImg[i].words.split(':')[1];
                            }
                            if(stringInImg[i].words.indexOf("快递员手机:") != -1){
                                $scope.expressInfo.PhoneNum=stringInImg[i].words.split(':')[1];
                            }
                            if(stringInImg[i].words.indexOf("运单号码:") != -1){
                                $scope.expressInfo.ExpressId=stringInImg[i].words.split(':')[1];
                            }
                        }
                    }
                })
            })


            $(document).on('click', '.open-about', function() {
                $.popup('.popup-about');
            });

            $scope.submitForm = function() {
                var formData = new FormData($("#uploadForm")[0]);

                var sendExpressInfo = {
                    "receiverEmailList": [],//发送提醒收件人
                    "expressInfo": $scope.expressInfo
                }
                var receiverEmail = getUserByUserName($scope.user).Email;

                sendExpressInfo.receiverEmailList.push(receiverEmail);
                sendExpressInfo = JSON.stringify(sendExpressInfo);

                formData.append("sendExpressInfo", sendExpressInfo);//formData.append

                apiService.insertExpressInfoWithImg(formData).then(function(result) {
                    console.log(result);
                })
            }
            $scope.back = function() {
                $state.go("index");
            };
        }
    ])