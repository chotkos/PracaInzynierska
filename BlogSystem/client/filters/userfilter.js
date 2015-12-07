angular.module('blogSystem').filter('userfilter', function () {
    return function (input) {
        input = input || '';

        var out = "";
        out = input.split('@')[0];

        return out;
    };
})
