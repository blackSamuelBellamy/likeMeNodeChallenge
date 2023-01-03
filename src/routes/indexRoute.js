const express = require('express')
const indexController = require('../controller/indexController')
const indexMethod = require('./indexMethod')
const app = express()

app.get('/', indexController.show)
app.use('/posts', indexMethod)

app.use('/*', indexController.notFound)


module.exports= app