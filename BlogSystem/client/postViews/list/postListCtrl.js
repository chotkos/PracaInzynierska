angular.module('blogSystem').controller('postListCtrl', ['$scope', '$meteor', '$state', function ($scope, $meteor, $state, $postService) {
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
