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

exports.displayMessages = asyncHandler(async (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});
