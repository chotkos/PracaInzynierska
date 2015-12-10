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

            scope.showSearchBarOrNavigate = function () {
                if ($state.current.name != 'posts') {
                    $rootScope.showSearch = true;
                    $state.go('posts'); //maybe some magic with router?
                } else {
                    $rootScope.showSearch = !$rootScope.showSearch;
                }
            }
        }
    };
});
