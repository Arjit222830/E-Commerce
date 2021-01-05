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

router.put('/:id',async (req,res)=>{
    
    let product = await Product.findByIdAndUpdate(req.params.id, req.body,  {new: true});
   
    
    await product.save();
    res.end();
});

router.delete('/:id', async (req,res)=>{
    
    const remove=await Product.deleteOne({_id:req.params.id});
    if(!remove)
        return res.status(404).send({link:"/",message:"Given ID was not found"});//404 is error not found
    
   res.end();
});
     

module.exports = router;