const asyncHandler = require('express-async-handler');

exports.new_message_get = asyncHandler(async (req, res, next) => {
  res.render('form', { title: 'New Message' });
});

