const mongoose = require('mongoose')
// schema 


const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
    ,
    orderItems: [{
        name: {
            type: String, required: true
        },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        productType: {
            type: String,
            required: true,
            enum: ['processors', 'graphiccards', 'rams']
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: orderItems.productType
        }


    }],
    shippingAddress: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        pincode: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        }


    },
    paymentMethods: {
        type: String,
        required: true
    },
    paymentResults: {
        id: {
            type: String
        },
        status: {
            type: String
        },
        update_time: {
            type: String
        },
        email_address: {
            type: String
        },
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date

    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt: {
        type: Date
    }
}, { timestamps: true })

const Order = mongoose.model('Order', orderSchema)

module.exports = Order;