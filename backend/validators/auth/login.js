const { body } = require('express-validator');

const logRules = (() => {
  return [
    body('email').isEmail(),
  ];
})();

module.exports = {
  logRules,
};
