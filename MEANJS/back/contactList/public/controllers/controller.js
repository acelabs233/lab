function AppCtrl($scope, $http){
    console.log("hellow world from controller");

    function refresh(){
        $http.get('/contactlist').success(function(res){
            $scope.contactList = res;
        });
    }
    refresh();

    $scope.addContact = function(){
        $http.post('/contactlist',$scope.contact).success(function(res){
            $scope.contactList = [ ...$scope.contactList, res];
        });
    }

    $scope.remove = function(id){
        console.log('/contactlist/'+id);
        $http.delete('/contactlist/'+id)
        .success(function(res){
            console.log(res);
        });
        refresh();
    }

    $scope.edit = function(id){
        $http.get('/contactlist/'+id)
        .success(function(res){
            $scope.contact = res;
            console.log($scope.contact);
        });
    }

    $scope.update = function(){
        console.log('/contactlist/'+ $scope.contact._id);
        $http.put('/contactlist/'+ $scope.contact._id, $scope.contact);
    }


}