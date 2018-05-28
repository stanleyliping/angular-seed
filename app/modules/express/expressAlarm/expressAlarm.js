'use strict';

angular.module('myApp.expressAlarm', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/expressAlarm', {
            templateUrl: 'app/modules/express/expressAlarm/expressAlarm.html',
            controller: 'expressAlarmCtrl'
        });
    }])
    .controller('expressAlarmCtrl', ['$scope', '$state','$http',
        function($scope, $state,$http) {
            $scope.back = function() {
                $state.go("index");
            };

            $scope.initData = function() {

            }

            $(document).on('click', '.open-about', function() {
                $.popup('.popup-about');
            });


            /*Ajax上传至后台并返回图片的url*/



            $("#avatarSlect").change(function() {
                var image = '';
                selectImage(this);
                
                function selectImage(file) {
                    if (!file.files || !file.files[0]) {
                        return;
                    }
                    var reader = new FileReader();
                    reader.onload = function(evt) {
                        image = evt.target.result;
                        uploadImage();
                    }
                    reader.readAsDataURL(file.files[0]);
                }

                function uploadImage() {

                    $http({

                        type: 'POST',

                        url: 'app/1.png',

                        data: {
                            image: image
                        },

                        async: false,

                        dataType: 'json',

                        success: function(data) {

                            if (data.success) {

                                alert('上传成功');

                            } else {

                                alert('上传失败');

                            }

                        },

                        error: function(err) {

                            alert('网络故障');

                        }

                    });

                }
            })
        }
    ])