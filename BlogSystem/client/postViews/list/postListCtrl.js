angular.module('blogSystem').controller('postListCtrl', ['$scope', '$meteor', '$state', 'postService', function ($scope, $meteor, $state, postService) {

    var sorters = {
        'sort': {
            'date': 1
        }
    };

    var criterias = {};

    $scope.posts = postService.posts(criterias, sorters);

    $scope.goToPost = function (_id) {
        $state.go('post', {
            postId: _id
        });
    };

  }]);
