Comments = new Mongo.Collection("comments");

Comments.allow({
    insert: function (userId, comment) {
        return true;
    },
    update: function (userId, comment, fields, modifier) {
        return true;
    },
    remove: function (userId, comment) {
        return true;
    }
});
