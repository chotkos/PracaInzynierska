angular.module('blogSystem').directive('commentsSection', function ($state, $rootScope, $meteor) {
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'client/directives/commentssection/commentssection.ng.html',
        link: function (scope, element, attr) {
            scope.commentsSubcription = $meteor.collection(Comments).subscribe("comments");
            scope.comments = $meteor.object(Comments, {
                postId: scope.post._id
            }, true);
            if ($rootScope.currentUser && $rootScope.currentUser.profile) {
                scope.isAdmin = $rootScope.currentUser.profile.isAdmin;
            }
            scope.isLoggedIn = null != $rootScope.currentUser;

            scope.openLogin = function () {
                $('#login-sign-in-link').click()
            };
            scope.submitComment = function () {
                var model = {
                    content: scope.newComment,
                    user: $rootScope.currentUser.emails[0].address,
                    date: new Date(),
                    postId: scope.post._id,
                }

                scope.commentsSubcription.push(model);
                scope.comments = $meteor.object(Comments, {
                    postId: scope.post._id
                }, true);
            };
        }
    };
});
