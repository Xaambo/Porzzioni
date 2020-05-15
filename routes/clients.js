const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/nou', (req, res) => {
    res.render('nouClient');
});

module.exports = router;