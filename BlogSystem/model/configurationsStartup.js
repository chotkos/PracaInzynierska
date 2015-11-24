if (Meteor.isServer) {
    Meteor.startup(function () {
        if (Configurations.find().count() === 0) {
            var configurations = [
                {
                    name: "My blog",
                    description: "Blog description",
                    author: "Your name",
                    backgroundImage: "https://images.unsplash.com/photo-1440635592348-167b1b30296f?fit=crop&fm=jpg&h=1000&ixjsv=2.0.0&ixlib=rb-0.3.5&q=80&w=1925",
                    isSet: true,
                }
            ];
            for (var i = 0; i < configurations.length; i++)
                Configurations.insert(configurations[i]);
        }
    });
}
