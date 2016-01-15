var users = require('../../app/controllers/users.server.controller'),
  passport = require('passport');

module.exports = function (app) {
  app.route('/signup')
    .get(users.renderSignup)
    .post(users.signup);

  app.route('/signin')
  .get(users.renderSignin)
  .post(passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin',
    failureFalsh: true
  }));

  app.get('/signout', users.signout);

  app.get('/users', function (req, res) {
    res.render('users', {
      /* param: 'param value here' */
      userFullName: req.user ? req.user.fullName : ''
    });
  });

  app.route('/api/users')
  .post(users.create)
  .get(users.list);

  app.route('/api/users/:userId')
    .get(users.read);
  app.param('userId', users.userByID);
};
