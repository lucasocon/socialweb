Template.dashboard.helpers({
  websites: function() {
    if (Session.get('searchFilter')) {
      var results = Websites.find({url: Session.get('searchFilter')}, {sort: {votes: -1}});
      if (results.count() == 0) {
        return ['Sorry not websites found'];
      }
      else {
        return results;
      }
    }
    else {
      return Websites.find({}, {sort: {votes: -1}});
    }
  }
});
