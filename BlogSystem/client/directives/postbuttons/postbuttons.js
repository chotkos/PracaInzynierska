angular.module('blogSystem').directive('postButtons', function ($state, $rootScope, $meteor) {
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'client/directives/postbuttons/postbuttons.ng.html',
        link: function (scope, element, attr) {

            if ($rootScope.currentUser && $rootScope.currentUser.profile) {
                scope.isAdmin = $rootScope.currentUser.profile.isAdmin;
            }
            scope.dontShow = $state.current.name;

            scope.navigate = function (post) {
                $state.go('post', {
                    postId: post._id
                });
            };
            scope.navigateEdit = function (post) {
                $state.go('postedit', {
                    postId: post._id
                });
            };
            scope.removePost = function (post) {
                scope.posts = $meteor.collection(Posts);
                scope.posts.remove(post);
            };
        }
    };
});
