const mongoose = require('mongoose');

const DataSchema =  mongoose.Schema(
    {
        productName: {type: String},
        productID: {type: String},
        img: {type: String},
        unitPrice: {type: String},
        quantity: {type: String},
        totalPrice: {type: String},
        createdDate: {
            type: Date,
            default: Date.now()
        }
    },
    {
        timeStamps: true,
        versionKey: false
    }
)

const ProductModel = mongoose.model('products', DataSchema);
module.exports = ProductModel;