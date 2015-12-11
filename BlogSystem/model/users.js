//Users are provisioned by accounts-ui addon


var isAdmin = function (id) {
    var usr = Meteor.users.findOne({
        _id: id
    });

    return usr.profile.isAdmin;
};

Meteor.users.allow({
    insert: function (userId, post) {
        return true;
    },
    update: function (userId, user, fields, modifier) {
        return userId != undefined && userId != null && (userId === user._id || isAdmin(userId));
    },
    remove: function (userId, post) {
        return isAdmin(userId);
    }
});
