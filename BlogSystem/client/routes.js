angular.module('blogSystem').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function ($urlRouterProvider, $stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('parties', {
                url: '/parties',
                templateUrl: 'client/parties/list/parties-list.ng.html',
                controller: 'PartiesListCtrl'
            })
            .state('partyDetails', {
                url: '/parties/:partyId',
                templateUrl: 'client/parties/details/party-details.ng.html',
                controller: 'PartyDetailsCtrl'
            })
            .state('posts', {
                url: '/posts',
                templateUrl: 'client/posts/list.ng.html',
                controller: 'postsCtrl'
            })
            .state('post', {
                url: '/posts/:postId',
                templateUrl: 'client/post/post.ng.html',
                controller: 'postCtrl'
            })
            .state('postedit', {
                url: '/postedit/:postId',
                templateUrl: 'client/postEdit/postEdit.ng.html',
                controller: 'posteditCtrl',
                resolve: {
                    "currentUser": function ($meteor) {
                        return $meteor.requireValidUser(function (user) {
                            return user.username === 'admin';
                            //return user.profile.isAdmin;
                        });
                    }
                }
            })
            .state('postcreate', {
                url: '/postcreate',
                templateUrl: 'client/postCreate/postcreate.ng.html',
                controller: 'postcreateCtrl',
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
