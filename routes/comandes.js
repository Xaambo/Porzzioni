const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('APARTAT DE COMANDES');
});

router.get('/nou', (req, res) => {
    res.send('Nova comanda');
});

module.exports = router;