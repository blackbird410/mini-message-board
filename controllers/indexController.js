const asyncHandler = require('express-async-handler');

const messages = [
  {
        id: 0,
        text: "Hi there!",
        user: "Amando",
        added: new Date()
  },
  {
        id: 1,
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
    messages.push({ id: messages.length, text: message, user: user, added: added });

    res.redirect('/');
});

exports.message_details = asyncHandler(async (req, res) => {
    const id = req.params.id;
    if (id < 0 || id >= messages.length) res.redirect('/');

    res.render('message', { title: 'Message Details', message: messages[id] });
});
