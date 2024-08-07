var router = require('express').Router()
var Members = require('../models/members')
var multer = require('multer')
var uuidv4 = require('uuid4')

var DIR = "./public/"
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR)
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-')
        cb(null, uuidv4() + '-' + fileName)
    }
})

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "application/pdf") {
            cb(null, true)
        } else {
            cb(null, false)
            return cb(new Error("Can't upload this file."))
        }
    }
})

router.get('/login', (req, res) => {
    res.render("html/login")
})

router.post('/login', (req, res) => {
    const userId = req.body.userid
    const userPw = req.body.userpw
    console.log(userId, userPw)

    Members.login(userId, userPw).then((member) => {
        if (!member) {
            return res.status(404).send({ err: 'Member not found' })
        }
        req.session.user = {
            id: member.id,
            name: member.firstname + member.lastname
        }
        res.redirect('/')
    }).catch(err => res.status(500).send(err))
})

// router.get('/signup', (req, res) => {
//     res.render("html/signup")
// })

router.post('/signup', (req, res, next) => {
    const member = new Members({
        id: req.body.userid,
        pw: req.body.userpw,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.useremail,
        position: req.body.position,
        social: req.body.social,
        project: req.body.project,
        description: req.body.description,
        educational_background: req.body.educational_background,
        career: req.body.career,
        profile_img: null,
        cv: null
    })
    Members.create(member)
        .then(member_ => res.send(member_))
        .catch(err => res.status(500).send(err))
})

router.post('/upload_profile_img', upload.single('image'), (req, res, next) => {
    const userid = req.body.userid
    const url = req.protocol + '://' + req.get('host')
    const profileImg = url + '/public/profile_img/' + req.file.filename

    Members.findOneById(userid).then((member) => {
        console.log(profileImg)
        member.profile_img = profileImg
        console.log(member)
        Members.updateOneById(userid, member).then((user) => {
            res.status(200).send(user)
        }).catch(err => res.status(500).send(err))
    }).catch(err => res.status(500).send(err))
})

router.post('/upload_pdf', upload.single('pdf'), (req, res, next) => {
    const userid = req.body.userid
    const url = req.protocol + '://' + req.get('host')
    const PdfFile = url + '/public/pdf/' + req.file.filename

    Members.findOneById(userid).then((member) => {
        member.cv_url = PdfFile
        Members.updateOneById(userid, member).then((user) => {
            res.status(200).send(user)
        }).catch(err => res.status(500).send(err))
    }).catch(err => res.status(500).send(err))
})

module.exports = router