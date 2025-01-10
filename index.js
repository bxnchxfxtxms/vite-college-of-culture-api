const express = require('express');
const path = require('path')
const serveStatic = require('serve-static')

const router = require('./router.js');

const { PORT = 3000, BASE_PATH } = process.env;

const allowedCors = [
  'http://api-college-lvova.online',
  'https://api-college-lvova.online',
  'http://колледжльвова.рф',
  'https://колледжльвова.рф',
  'localhost:3000',
];

const app = express();

app.use('/api', require('../router'));

app.use('/dick', require('../router'));
app.use('/Vacancy', require('../router'));

app.use(serveStatic(path.join(__dirname, 'public')));

// app.use(express.static('public'))

app.use((req, res, next) => {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }
  return next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
