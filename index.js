const express = require('express');
const path = require('path')
const serveStatic = require('serve-static')

const router = require('./router.js');

const { PORT = 3000, BASE_PATH } = process.env;

const app = express();

app.use(serveStatic(path.join(__dirname, '../vite-college-of-culture-frontend/src')));
// app.use(serveStatic(path.join(__dirname, 'publicTest')));

// app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
