/**
 * This file serve as a mini express app to route the incoming request
 *
 */

const express = require('express');


const router = express.Router();

router.get('/add-product', (req,res)=>{
  console.log('API ---> "/add-product"');
  res.send(`<html>
            <body>
              <form action="/product" method="POST"><input type="text" name="title">
                <button type="submit">Add Product</button></form>
            </body>
          </html>`);
})

router.post('/product', (req, res)=>{
  console.log(req.body)
  res.redirect('/')
})

module.exports = router;
