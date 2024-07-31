var express = require('express')
var router = express.Router()

var app = express()

router.get('/', (req, res) => {

})

app.use('/', router)
app.listen(3000, function() {
    console.log('express server on port 3000')
})