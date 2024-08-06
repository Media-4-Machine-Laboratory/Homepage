var mongoose = require('mongoose')
var AutoIncrement = require('mongoose-sequence')(mongoose)

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
memberSchema.plugin(AutoIncrement, { inc_field: "seq" })

// SaveAll
memberSchema.statics.create = function(payload) {
    const member = new this(payload)
    return member.save()
}

// FindAll
memberSchema.statics.findAll = function() {
    return this.find({})
}

// FindById
memberSchema.statics.findOneById = function(payload) {
    return this.findOne({ payload })
}

// UpdateById
memberSchema.statics.updateOneById = function(id, payload) {
    return this.findOneAndUpdate({ id }, payload, { new: true })
}

// DeleteById
memberSchema.statics.deleteById = function(id) {
    return this.remove({ id })
}

memberSchema.statics.login = function(id, pw) {
    return this.findOne({ id: id, pw: pw})
}

module.exports = mongoose.model('Member', memberSchema)