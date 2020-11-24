const { body } = require('express-validator');

const regRules = (() => {
  return [
    body('firstName').notEmpty(),
    body('lastName').notEmpty(),
    body('password').isLength({ min: 5 }),
    body('gender').notEmpty(),
    body('email').isEmail(),
  ];
})();

module.exports = {
  regRules,
};
