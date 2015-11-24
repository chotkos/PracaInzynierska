angular.module('blogSystem').controller('adminCtrl', ['$scope', '$meteor', '$state', function ($scope, $meteor, $state) {
    $scope.showPosts = true;
    $scope.posts = $meteor.collection(Posts).subscribe("posts", {
        sort: {
            date: -1
        }
    });

    $scope.create = function () {
        $state.go('postnew');
    }

}]);
