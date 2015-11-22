angular.module('blogSystem').controller('postsCtrl', ['$scope', '$meteor', '$state', function ($scope, $meteor, $state) {
    $scope.posts = $meteor.collection(Posts).subscribe("posts", {
        sort: {
            date: -1
        }
    });

    $scope.goToPost = function (_id) {
        $state.go('post', {
            postId: _id
        });
    };

  }]);
