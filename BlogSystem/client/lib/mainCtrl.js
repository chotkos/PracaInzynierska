angular.module('blogSystem').controller('mainCtrl', ['$scope', '$meteor', '$state', function ($scope, $meteor, $state) {
    $scope.configuration = $meteor.collection(Configurations).subscribe('mainConfiguration');
}]);
