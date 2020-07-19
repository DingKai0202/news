const express = require('express')
const http = require('http')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  req.middlewares = []
  next()
})

function mw1(options) {
  return function(req, res, next) {
    req.middlewares.push('mw1')
    next()
  }
}

function mw2(req, res, next) {
  req.middlewares.push('mw2')
  next()
}

function mw3(req, res, next) {
  req.middlewares.push('mw3')
  res.end(JSON.stringify(req.middlewares))
}

// app.use(require('./middlewares/auth'))

app.use('/', mw1())

app.get('/article', mw2)

app.post('/user', mw2)

app.use(mw3)

const server = http.createServer(app)

server.listen('8888')