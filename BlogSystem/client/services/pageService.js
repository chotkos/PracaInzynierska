angular.module('blogSystem').service('pageService', function ($meteor) {

    this.pagesSubscription = $meteor.collection(Pages).subscribe("pages", {});

    this.pages = function (options, sorters) {
        return $meteor.collection(function () {
            return Pages.find(options, sorters);
        });
    };


    this.newPage = function (page) {
        pagesSubscription.push(page);
    };

    this.getById = function (id) {
        return $meteor.object(Pages, id);
    };

    this.updatePage = function (page) {
        page.save();
    };

});
