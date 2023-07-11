/* eslint-disable no-undef */
const allowedCors = [
  'http://mestodkey47.nomoreparties.sbs',
  'https://mestodkey47.nomoreparties.sbs',
  'http://api.mestodkey47.nomoreparties.sbs',
  'https://api.mestodkey47.nomoreparties.sbs',
  'http://localhost:3000',
  'http://localhost:3001',
  'https://localhost:3000',
  'https://localhost:3001',
];

const cors = (req, res, next) => {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  const { method } = req;
  res.header('Access-Control-Allow-Credentials', true);
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }
  return next();
};

module.exports = cors;
