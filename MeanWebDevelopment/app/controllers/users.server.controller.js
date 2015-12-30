var User = require('mongoose').model('User');

/*
curl -X POST -H "Content-Type: application/json" -d \
'{"firstName":"First", "lastName":"Last","email":"user@example.com","username":"username","password":"password"}' localhost:3000/users

*/
exports.create = function(req, res, next) {
  var user = new User(req.body);

  user.save(function(err) {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }
  });
};

exports.list = function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
      return next(err);
    } else {
      return res.json(users);
    }
  });
};

/* Test URI: http://localhost:3000/users/5683d452a2ed6aa725d5bbfa
*/
exports.read = function(req, res) {
  res.json(req.user);
};

exports.userByID = function(req, res, next, id) {
  User.findOne({"_id": id
    }, function(err, user) {
      if (err) {
        return next(err);
      } else {
        req.user = user;
        next();
      }
    });
};
