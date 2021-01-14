const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const path = require('path')
const indexRouter = require('./routes/indexRouter')
const imgUploadRouter = require('./routes/imgUpload')


const app = express()

// MongoDB
mongoose.connect('mongodb+srv://glassShop:akP7zAugnGTwJVch@cluster0.cxklx.mongodb.net/glassShop?retryWrites=true&w=majority', {
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
app.use('/upload', imgUploadRouter)


app.listen(3000, () => {
  console.log('Server has been started on port 3000')
})


