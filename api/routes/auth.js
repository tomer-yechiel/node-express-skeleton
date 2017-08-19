const routes = require('express').Router();
const auth = require('../controllers/authController');

routes.route('/authenticate')
  .post(auth.authenticate);

routes.use(auth.verify_token);

module.exports = routes;