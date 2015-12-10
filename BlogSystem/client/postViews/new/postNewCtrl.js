angular.module('blogSystem').controller('postNewCtrl', ['$scope', '$meteor', '$state', '$rootScope',
        function ($scope, $meteor, $state, $rootScope) {


        Array.prototype.getUnique = function () {
            var u = {},
                a = [];
            for (var i = 0, l = this.length; i < l; ++i) {
                if (u.hasOwnProperty(this[i])) {
                    continue;
                }
                a.push(this[i]);
                u[this[i]] = 1;
            }
            return a;
        }

        $scope.post = {};
        $('#summernote').summernote();


        $scope.posts = $meteor.collection(Posts).subscribe("posts");

        $scope.submitPost = function () {

            $scope.post.tags = $scope.tags.toUpperCase().split(' ').concat($scope.post.title.toUpperCase().split(' ')).getUnique();

            $scope.post.content = $('#summernote').code();
            $scope.post.author = $rootScope.currentUser.profile.name;
            $scope.post.date = new Date();
            $scope.posts.push($scope.post);
            $state.go('admin');
        };
}]);
