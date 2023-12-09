const mongoose = require('mongoose')
// schema 

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'USer must have name']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }


}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User;