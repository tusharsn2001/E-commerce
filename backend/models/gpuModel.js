const mongoose = require('mongoose')
// schema 
const reviewSchema = require('./reviewModel')

// const Product = require('./productModel');
const graphiccardSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    brand: {
        type: String,

    },
    name: {
        type: String
    },
    model: {
        type: String,

    },
    memory: {
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

// const Graphiccard = Product.discriminator('Graphiccard', graphiccardSchema)

const Graphiccard = mongoose.model('Graphiccard', graphiccardSchema)

module.exports = Graphiccard;