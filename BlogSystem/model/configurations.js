Configurations = new Mongo.Collection("configurations");

Configurations.allow({
    insert: function (userId, configuration) {
        return userId && configuration.owner === userId;
    },
    update: function (userId, configuration, fields, modifier) {
        return userId && configuration.owner === userId;
    },
    remove: function (userId, configuration) {
        return userId && configuration.owner === userId;
    }
});
