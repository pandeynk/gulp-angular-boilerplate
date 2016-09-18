var angular=require('angular');

var InsuranceCompanyAddController=require('./components/insurance/insurance-company-add/insurance-company-add.controller');
var LoginController=require('./components/login/login.controller');

module.exports=angular.module('cadiq.controllers', [])
    .controller('LoginController', LoginController)
    .controller('InsuranceCompanyAddController', InsuranceCompanyAddController);