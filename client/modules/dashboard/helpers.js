Template.dashboard.helpers({
  websites: function() {
    return Websites.find({}, {sort: {votes: -1}});
  }
});
