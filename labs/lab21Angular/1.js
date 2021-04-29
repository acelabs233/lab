var app = angular.module('myApp', [])
                .controller('myController', function($q, $scope){
                    $scope.msg = "This is the scope msg";

                });

app.directive("infoMsg", function(){
    return {
        templateUrl: "msg.html"
    }
});