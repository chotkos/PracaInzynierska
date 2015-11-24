angular.module('blogSystem').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function ($urlRouterProvider, $stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('posts', {
                url: '/posts',
                templateUrl: 'client/postViews/list/postList.ng.html',
                controller: 'postListCtrl'
            })
            .state('post', {
                url: '/posts/:postId',
                templateUrl: 'client/postViews/view/postView.ng.html',
                controller: 'postViewCtrl'
            })
            .state('postedit', {
                url: '/postedit/:postId',
                templateUrl: 'client/postViews/edit/postEdit.ng.html',
                controller: 'postEditCtrl',
                resolve: {
                    "currentUser": function ($meteor) {
                        return $meteor.requireValidUser(function (user) {
                            return user.username === 'admin';
                            //return user.profile.isAdmin;
                        });
                    }
                }
            })
            .state('postnew', {
                url: '/postnew',
                templateUrl: 'client/postViews/new/postNew.ng.html',
                controller: 'postNewCtrl',
                resolve: {
                    "currentUser": function ($meteor) {
                        return $meteor.requireValidUser(function (user) {
                            return user.username === 'admin';
                            //return user.profile.isAdmin;
                        });
                    }
                }
            })
            .state('admin', {
                url: '/admin',
                templateUrl: 'client/admin/admin.ng.html',
                controller: 'adminCtrl',
                resolve: {
                    "currentUser": function ($meteor) {
                        return $meteor.requireValidUser(function (user) {
                            return user.username === 'admin';
                            //return user.profile.isAdmin;
                        });
                    }
                }
            });

        $urlRouterProvider.otherwise("/posts");
    }]);

angular.module("blogSystem").run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        // We can catch the error thrown when the $requireUser promise is rejected
        // and redirect the user back to the main page
        if (error === 'AUTH_REQUIRED') {
            $state.go('posts');
        }
    });
});
