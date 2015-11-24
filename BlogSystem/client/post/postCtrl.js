angular.module("blogSystem").controller("postCtrl", ['$scope', '$stateParams', '$meteor', '$sce', '$timeout',
    function ($scope, $stateParams, $meteor, $sce, $timeout) {
        //$scope.postId = $stateParams.postId;

        $scope.posts = $meteor.collection(Posts).subscribe("posts");

        $scope.post = $meteor.object(Posts, $stateParams.postId);

        $scope.content = function () {
            return $sce.trustAsHtml($scope.post.content);
        }

    }]);
