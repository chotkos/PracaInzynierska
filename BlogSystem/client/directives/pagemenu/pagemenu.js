angular.module('blogSystem').directive('pageMenu', function ($state, $rootScope, pageService) {
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'client/directives/pagemenu/pagemenu.ng.html',
        link: function (scope, element, attr) {

            if ($rootScope.currentUser && $rootScope.currentUser.profile) {
                scope.isAdmin = $rootScope.currentUser.profile.isAdmin;
            }
            scope.navigate = function (page) {
                $state.go('page', {
                    pageId: page._id
                });
            };
            scope.navigatenew = function () {
                $state.go('pagenew', {
                    pageId: page._id
                });
            };
        }
    };
});
