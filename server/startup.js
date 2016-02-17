Meteor.startup(function () {
  if (Websites.find().count() == 0) {
    for (var i = 1; i < 10; i++) {
      Websites.insert(
        {
          url: "www.google.com",
          description: "I'm a website!",
          votes: 0
        }
      );
    }
  }
  console.log("statup.js says: "+ Websites.find().count());
})
