const express = require('express');
const router = express.Router();

// Define routes for the back-end
router.get('/test', (req, res) => {
  res.json({ message: 'Backend API Data' });
});



module.exports = router;
