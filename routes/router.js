const users = require('./UserRoute');

module.exports = (router) => {
  users(router);
  return router;
};