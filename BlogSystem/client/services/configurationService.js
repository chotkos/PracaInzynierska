angular.module('blogSystem').service('configurationService', function ($meteor) {

    this.configurationSubscription = $meteor.collection(Configurations).subscribe("configurations", {});

    this.configurations = function (options, sorters) {
        return $meteor.collection(function () {
            return Configurations.find(options, sorters);
        });
    };


    this.updateConfiguration = function (conf) {
        conf.save();
        //this.postsSubscription.save();
    };

});
