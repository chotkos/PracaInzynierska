angular.module('blogSystem', ['angular-meteor', 'ui.router', 'ngSanitize', 'accounts.ui']);

angular.module('blogSystem')
    .config(function ($compileProvider) {
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https|ftp|mailto|file|tel|data)/);
    });

/*Template.body.helpers({
    configuration: function () {
        var x = Configurations.find({
            isSet: true
        }).fetch();
        return x[x.length - 1];
    }
});*/
