const mongoose = require('mongoose')
// schema 
const reviewSchema = require('./reviewModel')
// const Product = require('./productModel');
const ramSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    brand: {
        type: String
    },
    name: {
        type: String,

    },
    capacity: {
        type: String
    },
    image: {
        type: String,
        required: [true, "Image Link is Required"]
    }
    ,
    review: [reviewSchema]
    ,
    rating: {
        type: Number,

    }
    ,
    numReviews: {
        type: Number
    },
    speed: {
        type: String

    }
    ,
    price: {
        type: Number,
        required: [true, 'A Cpu must have a price']
    },
    countInStock: {
        type: Number
    },


})

// const Ram = Product.discriminator('Ram', ramSchema)

const Ram = mongoose.model('Ram', ramSchema)

module.exports = Ram;