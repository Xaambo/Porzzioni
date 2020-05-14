const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('APARTAT DE CLIENTS');
});

router.get('/nou', (req, res) => {
    res.send('Nou client');
});

module.exports = router;