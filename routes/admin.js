/**
 * This file serve as a mini express app to route the incoming request
 *
 */
const path = require('path')
const express = require('express');


const router = express.Router();

router.get('/add-product', (req,res)=>{
  console.log('API ---> "/add-product"');
  res.sendFile(path.join(__dirname, '../', 'views', 'addProduct.html'));
})

router.post('/product', (req, res)=>{
  console.log(req.body)
  res.redirect('/')
})

module.exports = router;
