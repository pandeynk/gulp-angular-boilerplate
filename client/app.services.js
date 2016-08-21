var angular=require('angular');

var InsuranceCompanyService=require('./components/insurance/insurance-company.service');

module.exports=angular.module('app.services', [])
    .factory('InsuranceCompanyService', InsuranceCompanyService);
