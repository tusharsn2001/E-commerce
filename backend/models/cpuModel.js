const mongoose = require('mongoose')
// schema 
const reviewSchema = require('./reviewModel')
// const Product = require('./productModel');

const processorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
    ,
    brand: {
        type: String,
        required: [true, 'Intel or AMD Required'],
        unique: true,
        trim: true
    },
    name: {
        type: String,

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
    category: {
        type: String,
        default: "Desktop"
    }
    ,
    price: {
        type: Number,
        required: [true, 'A Cpu must have a price']
    },
    countInStock: {
        type: Number
    },
    type: {
        type: String,
        trim: true,

    }


})

// const Processor = Product.discriminator('Processor', processorSchema)

const Processor = mongoose.model('Processor', processorSchema)

module.exports = Processor;