angular.module('blogSystem').directive('userButtons', function ($state, $rootScope, $meteor, userService) {
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'client/directives/userbuttons/userbuttons.ng.html',
        link: function (scope, element, attr) {

            if ($rootScope.currentUser && $rootScope.currentUser.profile) {
                scope.isAdmin = $rootScope.currentUser.profile.isAdmin;
            }

            scope.removeAccount = function (account) {
                userService.usersSubscription.remove(account);
            };

            scope.toggleAdmin = function (account) {
                var x = scope;
                x = $meteor;

                x = userService;
                if (account.profile && account.profile.isAdmin) {
                    account.profile.isAdmin = false;
                } else {
                    account.profile = {
                        isAdmin: true,
                    }
                }
            };
        }
    };
});
