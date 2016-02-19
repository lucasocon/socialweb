Template.dashboard.events({
  'click .js-add-website': function (event) {
     $('#website_add_form').modal('show');
  },
  'click .js-vote-website': function (event) {
    var website = Websites.findOne({_id: this._id});
    if (event.target.classList.contains('glyphicon-plus')){
      Websites.update({_id: this._id}, {$set: {votes: website.votes+1}});
    }
    else if (event.target.classList.contains('glyphicon-minus')) {
      Websites.update({_id: this._id}, {$set: {votes: website.votes-1}});
    }
  }
});

Template.website_add_form.events({
  'submit .js-add-website': function (event) {
    var url, description;
    url = event.target.url.value;
    description = event.target.description.value;

    if (Meteor.user()) {
      Websites.insert({
        url: url,
        description: description,
        votes: 0,
        createdOn: new Date(),
        createdBy: Meteor.user()._id
      });
    }
  }
});

Template.search_bar.events({
  'submit .js-search-website': function (event) {
    var search = event.target.search.value;
    Session.set('searchFilter', search);

    return false;
  }
});
