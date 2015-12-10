Configurations = new Mongo.Collection("configurations");

var isAdmin = function (id) {
    var usr = Meteor.users.findOne({
        _id: id
    });

    return usr.profile && usr.profile.isAdmin;
};


Configurations.allow({
    update: function (userId, configuration, fields, modifier) {
        return isAdmin(userId); //return userId && configuration.owner === userId;
    },
});
