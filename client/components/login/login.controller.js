var LoginController=function($scope, $rootScope, $auth, $location, $state){

    $scope.login=function(){
        $auth.login();
        $state.go('cadiq.dashboard');
    };
};

LoginController.$inject=['$scope', '$rootScope', '$auth', '$location', '$state'];
module.exports=LoginController;