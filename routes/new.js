const express = require('express');
const router = express.Router();
const new_controller = require('../controllers/newController');

router.get('/',  new_controller.new_message_get);

module.exports = router;
