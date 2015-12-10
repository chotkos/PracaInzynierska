Comments = new Mongo.Collection("comments");

var isAdmin = function (id) {
    var usr = Meteor.users.findOne({
        _id: id
    });

    return usr.profile && usr.profile.isAdmin;
};

Comments.allow({
    insert: function (userId, comment) {
        return userId != undefined && userId != null;
    },
    update: function (userId, comment, fields, modifier) {
        return userId != undefined && userId != null;
    },
    remove: function (userId, comment) {
        return isAdmin(userId);
    }
});
