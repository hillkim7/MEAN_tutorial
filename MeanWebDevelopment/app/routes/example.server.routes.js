module.exports = function(app) {
  var controller = require('../controllers/example.server.controller');
  app.get('/example', controller.render);
};
