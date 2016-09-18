var angular = require('angular');
var RecursionDirective = require('./directives/recursion/recursion.directive');
var CollectionDirective = require('./directives/menu/collection.directive');
var MemberDirective = require('./directives/menu/member.directive');

module.exports = angular.module('cadiq.directives', [])
    .directive('tree', RecursionDirective)
    .directive('collection', CollectionDirective)
    .directive('member', MemberDirective);
