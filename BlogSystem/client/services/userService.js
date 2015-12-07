angular.module('blogSystem').service('userService', function ($meteor) {

    this.usersSubscription = $meteor.collection(Accounts.users).subscribe("allUsers", {});

    //this.users = this.postsSubscription.find({});
});
