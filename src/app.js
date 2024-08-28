const express = require('express')
const routes = require('./routes/index.js')
const errorHandler = require('./middlewares/errorHandler.js')

const app = express()
routes(app)
app.use(errorHandler)

module.exports = app
