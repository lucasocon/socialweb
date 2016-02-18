Template.comments.helpers({
  comments: function () {
    return Comments.find({websiteId: this._id});
  }
});
