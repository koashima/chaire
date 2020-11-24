const router = require('express').Router();
const { body } = require('express-validator');
const { validate } = require('../validators');
const { regRules } = require('../validators/auth/register');
const { logRules } = require('../validators/auth/login');
const { login, register } = require('../controllers/authController');

router.post('/login', [logRules, validate], login);

router.post('/register', [regRules, validate], register);

module.exports = router;
