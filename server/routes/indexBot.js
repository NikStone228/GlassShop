var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('indexBot', { title: 'Оставьте Вашу заявку здесь, мы с вами обязательно свяжемся' });
});

const ctrlTelegram = require('../api/telegramMsg');
router.post('/telegram', ctrlTelegram.sendMsg);

module.exports = router;
