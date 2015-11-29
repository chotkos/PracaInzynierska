angular.module('blogSystem').controller('adminCtrl', ['$scope', '$meteor', '$state', 'postService', 'commentService',
                                             function ($scope, $meteor, $state, postService, commentService) {
        $scope.showPosts = true;
        $scope.posts = postService.posts({
            sort: {
                date: -1
            }
        });

        $scope.comments = commentService.comments({}, {
            sort: {
                date: -1
            }
        });

        $scope.create = function () {
            $state.go('postnew');
        }

}]);
