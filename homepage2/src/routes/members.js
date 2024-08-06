var router = require('express').Router()
var Members = require('../models/members')

router.get('/login', (req, res) => {
    res.render("html/login")
})

router.post('/login', (req, res) => {
    const userId = req.body.userid
    const userPw = req.body.userpw
    console.log(userId, userPw)

    Members.login(userId, userPw).then((member) => {
        if (!member) return res.status(404).send({ err: 'Member not found' })
        console.log(member)
        res.send(`success: ${member}`)
    }).catch(err => res.status(500).send(err))
})

router.post('/signup', (req, res, next) => {
    const member = new Members({
        id: req.body.userid,
        pw: req.body.userpw,
        firstname: req.body.firstname
    })
})

module.exports = router