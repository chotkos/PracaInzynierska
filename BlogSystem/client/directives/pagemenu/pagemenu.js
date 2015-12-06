angular.module('blogSystem').directive('pageMenu', function ($state, $rootScope, pageService) {
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'client/directives/pagemenu/pagemenu.ng.html',
        link: function (scope, element, attr) {

            if ($rootScope.currentUser && $rootScope.currentUser.profile) {
                scope.isAdmin = $rootScope.currentUser.profile.isAdmin;
            }

            var criterias = {};
            var sortersPages = {
                'sort': {
                    'date': -1
                }
            };
            scope.pages = pageService.pages(criterias, sortersPages);

            scope.navigatenew = function () {
                $state.go('pagenew', {
                    pageId: page._id
                });
            };
        }
    };
});
