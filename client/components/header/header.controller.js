var HeaderController=function($rootScope, $scope){
    console.log($rootScope.user.firstName);

    $scope.init=function(){
        console.log('Hello World');
        console.log($rootScope.user);
    }
};

HeaderController.$inject=['$rootScope', '$scope'];
module.exports=HeaderController;