var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var path = require('path')

require('dotenv').config()

var app = express()
var port = process.env.PORT || 3000
var MONGO_URI = process.env.MONGOURI

// parser
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// view engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// connect mongodb
mongoose.connect(
    MONGO_URI
).then(() => {
    console.log('Successfully Connected')
}).catch((e) => {
    console.error(e)
})

// router
app.use('/', require('./routes/index'))

// listen
app.listen(port, () => {
    console.log(`express server on port ${port}`)
})