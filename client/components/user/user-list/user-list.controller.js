var UserListController=function($scope, $rootScope, UserService){

    $scope.init=function(){
        $scope.users=[];

        UserService.list().then(function(users){
            $scope.users=users;
        }, function(error){
            console.log('Couldnt fetch users data');
        });
    };
};

UserListController.$inject=['$scope', '$rootScope', 'UserService'];
module.exports=UserListController;