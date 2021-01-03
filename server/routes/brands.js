const { Brand } = require('../models/brand');

const express = require('express');
const router = express.Router();

 //route handler
 router.get('/' ,async (req,res) => {

    const brands = await Brand.find().sort('name');
    res.send(brands);
});

//POST
router.post('/' , async (req , res) => {


    let brand = new Brand({
        name: req.body.name
    });

    await brand.save() ;
    res.redirect('/logging');

});
     
module.exports = router;