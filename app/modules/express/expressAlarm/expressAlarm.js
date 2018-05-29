'use strict';

angular.module('myApp.expressAlarm', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/expressAlarm', {
            templateUrl: 'app/modules/express/expressAlarm/expressAlarm.html',
            controller: 'expressAlarmCtrl'
        });
    }])
    .controller('expressAlarmCtrl', ['$scope', '$state', '$http', '$httpParamSerializerJQLike',
        function($scope, $state, $http, $httpParamSerializerJQLike) {
            $scope.back = function() {
                $state.go("index");
            };

            $scope.initData = function() {

            }

            $(document).on('click', '.open-about', function() {
                $.popup('.popup-about');
            });

            $scope.doUpload = function() {
                var formData = new FormData($("#uploadForm")[0]);
                var expressInfo = {
                        "RowId": "string",
                        "ExpressId": "string",
                        "Company": "string",
                        "PhoneNum": "string",
                        "Address": "string",
                        "Status": "string",
                        "ImgPath": "string"
                    }
                    expressInfo=JSON.stringify(expressInfo);
                formData.append("expressInfo",expressInfo);
                
                // $http.post('/homeApi/expressInfo/insertExpressInfo/',formData);
                $.ajax({
                    url: 'http://localhost:38494/homeApi/expressInfo/insertExpressInfoWithImg' ,  
                    type: 'POST',
                    data: formData,
                    async: false,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function(returndata) {
                        console.log(returndata);
                    },
                    error: function(returndata) {
                        console.log(returndata);
                    }
                });
            }

        }
    ])