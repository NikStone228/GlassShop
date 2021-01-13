const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const path = require('path')
const indexRouter = require('./routes/indexRouter')

const app = express()

// Mongoose connection.
mongoose.connect('mongodb://localhost:27017/glassShop', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, 
});


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
