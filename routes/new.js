const express = require('express');
const router = express.Router();

router.get('/', (req, res,next) => {
    console.log(req);
    res.render('new', {
        title: 'Create a new message!'
    });
});

module.exports = router;
