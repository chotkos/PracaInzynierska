Meteor.publish('allUsers', function () {
    if (this.userId) return Meteor.users.find({}, {
        fields: {
            emails: 1,
            profile: 1
        }
    });
    else this.ready();
});
