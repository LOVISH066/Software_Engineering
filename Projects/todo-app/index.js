const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hellovsdvf World')
})

app.get('/demo', function (req, res) {
    res.send('demo World')
  })

app.listen(3000)