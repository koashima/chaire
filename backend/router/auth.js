const router = require('express').Router();
const {body} = require('express-validator');
const { login, register } = require('../controllers/authController');

router.post('/login', login);

router.post('/register', [
  body('firstName').notEmpty(),
  body('lastName').notEmpty(),
  body('gender').notEmpty(),
  body('email').isEmail(),
  body('firstName').isLength({min: 2}),
], register);



module.exports = router;