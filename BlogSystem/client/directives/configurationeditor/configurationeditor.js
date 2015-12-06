angular.module('blogSystem').directive('configurationEditor', function ($state, $rootScope, configurationService) {
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'client/directives/configurationeditor/configurationeditor.ng.html',
        link: function (scope, element, attr) {
            var criterias = {};
            var sorter = {};
            scope.configuration = configurationService.configurations(criterias, sorter)[0];
        }
    };
});
