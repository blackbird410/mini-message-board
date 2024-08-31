const asyncHandler = require('express-async-handler');



exports.new_message_get = asyncHandler(async (req, res, next) => {
  res.render('form', { title: 'New Message' });
});

exports.new_message_post = asyncHandler(async (req, res, next) => {
  const message = req.body.message;
  const user = req.body.user;
  const added = new Date();
  // messages.push({ text: message, user: user, added: added });
  res.redirect('/');
});
