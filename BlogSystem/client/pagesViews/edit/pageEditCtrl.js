angular.module('blogSystem').controller('pageEditCtrl', ['$scope', '$meteor', '$state', '$rootScope', '$stateParams', '$timeout', 'pageService',
        function ($scope, $meteor, $state, $rootScope, $stateParams, $timeout, pageService) {

        $('#summernote').summernote();

        $timeout(function () { //tricky part :)
            $scope.page = pageService.getById($stateParams.pageId);
            $(".note-editable").html($scope.page.content);
        });

        $scope.pages = $meteor.collection(Pages).subscribe("pages");

        $scope.submitPage = function () {
            $scope.page.content = $('#summernote').code();
            postService.updatePage($scope.page);
            $state.go('admin');
        };
}]);
