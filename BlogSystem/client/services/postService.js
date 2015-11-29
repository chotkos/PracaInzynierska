angular.module('blogSystem').service('postService', function ($meteor) {

    this.postsSubscription = $meteor.collection(Posts).subscribe("posts", {});
    this.posts = function (options) {
        if (options === undefined || options === null) {
            options = {
                sort: {
                    date: -1
                }
            };
        }
        return $meteor.collection(Posts).subscribe("posts", options);
    }

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
