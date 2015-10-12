angular.module('blogSystem', ['angular-meteor', 'ui.router']);
Template.body.helpers({
    configuration: function () {
        var x = Configurations.find({}).fetch();
        return x[x.length - 1];
    }
});
