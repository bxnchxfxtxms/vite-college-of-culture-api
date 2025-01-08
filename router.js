// router.js
const router = require('express').Router(); // создали роутер
const { users } = require('./db.js'); // данные нужны для роутинга, поэтому импортируем их

router.get('/users/:id', (req, res) => {
  if (!users[req.params.id]) {
    res.send(`Такого пользователя не существует`);
    return;
  }

  const { name, age } = users[req.params.id];
  
  res.send(`Пользователь ${name}, ${age} лет`);
});

module.exports = router; // экспортировали роутер