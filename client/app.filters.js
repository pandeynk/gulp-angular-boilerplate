var angular = require('angular');

var CityFilter = require('./filters/city.filter');
var CompanyFilter = require('./filters/company.filter');

module.exports = angular.module('cadiq.filters', [])
    .filter('city', CityFilter)
    .filter('cname', CompanyFilter);
