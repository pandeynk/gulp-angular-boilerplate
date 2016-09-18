var LoginController=function($scope, $rootScope, $auth, $location, $state){

    $scope.username='';
    $scope.password='';

    $scope.login=function(){
        if($scope.username!=='' && $scope.password!==''){
            $auth.login($scope.username, $scope.password).then(function(){
                $state.go('cadiq.dashboard');
            }, function(){
                console.log('Login Failed');
            });
        }
    };
};

LoginController.$inject=['$scope', '$rootScope', '$auth', '$location', '$state'];
module.exports=LoginController;