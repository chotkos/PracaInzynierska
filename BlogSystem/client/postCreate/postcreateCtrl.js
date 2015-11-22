angular.module('blogSystem').controller('postcreateCtrl', ['$scope', '$meteor', '$state', function ($scope, $meteor, $state) {
    $scope.post = {};
    $('#summernote').summernote();
    //rozwiązanie     $('#summernote').code();
}]);
