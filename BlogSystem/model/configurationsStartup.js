if (Meteor.isServer) {
    Meteor.startup(function () {
        if (Configurations.find().count() === 0) {
            var configurations = [
                {
                    name: "Wydarzenia programistyczne",
                    description: "Przykładowy blog",
                    author: "Jan Kowalski",
                    backgroundImage: "http://s19.postimg.org/5eo6afkep/bcg.jpg",
                    isSet: true,
                }
            ];
            for (var i = 0; i < configurations.length; i++)
                Configurations.insert(configurations[i]);
        }
    });
}
