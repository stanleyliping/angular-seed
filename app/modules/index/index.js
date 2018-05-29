'use strict';

angular.module('myApp.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index', {
        templateUrl: 'app/modules/index/index.html',
        controller: 'indexCtrl'
    });
}])

// .controller('indexCtrl', [function() {
//     console.log('indexCtrl');
// }]);


// 'use strict';

// angular.module('myApp.index', ['ngRoute'])
.controller('indexCtrl', ['$scope', '$state',
    function($scope, $state) {
        function setBlockHeight() {
            for (var i = 0; i < $('li').length; i++) {
                var blockWidth = $('li')[i].clientWidth;
                $('li').height(blockWidth / 2);
            }
        }
        setBlockHeight();


        $scope.initial=function(){
            
        }

        $(document).on('click', '.open-about', function() {//底部弹出动画
            $.popup('.popup-about');
        });

        $scope.exit = function() {//点击退出
            $.alert("谢谢使用！");
            localStorage.clear();
            $state.go("unlogin");
        };

        $scope.toExpressAlarm = function() {//点击快递功能模块入口
            $state.go("expressAlarm");
        }
    }
])