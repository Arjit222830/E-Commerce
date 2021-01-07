const express = require('express');
const router = express.Router();
const {Payment}= require('../models/payment');
const Razorpay= require('razorpay');
const instance = new Razorpay({ key_id: 'rzp_test_stgeaUiidb3JxB', key_secret: 'uLnUBlTcdzyPE0eW7KvHR67l' });

router.post('/',async (req,res)=>{
    const payment= new Payment({
        Payment_ID: req.body.razorpay_payment_id,
        Order_ID: req.body.razorpay_order_id,
        Signature: req.body.razorpay_signature
    });
        
    await payment.save();
    res.send('Payment Info Saved');
});

router.post('/orders',async function(req,res){
    const data= {
      amount: req.body.amount,  // amount in the smallest currency unit
      currency: "INR",
      receipt: "order_rcptid_11"
    };
    console.log(data);
    await instance.orders.create(data, (err, order)=>{
        console.log("order:"+order.id);
        res.send(order.id)
    });
});

module.exports = router;
