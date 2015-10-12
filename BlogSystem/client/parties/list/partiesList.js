angular.module('blogSystem').controller('PartiesListCtrl', ['$scope', '$meteor', function ($scope, $meteor) {
    $scope.parties = $meteor.collection(Parties);

    $scope.remove = function (party) {
        $scope.parties.splice($scope.parties.indexOf(party), 1);
    };
  }]);