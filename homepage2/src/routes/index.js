var router = require('express').Router()

router.get('/', (req, res) => {
    res.render("html/index")
})

module.exports = router