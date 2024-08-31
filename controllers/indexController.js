const asyncHandler = require('express-async-handler');

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

exports.display_messages = asyncHandler(async (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});


exports.new_message_post = asyncHandler(async (req, res, next) => {
    const message = req.body.message;
    const user = req.body.user;
    const added = new Date();
    messages.push({ text: message, user: user, added: added });

    res.redirect('/');
});
