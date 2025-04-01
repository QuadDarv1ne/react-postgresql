const express = require('express');
const router = express.Router();
const merchantController = require('../controllers/merchantController');

router.get('/', merchantController.getMerchants);
router.post('/', merchantController.createMerchant);
router.delete('/:id', merchantController.deleteMerchant);

module.exports = router;
