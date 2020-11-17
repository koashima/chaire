const User = require('../models').User;
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) return res.status(404).json({ message: 'User not found' });

    if (!bcrypt.compareSync(password, user.password))
      return res.status(401).json({ message: 'incorrect password' });

    res.send(user)
  } catch (e) {}

  return res.send([email, password]);
};

const register = async (req, res) => {};

module.exports = {
  login,
};
