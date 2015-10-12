angular.module("blogSystem").controller("PartyDetailsCtrl", ['$scope', '$stateParams',
    function ($scope, $stateParams) {
        $scope.partyId = $stateParams.partyId;

    }]);