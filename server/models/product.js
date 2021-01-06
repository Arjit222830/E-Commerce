const Joi = require('joi');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 4,
        maxlength: 150,
        required: true 
    },
    category: {
        type: String,
        minlength: 4,
        maxlength: 150,
        required: true 
    },
    images: {
        type: [String],
        required: true
    },
    brand: {
        type: String,
        minlength: 4,
        maxlength: 150,
        required: true 
    },
    price: {
        type: Number,
        required: true 
    },
    cpu: {
        type: String,
        minlength: 4,
        maxlength: 150,
        required: true
    },
    camera: {
        type: String,
        minlength: 4,
        maxlength: 150,
        required: true
    },
    size: {
        type: String,
        minlength: 4,
        maxlength: 150,
        required: true
    },
    weight: {
        type: String,
        minlength: 4,
        maxlength: 150,
        required: true
    },
    display: {
        type: String,
        minlength: 4,
        maxlength: 150,
        required: true
    },
    battery:{
        type: String,
        minlength: 4,
        maxlength: 150,
        required: true
    },
    memory: {
        type: String,
        minlength: 4,
        maxlength: 150,
        required: true
    },
    description: {
        type: String,
        minlength: 4,
        maxlength: 150,
        required: true
    }
});

const Product = mongoose.model('Product' , productSchema ) ;


module.exports.Product = Product ;
;