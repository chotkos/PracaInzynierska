angular.module('blogSystem').controller('adminCtrl', ['$scope', '$meteor', '$state', 'postService', 'commentService', '$timeout',
function ($scope, $meteor, $state, postService, commentService, $timeout) {
        $scope.showPosts = true;
        $scope.pagesize = 6;
        $scope.postLength = 1;
        $scope.commentsLength = 1;
        var criterias = {};
        //fulllengths
        $timeout(function () {
            $scope.postLength = postService.postsSubscription.length;
            $scope.commentsLength = commentService.commentsSubscription.length;
        }, 500);
        //pagenums
        $scope.postPage = 1;
        $scope.commentsPage = 1;
        //sorters
        var sortersPosts = {
            'sort': {
                'date': -1
            },
            'limit': $scope.pagesize,
            'skip': 0,
        };
        var sortersComments = sortersPosts;
        //functions
        $scope.nextPagePosts = function () {
            $scope.postPage++;
            sortersPosts.skip = 9 * ($scope.postPage - 1);
            $scope.posts = postService.posts(criterias, sortersPosts);
            $scope.postLength = postService.postsSubscription.length;

        };
        $scope.lastPagePosts = function () {
            $scope.postPage--;
            sortersPosts.skip = 9 * ($scope.postPage - 1);
            $scope.posts = postService.posts(criterias, sortersPosts);
            $scope.postLength = postService.postsSubscription.length;

        };
        $scope.nextPageComments = function () {
            $scope.commentsPage++;
            sortersComments.skip = 9 * ($scope.commentsPage - 1);
            $scope.comments = commentService.comments(criterias, sortersComments);
            $scope.commentsLength = commentService.commentsSubscription.length;

        };
        $scope.lastPageComments = function () {
            $scope.commentsPage--;
            sortersComments.skip = 9 * ($scope.commentsPage - 1);
            $scope.comments = commentService.comments(criterias, sortersComments);
            $scope.commentsLength = commentService.commentsSubscription.length;

        };


        $scope.posts = postService.posts({}, sortersPosts);
        $scope.comments = commentService.comments({}, sortersComments);

        $scope.create = function () {
            $state.go('postnew');
        }

}]);
