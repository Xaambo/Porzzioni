const express = require('express');
const router = express.Router();

router.get('/nuevo', (req, res) => {
    res.render('nuevoCliente');
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;