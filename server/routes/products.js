const {Product} = require('../models/product');
// const auth = require('../middleware/oth');

const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

 //route handler
 router.get('/' ,async (req,res) => {
    const products = await Product.find();
    res.send(products);
});

    //POST
router.post('/' , async (req , res) => {

    console.log(req.body);

    let product = new Product(req.body);
    
    await product.save(); 
    console.log(req.body);
    res.end(); 
});
     

module.exports = router;