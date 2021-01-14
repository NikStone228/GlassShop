require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')
const app = express()

const indexRouter = require('./routes/indexRouter')

app.use(cookieParser())
// Session
app.use(session({
  secret: 'glass glass shop',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false },
}))

app.use((req, res, next) => {
  res.locals.isAuth = req.session.isAuthenticated; // записываем в локалс имя юзера из сессии
  next();
});


// MongoDB
mongoose.connect(process.env.MONGODB, {
  useUnifiedTopology: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useFindAndUpdate: false
})

// Handlebars
app.set('views', 'views')
app.set('view engine', 'hbs')

// Static & Parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

// Router
app.use('/', indexRouter)



app.listen(3000, () => {
  console.log('Server has been started on port 3000')
})

