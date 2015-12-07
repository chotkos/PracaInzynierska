//Users are provisioned by accounts-ui addon
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
