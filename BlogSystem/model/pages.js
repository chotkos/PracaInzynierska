Pages = new Mongo.Collection("pages");

Pages.allow({
    insert: function (userId, page) {
        return userId && page.owner === userId;
    },
    update: function (userId, page, fields, modifier) {
        return userId && page.owner === userId;
    },
    remove: function (userId, page) {
        return userId && page.owner === userId;
    }
});
