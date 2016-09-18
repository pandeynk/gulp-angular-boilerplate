var UserAddController=function($rootScope, $scope, UserService, $state){
    $scope.init=function(){
        $scope.user={};
    };

    $scope.cancelAdd=function(){
        $scope.init();
        $state.go('cadiq.users');
    };

    $scope.addUser=function(user){
        UserService.add(user).then(function(response){
            console.log('User Added Successfully!');
            $state.go('cadiq.users');
        }, function(error){
            console.log('Something wrong hapenned!');
        });
    };
};

UserAddController.$inject=['$rootScope', '$scope', 'UserService', '$state'];
module.exports=UserAddController;