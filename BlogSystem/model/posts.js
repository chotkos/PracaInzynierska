Posts = new Mongo.Collection("posts");

Posts.allow({
    insert: function (userId, post) {
        return userId && post.owner === userId;
    },
    update: function (userId, post, fields, modifier) {
        return userId && post.owner === userId;
    },
    remove: function (userId, post) {
        return userId && post.owner === userId;
    }
});
