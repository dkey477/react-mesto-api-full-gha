/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('./routes/index');
const errorCenter = require('./middlewares/errorCenter');
const { requestLogger, errorLogger } = require('./middlewares/logger');
// const cors = require('./middlewares/cors');

const app = express();
app.use(requestLogger);

app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/mestodb');
const corsOrigin = {
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
  origin: ['http://mestodkey47.nomoreparties.sbs',
    'https://mestodkey47.nomoreparties.sbs',
    'http://api.mestodkey47.nomoreparties.sbs',
    'https://api.mestodkey47.nomoreparties.sbs',
    'http://localhost:3000',
    'http://localhost:3001',
    'https://localhost:3000',
    'https://localhost:3001'],
};

app.use(cors(corsOrigin));

app.use(cookieParser());
// app.use(cors);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(router);

app.use(errorLogger);

app.use(errors());
app.use(errorCenter);

app.listen(3000, () => {
  console.log('Слушаю порт 3000');
});
