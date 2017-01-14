let path = require('path')
let logger = require('morgan')
let express = require('express')
let bodyParser = require('body-parser')
let cookieParser = require('cookie-parser')

let login = require('./server/routes/login')

let app = express()

app.set('views', path.join(__dirname, 'server/views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', login)

// catch 404 and forwarding to error handler

// app.use(function(req,res,next)){
//   var err = new Error('Not Found')
//   err.status = 404
//   next(err)
// }

module.exports = app
