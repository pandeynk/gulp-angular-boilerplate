var InsuranceCompanyAddController=function($scope, InsuranceCompanyService){

    $scope.insurances={};

    $scope.insurances.insurance={};

    $scope.init=function(){
        $scope.insurances.list=InsuranceCompanyService.getList();
        console.log($scope.insurances.list);
    };

    $scope.insurances.add=function(isValid){
        $scope.submitted = true;
        if(isValid){
            var temp={};
            temp=angular.copy($scope.insurances.insurance);
            InsuranceCompanyService.add(temp);
            $scope.init();
        }else{
            console.log("nahi chalunga");
        }
    };

    $scope.insurances.edit=function(company, index){
        InsuranceCompanyService.update(company, index);
    };
};

InsuranceCompanyAddController.$inject=['$scope', 'InsuranceCompanyService'];

module.exports=InsuranceCompanyAddController;