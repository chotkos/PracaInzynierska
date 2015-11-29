angular.module('blogSystem').controller('adminCtrl', ['$scope', '$meteor', '$state', 'postService', 'commentService',
                                             function ($scope, $meteor, $state, postService, commentService) {
        $scope.showPosts = true;
        var sorters = {
            'sort': {
                'date': -1
            }
        };
        $scope.posts = postService.posts({}, sorters);
        $scope.comments = commentService.comments({}, sorters);

        $scope.create = function () {
            $state.go('postnew');
        }

}]);
