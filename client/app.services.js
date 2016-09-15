var angular=require('angular');

var APIService=require('./services/API.service');
var ContextService=require('./services/context.service');
var InsuranceCompanyService=require('./components/insurance/insurance-company.service');

module.exports=angular.module('app.services', [])
    .factory('API', APIService)
    .factory('ContextService', ContextService)
    .factory('InsuranceCompanyService', InsuranceCompanyService);
