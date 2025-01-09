const express = require('express');
const router = express.Router();
const loyaltyController = require('../controllers/loyaltyController');

router.post('/issue-points', loyaltyController.issuePoints);

module.exports = router;
