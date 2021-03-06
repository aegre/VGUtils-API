const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./router')
const cors = require('cors')

const app = express()

// Body parser configuratiopn
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())

// Configure routes
router(app)

module.exports = app
