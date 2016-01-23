if (Meteor.isServer) {
    Meteor.startup(function () {
        if (Pages.find().count() === 0) {
            var pages = [
                {
                    title: "Informacje",
                    content: 'Ten blog to przykładowa instancja systemu blogowego utworzonego przez Mateusza Chodkowskiego w ramach pracy inżynierskiej.',
                    author: "admin",
                    date: new Date(),
                }
            ];
            for (var i = 0; i < pages.length; i++)
                Pages.insert(pages[i]);
        }
    });
}
