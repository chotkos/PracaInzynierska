Meteor.publish("comments", function (options, postId) {
    return Comments.find({});
});
