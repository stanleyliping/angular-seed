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

        $scope.exit = function() {
            $.alert("谢谢使用！");
            localStorage.clear();
            $state.go("unlogin");
        };

        $scope.toExpressAlarm=function(){
            $state.go("expressAlarm");
        }
    }
])