'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'app/view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

// .controller('View1Ctrl', [function() {
//     console.log('view1Ctrl');
// }]);


// 'use strict';

// angular.module('myApp.view1', ['ngRoute'])
    .controller('View1Ctrl', ['$scope','$state',
        function($scope,$state) {
        	// $state.go("home");
        	console.log('view1Ctrl');
        }
    ])