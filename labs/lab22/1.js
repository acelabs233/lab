var app = angular.module('app',[]).controller('emp',function($scope){
    $scope.a = 1;
    $scope.b = 2;
    $scope.c = 3;
    $scope.d = 4;

    $scope.o = {
        a:1,
        b:2,
        c:3
    };

    $scope.emps = [
        {empno:"1001", ename:"John"},
        {empno:"1002", ename:"Jo"},
        {empno:"1003", ename:"JoJo"},
        {empno:"1004", ename:"JoH"},
        {empno:"1005", ename:"Jim"}
    ];

    $scope.addEmp = function(){
        var newEmp = 100 + $scope.emps.length + 1;
        var newName = "ename" + newEmp;
        $scope.emps.push({empno:newEmp, ename:newName});
    }

    $scope.modify3rdEmp = function(){
        $scope.emps[2].ename = "test";
    }


    $scope.$watch('emps', function(newval,oldval){
        console.log("No. of employees:" + $scope.emps.length);
    }, true);


    // $scope.$watch("o", function(newVal, oldVal){
    //     if(newVal != oldVal){
    //         $scope.o.c = $scope.o.a * $scope.o.b;
    //     }
    // }, true);



    // $scope.$watchGroup(['o.a','o.b'], function(newVal, oldVal){
    //     if(newVal != oldVal){
    //          console.log("updata c to " + newVal);
    //          $scope.o.c = $scope.o.a * $scope.o.b;
    //      }
    // });

    // $scope.updateC = function(){
    //     $scope.c = $scope.a * 4;
    // };

    // $scope.$watch("c", function(newVal, oldVal){
    //     if(newVal != oldVal){
    //         console.log("updata c to " + newVal);
    //     }
    // });
    // $scope.$watch("a", function(newVal, oldVal){
    //     if(newVal != oldVal){
    //         $scope.c = $scope.b * 2;
    //     }
    // });
    // $scope.$watch("b", function(newVal, oldVal){
    //     if(newVal != oldVal){
    //         $scope.b = $scope.a * 2;
    //     }
    // });
})