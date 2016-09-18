var angular=require('angular');

var APIService=require('./services/API.service');
var AuthenticationService=require('./services/auth.service');
var ContextService=require('./services/context.service');
var InsuranceCompanyService=require('./components/insurance/insurance-company.service');

module.exports=angular.module('cadiq.services', [])
    .factory('API', APIService)
    .factory('$auth', AuthenticationService)
    .factory('ContextService', ContextService)
    .factory('InsuranceCompanyService', InsuranceCompanyService);
