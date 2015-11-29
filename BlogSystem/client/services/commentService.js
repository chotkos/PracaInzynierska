angular.module('blogSystem').service('commentService', function ($meteor) {

    this.commentsSubscription = $meteor.collection(Comments).subscribe("comments", {});
    this.comments = function (options, sorters) {
        return $meteor.collection(function () {
            return Comments.find(options, sorters);
        });
    };


    this.newComment = function (comment) {
        postsSubscription.push(comment);
    };

    this.getById = function (id) {
        return $meteor.object(Comments, id);
    };

    this.updateComment = function (comment) {
        comment.save();
        //this.postsSubscription.save();
    };

});
