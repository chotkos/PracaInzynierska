angular.module('blogSystem').controller('postsCtrl', ['$scope', '$meteor', function ($scope, $meteor) {
    $scope.posts = $meteor.collection(Posts);

  }]);
