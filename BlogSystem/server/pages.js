Meteor.publish("pages", function (options) {
    return Pages.find({}, options);
});
