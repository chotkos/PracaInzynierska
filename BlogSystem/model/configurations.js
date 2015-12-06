Configurations = new Mongo.Collection("configurations");

Configurations.allow({
    update: function (userId, configuration, fields, modifier) {
        return true; //return userId && configuration.owner === userId;
    },
});
