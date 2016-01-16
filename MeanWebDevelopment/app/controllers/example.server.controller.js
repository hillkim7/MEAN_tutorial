exports.render = function(req, res) {
  res.render('example', {
    title: 'Hello World by View Engine',
    userFullName: req.user ? req.user.fullName : '',
    user: JSON.stringify(req.user)
  });
};
