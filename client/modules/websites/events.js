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
  }
});
