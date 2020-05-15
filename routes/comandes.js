const express = require('express');
const router = express.Router();

router.get('/noves', (req, res) => {
    res.render('novaComanda');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/llista', (req, res ) => {
    res.render('llistaComandes');
});

router.post('/confirmar', (req, res) => { 
    res.render('confirmarComanda', { 
        tamano: req.body.tamano,
        ingredientes: req.body.ingredientes,
        codigo: req.body.codigo
		});
});

module.exports = router;