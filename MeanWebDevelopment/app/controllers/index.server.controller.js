exports.render = function(req, res) {
  if (req.session.lastVisit) {
    console.log("lastVisit:", req.session.lastVisit);
  }
  req.session.lastVisit = new Date();
  res.render('index', {
    title: 'Hello World by View Engine',
    userFullName: req.user ? req.user.fullName : ''
  });
};
