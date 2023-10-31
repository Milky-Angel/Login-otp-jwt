const express = require('express');
const router = express.Router();

// renter the code in services file
const controller_Test = require('../controller/front_end/test');

// Define routes for the front-end
router.get('/', controller_Test.Test);

router.get('/about', (req, res) => {    
  res.send('About Page');
});

module.exports = router;
