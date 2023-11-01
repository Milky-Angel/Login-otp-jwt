const express = require("express");
const router = express.Router();

const controller_Test = require('../controller/back_end/test');

// Define routes for the back-end
router.post("/test", controller_Test.Test);

module.exports = router;
