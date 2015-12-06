angular.module('blogSystem').controller('adminCtrl', ['$scope', '$meteor', '$state', 'postService', 'commentService', '$timeout', 'pageService',
function ($scope, $meteor, $state, postService, commentService, $timeout, pageService) {
        $scope.showPosts = true;
        $scope.pagesize = 6;
        $scope.postLength = 1;
        $scope.commentsLength = 1;
        $scope.pageLength = 1;

        var criterias = {};
        //fulllengths
        $timeout(function () {
            $scope.postLength = postService.postsSubscription.length;
            $scope.commentsLength = commentService.commentsSubscription.length;
            $scope.pagesLength = pageService.pagesSubscription.length;
        }, 500);
        //pagenums
        $scope.postPage = 1;
        $scope.commentsPage = 1;
        $scope.pagesPage = 1;
        //sorters
        var sortersPosts = {
            'sort': {
                'date': -1
            },
            'limit': $scope.pagesize,
            'skip': 0,
        };
        var sortersComments = sortersPosts;
        var sortersPages = sortersComments;
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
        $scope.nextPagePages = function () {
            $scope.pagesPage++;
            sortersPages.skip = 9 * ($scope.pagesPage - 1);
            $scope.pages = pageService.pages(criterias, sortersPages);
            $scope.pagesLength = pageService.pagesSubscription.length;

        };
        $scope.lastPagePages = function () {
            $scope.pagesPage--;
            sortersPages.skip = 9 * ($scope.pagesPage - 1);
            $scope.pages = pageService.pages(criterias, sortersPages);
            $scope.pagesLength = pageService.pagesSubscription.length;

        };


        $scope.posts = postService.posts({}, sortersPosts);
        $scope.comments = commentService.comments({}, sortersComments);
        $scope.pages = pageService.pages({}, sortersPages);


        $scope.create = function () {
            $state.go('postnew');
        };
        $scope.createPage = function () {
            $state.go('pagenew');
        };


}]);
