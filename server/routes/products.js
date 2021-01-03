const { Product } = require('../models/product');
// const auth = require('../middleware/oth');

const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

 //route handler
 router.get('/' ,async (req,res) => {
    const products = await Product.find().sort('name');
    res.send(products);
});

    //POST
router.post('/' , async (req , res) => {
    let product = new Product({
        title: req.body.title ,
        category: req.body.category ,
        images: req.body.images ,
        brand: req.body.brand ,
        price: req.body.price ,
        cpu: req.body.cpu ,
        camera: req.body.camera,
        size: req.body.size ,
        weight: req.body.weight ,
        display: req.body.display ,
        battery: req.body.battery ,
        memory: req.body.memory ,
        description: req.body.description
    });
    product = await product.save(); 
      res.send(product); 
    });
     

module.exports = router;