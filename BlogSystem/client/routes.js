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
            });

        $urlRouterProvider.otherwise("/posts");
    }]);
