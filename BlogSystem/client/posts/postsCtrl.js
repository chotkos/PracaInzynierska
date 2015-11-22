angular.module('blogSystem').controller('postsCtrl', ['$scope', '$meteor', '$state', function ($scope, $meteor, $state) {
    $scope.posts = $meteor.collection(Posts);
    $scope.goToPost = function (_id) {
        $state.go('post', {
            postId: _id
        });
    };
  }]);
