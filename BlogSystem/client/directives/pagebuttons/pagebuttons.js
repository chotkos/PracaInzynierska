angular.module('blogSystem').directive('pageButtons', function ($state, $rootScope, $meteor) {
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'client/directives/pagebuttons/pagebuttons.ng.html',
        link: function (scope, element, attr) {

            if ($rootScope.currentUser && $rootScope.currentUser.profile) {
                scope.isAdmin = $rootScope.currentUser.profile.isAdmin;
            }
            scope.dontShow = $state.current.name;

            scope.navigate = function (page) {
                $state.go('page', {
                    pageId: page._id
                });
            };
            scope.navigateEdit = function (page) {
                $state.go('pageedit', {
                    pageId: page._id
                });
            };
            scope.removePage = function (page) {
                scope.pages = $meteor.collection(Pages);
                scope.pages.remove(page);
            };
        }
    };
});
