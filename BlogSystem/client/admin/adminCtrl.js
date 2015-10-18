angular.module('blogSystem').controller('adminCtrl', ['$scope', '$meteor', function ($scope, $meteor) {
    $scope.showPosts = true;
    $scope.posts = $meteor.collection(Posts).sort({
        date: -1
    });

    $scope.navigate = function (postId) {
        //todo: use the $routeProvider
    };
    $scope.navigateEdit = function (postId) {
        //todo: use the $routeProvider
    };
    $scope.removePost = function (index) {

        $meteor.collection(Posts).remove($scope.posts[index]);
        $scope.posts = $meteor.collection(Posts).sort({
            date: -1
        });
    };
}]);
