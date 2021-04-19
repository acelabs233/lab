var app = angular.module('myApp', [])
                .controller('myController', function($q, $scope){
                    function add(x,y){
                        var q = $q.defer();

                        setTimeout(function(){
                            var res = x + y;
                            if(res >= 0) 
                                q.resolve(res);
                            else{
                                q.reject("negative value : " + res)
                            }
                        }, 100);
                        return q.promise;
                    }
                    
                    var start = Date.now();

                    add(5, 2)
                    .then(function(res){
                        return add(res, 3);
                    }).then(function(res){
                        return add(res,-20);
                    })
                    .then(function(res){
                        $scope.result = res;
                    }).catch(function(e){
                        $scope.result = e;
                    }).finally(function(){
                        $scope.time = Date.now() - start;
                    });

                
                });