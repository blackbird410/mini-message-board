const express = require('express');
const router = express.Router();

const index_controller = require('../controllers/indexController');

router.get('/', index_controller.display_messages);
router.post('/new', index_controller.new_message_post);

module.exports = router;
