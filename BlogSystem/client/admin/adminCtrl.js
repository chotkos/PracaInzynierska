angular.module('blogSystem').controller('adminCtrl', ['$scope', '$meteor', '$state', function ($scope, $meteor, $state) {
    $scope.showPosts = true;
    $scope.posts = $meteor.collection(Posts).subscribe("posts", {
        sort: {
            date: -1
        }
    });
    /*sort({
        date: -1
    });*/

    $scope.navigate = function (postId) {
        $state.go('post', {
            postId: postId
        });
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
