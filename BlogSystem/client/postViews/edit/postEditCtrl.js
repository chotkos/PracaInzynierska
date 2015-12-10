angular.module('blogSystem').controller('postEditCtrl', ['$scope', '$meteor', '$state', '$rootScope', '$stateParams', '$timeout', 'postService',
        function ($scope, $meteor, $state, $rootScope, $stateParams, $timeout, postService) {

        $('#summernote').summernote();

        $timeout(function () { //tricky part :)
            $scope.post = postService.getById($stateParams.postId);

            $scope.tags = $scope.post.tags.toString().split(',').join(' ');

            //$scope.post = $meteor.object(Posts, $stateParams.postId);
            $(".note-editable").html($scope.post.content);
        });

        $scope.posts = $meteor.collection(Posts).subscribe("posts");

        $scope.submitPost = function () {

            $scope.post.tags = $scope.tags.toUpperCase().split(' ').concat($scope.post.title.toUpperCase().split(' '));

            $scope.post.content = $('#summernote').code();
            postService.updatePost($scope.post);
            $state.go('admin');
        };
}]);
