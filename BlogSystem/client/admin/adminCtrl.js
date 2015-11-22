angular.module('blogSystem').controller('adminCtrl', ['$scope', '$meteor', '$state', function ($scope, $meteor, $state) {
    $scope.showPosts = true;
    $scope.posts = $meteor.collection(Posts).subscribe("posts", {
        sort: {
            date: -1
        }
    });

    $scope.navigate = function (post) {
        $state.go('post', {
            postId: post._id
        });
    };
    $scope.navigateEdit = function (post) {
        //todo: use the $routeProvider
    };
    $scope.removePost = function (index) {

        $meteor.collection(Posts).remove($scope.posts[index]);
        $scope.posts = $meteor.collection(Posts).sort({
            date: -1
        });
    };
}]);
