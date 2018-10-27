const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 3059

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname+'views/partials')

app.get('/', (req, res) => {
  app.render('index.hbs', {
    pageTitle: 'Home'
  })
})