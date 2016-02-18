Template.website.events({
  'submit .js-edit-website': function (event) {
    var website = Websites.findOne({_id: this._id});
    var url = event.target.url.value;
    var description = event.target.description.value;

    if (Meteor.user()) {
      Websites.update({_id: this._id}, {$set: {url: url, description: description}});
    }
    else {
      alert("You're not logged on the site!");
    }
    return false;
  }
});

Template.comments.events({
  'submit .js-add-comment': function (event) {
    var websiteId = this._id;
    var content = event.target.content.value;
    if (Meteor.user()) {
      Comments.insert({
        content: content,
        websiteId: websiteId,
        userId: Meteor.user()._id,
        userUsername: Meteor.user().username,
        createdAt: new Date()
      });
      console.log("inserted!");
      event.target.content.value = "";
    }
    else {
      alert("You're not logged on the site!");
    }
    return false;
  }
});
