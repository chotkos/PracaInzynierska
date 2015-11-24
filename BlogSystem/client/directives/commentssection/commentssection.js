angular.module('blogSystem').directive('commentsSection', function ($state, $rootScope, $meteor, $stateParams, $log, $timeout) {
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'client/directives/commentssection/commentssection.ng.html',
        link: function (scope, element, attr) {
            scope.commentsSubcription = $meteor.collection(Comments).subscribe("comments");

            scope.comments = $meteor.collection(function () {
                return Comments.find({
                    postId: $stateParams.postId
                });
            });

            $timeout(function () {
                if (scope.$root.currentUser && scope.$root.currentUser.profile) {
                    scope.isAdmin = scope.$root.currentUser.profile.isAdmin;
                }
                scope.isLoggedIn = null != scope.$root.currentUser;
            }, 1000);



            scope.openLogin = function () {
                $('#login-sign-in-link').click()
            };

            scope.removeComment = function (com) {
                scope.comments.remove(com);
            };
            scope.upvote = function (comment) {
                var index = comment.downVoters.indexOf(scope.$root.currentUser._id);
                if (index != -1) {
                    comment.points++;
                    comment.downVoters.splice(index, 1);
                }
                comment.points++;
                comment.upVoters.push(scope.$root.currentUser._id)
            };

            scope.downvote = function (comment) {
                var index = comment.upVoters.indexOf(scope.$root.currentUser._id);
                if (index != -1) {
                    comment.points--;
                    comment.upVoters.splice(index, 1);
                }
                comment.points--;
                comment.downVoters.push(scope.$root.currentUser._id)
            };

            scope.submitComment = function () {
                var model = {
                    content: scope.commentForm.newComment.$modelValue,
                    user: $rootScope.currentUser.emails[0].address,
                    date: new Date(),
                    postId: scope.post._id,
                    points: 0,
                    upVoters: [],
                    downVoters: [],
                }

                scope.commentsSubcription.push(model);

                scope.comments = $meteor.collection(function () {
                    return Comments.find({
                        postId: $stateParams.postId
                    });
                });
            };
        }
    };
});
