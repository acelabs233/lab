var app = angular.module('app',['ngRoute']);
 

 app.config( function($routeProvider){
     $routeProvider
        .when('/sumurl/:a/:b',{
            templateUrl: 'sumurl.html',
            controller: 'sumurl'
        })
        .when('/suminput',{
            templateUrl: 'suminput.html',
            controller: 'suminput'
        })
        .when('/calc/:option/:a?/:b?',{
            redirectTo:function(params, path, search){
                if(params.option == "sum"){
                    return '/sumurl/' + params.a +'/'+ params.b;
                }
                else if(params.option == "input"){
                    return '/suminput';
                }
                else{
                    return '/';
                }
            }
        })
        .when('/sumfour/:a/:b/:c?/:d?',{
            templateUrl: 'sumfour.html',
            controller: 'sumfour'
        })
        .when('/',{
            template:'<b>welcome to the site</b>'
        })
        .otherwise({
            template:'<b>404.....click link on the left</b>'
        });
 });


 app.controller('sumurl', ['$scope', '$routeParams',function($scope, $routeParams){
    var a = $routeParams.a;
    var b = $routeParams.b;
    $scope.a = a;
    $scope.b = b;
    $scope.total = Number(a) + Number(b);
 }]);

 app.controller('suminput', ['$scope','$location','$interpolate',function($scope, $location, $interpolate){
     $scope.a = 0;
     $scope.b = 0;

     $scope.doSum = () => {
        var url = $interpolate('/sumurl/{{a}}/{{b}}')($scope);
        $location.path(url);
     };


 }]);

 app.controller('sumfour', ['$scope', '$routeParams',function($scope, $routeParams){
    var a = $routeParams.a;
    var b = $routeParams.b;
    var c = $routeParams.c;
    var d = $routeParams.d;
    $scope.a = a;
    $scope.b = b;
    $scope.c = c;
    $scope.d = d;

}]);