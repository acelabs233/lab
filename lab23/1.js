var app = angular.module('app',[]).controller('emp',function($scope, $rootScope){
 $scope.a = 1;
 $scope.b = 2;
 $scope.c = 3;
 $scope.s = 0;

 $scope.calcSum = function(){
     $scope.s = Number($scope.a) + Number($scope.b);
 }

//  $scope.$watch('a', function(newv, oldv){
//     if(newv != oldv){
//         console.log("a is " + newv);
//     }
//  });

//  $scope.$watch('b', function(newv, oldv){
//     if(newv != oldv){
//         console.log("b is " + newv);
//     }
//  });

});

var btnClick = () => {
    var $scope = angular.element($('#div1')).scope();
    $scope.s = Number($scope.a) + Number($scope.b);
    $scope.$apply();
}