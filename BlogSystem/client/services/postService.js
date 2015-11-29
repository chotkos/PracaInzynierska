angular.module('blogSystem').service('postService', function ($meteor) {

    this.postsSubscription = $meteor.collection(Posts).subscribe("posts", {});

    this.posts = function (options, sorters) {
        return $meteor.collection(function () {
            return Posts.find(options, sorters);
        });
    };

    this.newPost = function (post) {
        postsSubscription.push(post);
    };

    this.getById = function (id) {
        return $meteor.object(Posts, id);
    };

    this.updatePost = function (post) {
        post.save();
        //this.postsSubscription.save();
    };

});
