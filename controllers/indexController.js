const asyncHandler = require('express-async-handler');
const db = require('../db/queries');

exports.display_messages = asyncHandler(async (req, res) => {
    const messages = await db.getMessages();

    res.render('index', { title: 'Mini Message Board', messages: messages });
});

exports.new_message_post = asyncHandler(async (req, res, next) => {
    const message = req.body.message;
    const username = req.body.username;
    const added = new Date();
    await db.addMessage({ text: message, username: username, added: added });

    res.redirect('/');
});

exports.message_details = asyncHandler(async (req, res) => {
    const message = await db.getMessage(req.params.id);
    if (!message) {
        res.render('message', { title: 'Message Details', message: null });
        return;
    }

    res.render('message', { title: 'Message Details', message: message });
});

exports.message_delete = asyncHandler(async (req, res) => {
    await db.deleteMessage(req.params.id);
    res.redirect('/');
});
