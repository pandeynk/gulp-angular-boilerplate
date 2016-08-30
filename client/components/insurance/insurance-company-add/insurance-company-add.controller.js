var InsuranceCompanyAddController = function($scope, InsuranceCompanyService) {

    $scope.insurances = {};

    $scope.insurances.insurance = {};

    $scope.treeFamily = {
        name: "Parent",
        children: [{
            name: "Child1",
            children: [{
                name: "Grandchild1",
                children: [{
                    name: "Grand2Child",
                    children: []
                }]
            }, {
                name: "Grandchild2",
                children: []
            }, {
                name: "Grandchild3",
                children: []
            }]
        }, {
            name: "Child2",
            children: []
        }]
    };

    $scope.tasks = [{
        name: 'Europe',
        children: [{
            name: 'Italy',
            children: [{
                name: 'Rome'
            }, {
                name: 'Milan'
            }]
        }, {
            name: 'Spain'
        }]
    }, {
        name: 'South America',
        children: [{
            name: 'Brasil'
        }, {
            name: 'Peru'
        }]
    }];

    $scope.init = function() {
        $scope.insurances.list = InsuranceCompanyService.getList();
        console.log($scope.insurances.list);
    };

    $scope.insurances.add = function(isValid) {
        $scope.submitted = true;
        if (isValid) {
            var temp = {};
            temp = angular.copy($scope.insurances.insurance);
            InsuranceCompanyService.add(temp);
            $scope.init();
        } else {
            console.log("nahi chalunga");
        }
    };

    $scope.insurances.edit = function(company, index) {
        InsuranceCompanyService.update(company, index);
    };
};

InsuranceCompanyAddController.$inject = ['$scope', 'InsuranceCompanyService'];

module.exports = InsuranceCompanyAddController;
