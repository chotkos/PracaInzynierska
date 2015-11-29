angular.module('blogSystem').controller('postListCtrl', ['$scope', '$meteor', '$state', 'postService', function ($scope, $meteor, $state, postService) {

    $scope.page = 1;
    var sorters = {
        'sort': {
            'date': 1
        },
        'limit': 9,
        'skip': 0,
    };

    var criterias = {};

    $scope.posts = postService.posts(criterias, sorters);

    $scope.goToPost = function (_id) {
        $state.go('post', {
            postId: _id
        });
    };

    $scope.nextPage = function () {
        $scope.page++;
        sorters.skip = 9 * ($scope.page - 1);
        $scope.posts = postService.posts(criterias, sorters);

    };

    $scope.lastPage = function () {
        $scope.page--;
        sorters.skip = 9 * ($scope.page - 1);
        $scope.posts = postService.posts(criterias, sorters);
    };

  }]);
