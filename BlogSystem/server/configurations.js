Meteor.publish("mainConfiguration", function () {
    return Configurations.find({
        'isSet': true
    });
});
