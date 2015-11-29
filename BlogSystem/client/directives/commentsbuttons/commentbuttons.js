angular.module('blogSystem').directive('commentButtons', function ($state, $rootScope, $meteor) {
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'client/directives/commentsbuttons/commentbuttons.ng.html',
        link: function (scope, element, attr) {


            scope.navigate = function (comment) {
                $state.go('post', {
                    postId: comment.postId
                });
            };
            scope.removeComment = function (comment) {
                scope.comments = $meteor.collection(Comments);
                scope.comments.remove(comment);
            };

        }
    };
});
