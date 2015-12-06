angular.module("blogSystem").controller("postViewCtrl", ['$scope', '$stateParams', '$meteor', '$sce', '$timeout', 'postService',
    function ($scope, $stateParams, $meteor, $sce, $timeout, postService) {
        //$scope.postId = $stateParams.postId;

        $scope.posts = postService.postsSubscription; // $meteor.collection(Posts).subscribe("posts");

        $scope.post = postService.getById($stateParams.postId); //$meteor.object(Posts, $stateParams.postId);

        $scope.content = function () {
            return $sce.trustAsHtml($scope.post.content);
        }

    }]);
