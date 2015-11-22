angular.module('blogSystem', ['angular-meteor', 'ui.router', 'ngSanitize']);
Template.body.helpers({
    configuration: function () {
        var x = Configurations.find({
            isSet: true
        }).fetch();
        return x[x.length - 1];
    }
});
