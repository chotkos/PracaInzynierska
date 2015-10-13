if (Meteor.isServer) {
    Meteor.startup(function () {
        if (Posts.find().count() === 0) {
            var posts = [
                {
                    title: "My blog",
                    content: "Blog description",
                    author: "Your name",
                    image: "http://www.wallpaperup.com/uploads/wallpapers/2013/04/08/72764/big_thumb_f73e64a335cd42e644231b978926fe6e.jpg",
                    date: new Date(),
                    description: "Not more than 100 characters"
                },
                {
                    title: "My blog",
                    content: "Blog description",
                    author: "Your name",
                    image: "http://www.wallpaperup.com/uploads/wallpapers/2013/04/08/72764/big_thumb_f73e64a335cd42e644231b978926fe6e.jpg",
                    date: new Date(),
                    description: "Not more than 100 characters"

                },
                {
                    title: "My blog",
                    content: "Blog description",
                    author: "Your name",
                    image: "http://www.wallpaperup.com/uploads/wallpapers/2013/04/08/72764/big_thumb_f73e64a335cd42e644231b978926fe6e.jpg",
                    date: new Date(),
                    description: "Not more than 100 characters"

                },
                {
                    title: "My blog",
                    content: "Blog description",
                    author: "Your name",
                    image: "http://www.wallpaperup.com/uploads/wallpapers/2013/04/08/72764/big_thumb_f73e64a335cd42e644231b978926fe6e.jpg",
                    date: new Date(),
                    description: "Not more than 100 characters"

                },
                {
                    title: "My blog",
                    content: "Blog description",
                    author: "Your name",
                    image: "http://www.wallpaperup.com/uploads/wallpapers/2013/04/08/72764/big_thumb_f73e64a335cd42e644231b978926fe6e.jpg",
                    date: new Date(),
                    description: "Not more than 100 characters"

                },
                {
                    title: "My blog",
                    content: "Blog description",
                    author: "Your name",
                    image: "http://www.wallpaperup.com/uploads/wallpapers/2013/04/08/72764/big_thumb_f73e64a335cd42e644231b978926fe6e.jpg",
                    date: new Date(),
                    description: "Not more than 100 characters"

                },
                {
                    title: "My blog",
                    content: "Blog description",
                    author: "Your name",
                    image: "http://www.wallpaperup.com/uploads/wallpapers/2013/04/08/72764/big_thumb_f73e64a335cd42e644231b978926fe6e.jpg",
                    date: new Date(),
                    description: "Not more than 100 characters"

                },
                {
                    title: "My blog",
                    content: "Blog description",
                    author: "Your name",
                    image: "http://www.wallpaperup.com/uploads/wallpapers/2013/04/08/72764/big_thumb_f73e64a335cd42e644231b978926fe6e.jpg",
                    date: new Date(),
                    description: "Not more than 100 characters"

                },
            ];
            for (var i = 0; i < posts.length; i++)
                Posts.insert(posts[i]);
        }
    });
}
