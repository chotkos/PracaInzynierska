angular.module('blogSystem').controller('postListCtrl', ['$scope', '$meteor', '$state', 'postService', '$timeout', function ($scope, $meteor, $state, postService, $timeout) {

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
    $scope.postLength = 1;
    $timeout(function () {
        $scope.postLength = postService.postsSubscription.length;
    }, 500);

    $scope.nextPage = function () {
        $scope.page++;
        sorters.skip = 9 * ($scope.page - 1);
        $scope.posts = postService.posts(criterias, sorters);
        $scope.postLength = postService.postsSubscription.length;

    };

    $scope.lastPage = function () {
        $scope.page--;
        sorters.skip = 9 * ($scope.page - 1);
        $scope.posts = postService.posts(criterias, sorters);
        $scope.postLength = postService.postsSubscription.length;

    };

  }]);
