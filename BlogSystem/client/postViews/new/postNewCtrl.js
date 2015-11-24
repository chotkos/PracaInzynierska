angular.module('blogSystem').controller('postNewCtrl', ['$scope', '$meteor', '$state', '$rootScope',
        function ($scope, $meteor, $state, $rootScope) {

        $scope.post = {};
        $('#summernote').summernote();


        $scope.posts = $meteor.collection(Posts).subscribe("posts");

        $scope.submitPost = function () {
            $scope.post.content = $('#summernote').code();
            $scope.post.author = $rootScope.currentUser.profile.name;
            $scope.post.date = new Date();
            $scope.posts.push($scope.post);
            $state.go('admin');
        };
}]);
