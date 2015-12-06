angular.module("blogSystem").controller("pageViewCtrl", ['$scope', '$stateParams', '$meteor', '$sce', '$timeout', 'pageService',

    function ($scope, $stateParams, $meteor, $sce, $timeout, pageService) {

        $scope.pages = pageService.pagesSubscription; //$meteor.collection(Pages).subscribe("pages");

        $scope.page = pageService.getById($stateParams.pageId);

        $scope.content = function () {
            return $sce.trustAsHtml($scope.page.content);
        }
    }]);
