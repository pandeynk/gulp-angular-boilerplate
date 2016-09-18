var UserEditController=function($rootScope, $scope, UserService, $state, $stateParams){
    $scope.init=function(){
        $scope.user={};

        UserService.one($stateParams.userId).then(function(user){
            $scope.user=user;
        }, function(error){
            console.log('Something wrong hapenned!');
        });
    };

    $scope.cancelEdit=function(){
        $state.go('cadiq.users');
    };

    $scope.editUser=function(user){
        UserService.update(user).then(function(response){
            console.log('User Updated Successfully!');
            $state.go('cadiq.users');
        }, function(error){
            console.log('Something wrong hapenned!');
        });
    };
};

UserEditController.$inject=['$rootScope', '$scope', 'UserService', '$state', '$stateParams'];
module.exports=UserEditController;