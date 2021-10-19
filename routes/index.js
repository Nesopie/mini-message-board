const express = require('express');
const router = express.Router();
const relativeTime = require('../public/javascripts/relativeTime')
const messages = require('../public/javascripts/messages');

router.get('/', (req, res, next) => {
  res.render('index', {
      title: 'Mini Messageboard',
      messages: messages
   });
});

router.post('/new', (req, res, next) => {
    messages.forEach((message) => {
        message.added = `Posted ${relativeTime(new Date(), message.posted)}`;
    });

    messages.unshift({
        text: req.body.messageText,
        user: req.body.messageUser === "" ? "anonymous" : req.body.messageUser,
        posted: new Date(),
        added: "Posted few seconds ago"
    });

    res.redirect('/');
});

module.exports = router;
