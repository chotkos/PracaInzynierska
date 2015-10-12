if (Meteor.isServer) {
    Meteor.startup(function () {
        if (Configurations.find().count() === 0) {
            var configurations = [
                {
                    name: "My blog",
                    description: "Blog description",
                    author: "Your name",
                    backgroundImage: "https://unsplash.com/photos/QE2QOZqxdr4/download",
                    isSet: true,
                }
            ];
            for (var i = 0; i < configurations.length; i++)
                Configurations.insert(configurations[i]);
        }
    });
}
