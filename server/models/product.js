const Joi = require('joi');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 4,
        maxlength: 50,
        required: true 
    },
    category: {
        type: String,
        minlength: 4,
        maxlength: 50,
        required: true 
    },
    images: {
        type: [String],
        required: true
    },
    brand: {
        type: String,
        minlength: 4,
        maxlength: 50,
        required: true 
    },
    price: {
        type: Number,
        required: true 
    },
    cpu: {
        type: String,
        minlength: 4,
        maxlength: 50,
        required: true
    },
    camera: {
        type: String,
        minlength: 4,
        maxlength: 50,
        required: true
    },
    size: {
        type: String,
        minlength: 4,
        maxlength: 50,
        required: true
    },
    weight: {
        type: String,
        minlength: 4,
        maxlength: 50,
        required: true
    },
    display: {
        type: String,
        minlength: 4,
        maxlength: 50,
        required: true
    },
    battery:{
        type: String,
        minlength: 4,
        maxlength: 50,
        required: true
    },
    memory: {
        type: String,
        minlength: 4,
        maxlength: 50,
        required: true
    },
    description: {
        type: String,
        minlength: 4,
        maxlength: 50,
        required: true
    }
});

const Product = mongoose.model('Product' , productSchema ) ;

// function validate(product)
// {
//     const schema = Joi.object({
//         title: Joi.string().min(4).max(50).required() ,
//         category: Joi.string().min(4).max(50).required().email(),
//         images: Joi.array() ,
//         brand: Joi.number().min(15).max(40).required(),
//         price: Joi.string().min(4).max(15).required(),
//         cpu: Joi.string().min(4).max(50).required(),
//         camera: Joi.string().min(4).max(40).required(),
//         size: Joi.string().min(4).max(40).required(),
//         weight: Joi.string().min(4).max(40).required(),
//         display: Joi.string().min(4).max(40).required(),
//         battery: Joi.string().min(4).max(40).required(),
//         memory: Joi.string().min(4).max(40).required(),
//         description: Joi.string().min(4).max(40).required()    
//     });
//     return result = schema.validate(product);
// }

module.exports.Customer = Product ;
// module.exports.validate = validate ;