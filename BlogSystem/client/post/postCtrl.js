angular.module("blogSystem").controller("postCtrl", ['$scope', '$stateParams', '$meteor',

    function ($scope, $stateParams, $meteor) {
        //$scope.postId = $stateParams.postId;

        $scope.post = $meteor.object(Posts, $stateParams.postId);
    }]);
