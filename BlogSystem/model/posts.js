Posts = new Mongo.Collection("posts");

var isAdmin = function (id) {
    var usr = Meteor.users.findOne({
        _id: id
    });

    return usr.profile && usr.profile.isAdmin
};

Posts.allow({
    insert: function (userId, post) {
        return isAdmin(userId);
    },
    update: function (userId, post, fields, modifier) {
        return isAdmin(userId);
    },
    remove: function (userId, post) {
        return isAdmin(userId);
    }
});
