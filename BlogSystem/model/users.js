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
    update: function (userId, post, fields, modifier) {
        return true;
    },
    remove: function (userId, post) {
        return true;
    }
});
