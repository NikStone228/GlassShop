const { Router } = require("express");
const router = Router();



router.get("/", async (req, res) => {
  res.render("index");
});

router.get("/shower", (req, res) => {
  res.render("shower");
});

router.get("/doors", (req, res) => {
  res.render("doors");
});

router.get("/mirror", (req, res) => {
  res.render("mirror");
});

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
router.get("/euro-mirror", (req, res) => {
  res.render("euro-mirror");
});

router.get("/shelves", (req, res) => {
  res.render("shelves");
});

router.get("/skinali", (req, res) => {
  res.render("skinali");
});

module.exports = router;
