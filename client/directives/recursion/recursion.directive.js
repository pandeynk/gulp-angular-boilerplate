var RecursionDirective = function(RecursionHelper) {
    return {
        restrict: "E",
        scope: { family: '=' },
        /*template: '<p>{{ family.name }}{{test }}</p>' +
            '<ul>' +
            '<li ng-repeat="child in family.children">' +
            '<tree family="child"></tree>' +
            '</li>' +
            '</ul>',*/
        templateUrl: './templates/recursion/recursion.view.html',
        compile: function(element) {
            return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn) {
                // Define your normal link function here.
                // Alternative: instead of passing a function,
                // you can also pass an object with
                // a 'pre'- and 'post'-link function.

            });
        }
    };
};

module.exports = RecursionDirective;
