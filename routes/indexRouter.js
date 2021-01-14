const { Router } = require('express')
const router = Router()

router.get('/', async (req, res) => {
  res.render('index', )
})

router.get('/auth', async (req, res) => {
  res.render('auth')
})

router.get('/logout', async (req, res) => {
  req.session.destroy(function(err) {
    res.redirect('/')
  })
})

router.post('/auth', async (req, res) => {
  const { login, password } = req.body
  if (login === process.env.LOGIN && password === process.env.PASSWORD) {
    req.session.isAuthenticated = 'superGlassAdmin'
    res.redirect('/')
  } else {
    res.send('Не верные данные')
  }
})

module.exports = router
