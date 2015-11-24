angular.module('blogSystem').controller('posteditCtrl', ['$scope', '$meteor', '$state', '$rootScope', '$stateParams', '$timeout',
        function ($scope, $meteor, $state, $rootScope, $stateParams, $timeout) {

        $('#summernote').summernote();

        $timeout(function () { //tricky part :)
            $scope.post = $meteor.object(Posts, $stateParams.postId);
            $(".note-editable").html($scope.post.content);
        });

        $scope.posts = $meteor.collection(Posts).subscribe("posts");

        $scope.submitPost = function () {
            $scope.post.content = $('#summernote').code();
            //$scope.post.author = $rootScope.currentUser.profile.name;
            //$scope.post.date = new Date();
            $scope.post.save();
            $scope.posts.save();
            $state.go('admin');
        };
}]);
