Router.configure({
  layoutTemplate: 'ApplicationLayout'
})

Router.route('/');

Accounts.ui.config({
  passwordSignupFields: "USERNAME_AND_EMAIL"
});

