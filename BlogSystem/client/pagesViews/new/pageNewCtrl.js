angular.module('blogSystem').controller('pageNewCtrl', ['$scope', '$meteor', '$state', '$rootScope', 'pageService',
        function ($scope, $meteor, $state, $rootScope, pageService) {

        $scope.post = {};
        $('#summernote').summernote();


        $scope.pages = pageService.pagesSubscription; // $meteor.collection(Posts).subscribe("posts");

        $scope.submitPage = function () {
            $scope.page.content = $('#summernote').code();
            $scope.page.author = $rootScope.currentUser.profile.name;
            $scope.page.date = new Date();
            $scope.pages.push($scope.page);
            $state.go('admin');
        };
}]);
