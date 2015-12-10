Pages = new Mongo.Collection("pages");


var isAdmin = function (id) {
    var usr = Meteor.users.findOne({
        _id: id
    });

    return usr.profile && usr.profile.isAdmin;
};



Pages.allow({
    insert: function (userId, page) {
        return isAdmin(userId);
    },
    update: function (userId, page, fields, modifier) {
        return isAdmin(userId);
    },
    remove: function (userId, page) {
        return isAdmin(userId);
    }
});
