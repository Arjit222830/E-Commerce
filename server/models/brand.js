const Joi = require('joi');
const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 4,
        maxlength: 50,
        required: true
    }
});

const Brand = mongoose.model('Brand' , brandSchema ) ;

// function validate(brand)
// {
//     const schema = Joi.object({
//         description: Joi.String().min(15).max(40).required()    
//     });
//     return result = schema.validate(product);
// }

module.exports.Brand = Brand ;
// module.exports.validate = validate ;