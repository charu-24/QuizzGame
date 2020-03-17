const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : { type: String },
    email : { type: String },
    password : { type: String },
    repassword : { type: String },
    date : { type: Date, default : new Date() }
})

module.exports = user = mongoose.model('user', userSchema);