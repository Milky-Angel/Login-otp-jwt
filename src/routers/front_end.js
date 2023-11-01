const express = require('express');
const router = express.Router();

// renter the code in services file
const controller_Test = require('../controller/front_end/test');
const controller_Login = require('../controller/front_end/loginPage');

// Define routes for the front-end
router.get('/admin', controller_Test.Test);
router.get('/login', controller_Login.Login);

router.get('/about', (req, res) => {    
  res.send('About Page');
});

module.exports = router;
