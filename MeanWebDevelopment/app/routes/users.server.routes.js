var users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {
    app.get('/users', function (req, res) {
        res.render('users', {
            /* param: 'param value here' */
        });
    });

    app.route('/api/users')
    .post(users.create)
    .get(users.list);
    
  app.route('/api/users/:userId')
    .get(users.read);
  app.param('userId', users.userByID);
};
