if (Meteor.isServer) {
    Meteor.startup(function () {

        if (Meteor.users.find({}).fetch().length == 0) {
            var options = {
                username: "admin",
                email: "admin@admin.com",
                password: "admin",
                profile: {
                    name: "Administrator",
                    isAdmin: true,
                }
            }

            Accounts.createUser(options);
        }
    });
}
