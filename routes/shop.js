const express = require('express')

const router = express.Router();

router.get('/', (req, res)=>{
  console.log('API ---> "/"');
  res.send('<h1>ExpressJS Default Landing Page</h1>');
});

module.exports = router;
