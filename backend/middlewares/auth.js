// eslint-disable-next-line import/no-extraneous-dependencies
const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

const auth = (req, res, next) => {
  const token = req.cookies.jwt;

  let payload;
  try {
    if (!token) {
      next(new UnauthorizedError('Авторизуйтесь'));
      return;
    }
    payload = jwt.verify(token, process.env.NODE_ENV === 'production' ? `${process.env.JWT_SECRET}` : 'dev-secret');
  } catch (err) {
    next(new UnauthorizedError('Авторизуйтесь'));
    return;
  }

  req.user = payload;

  next();
};

module.exports = auth;
