var angular=require('angular');

var InsuranceCompanyAddController=require('./components/insurance/insurance-company-add/insurance-company-add.controller');

module.exports=angular.module('app.controllers', [])
    .controller('InsuranceCompanyAddController', InsuranceCompanyAddController);