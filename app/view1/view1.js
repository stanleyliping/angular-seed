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
.controller('View1Ctrl', ['$scope', '$state',
    function($scope, $state) {
        // $state.go("home");
        // console.log('view1Ctrl');
        // setTimeout(function() {
        //     console.log('hello world');
        //     setBlockHeight();
        // }, 0);

        function setBlockHeight() {
            for (var i = 0; i < $('li').length; i++) {
                var blockWidth = $('li')[i].clientWidth;
                $('li').height(blockWidth / 2);
            }
            // for(var i=0;i<$('.index_block').length;i++){
            //  console.log(i);
            //  var blockWidth=$('.index_block')[i].clientWidth;
            //  $('.index_block')[i].style.height=blockWidth;
            // }
        }
        setBlockHeight();

    }
])