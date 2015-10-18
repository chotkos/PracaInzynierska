angular.module('blogSystem').controller('adminCtrl', ['$scope', '$meteor', function ($scope, $meteor) {
    $scope.showPosts = true;
    $scope.posts = $meteor.collection(Posts);
}]);
