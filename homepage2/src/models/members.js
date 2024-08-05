var mongoose = require('mongoose')

var memberSchema = new mongoose.Schema({
    seq: {type: Number, required: true, uniqued: true},
    id: {type: String, required: true, uniqued: true},
    pw: {type: String, required: true},
    firstname: {type: String},
    lastname: {type: String},
    email: [{type: String}],
    position: {type: String},
    profile_img: {type: Buffer},
    cv_url: {type: String},
    social: {
        name: {type: String},
        link: {type: String}
    },
    project: [{type: String}],
    description: [{type: String}],
    interest: [{type: String}],
    educational_background: [{
        name: {type: String},
        start_year: {type: String},
        end_year: {type: String}
    }],
    career: [{
        name: {type: String},
        desc: {type: String},
        start_year: {type: String},
        end_year: {type: String}
    }]
})

module.exports = mongoose.model('Member', memberSchema)