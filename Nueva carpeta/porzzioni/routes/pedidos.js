const express = require('express');
const router = express.Router();

router.get('/nuevo', (req, res) => {
    res.render('nuevoPedido');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/listado', (req, res ) => {
    res.render('listadoPedidos');
});

router.post('/confirmar', (req, res) => {
	res.render('confirmarPedido', { 
        tamano: req.body.tamano,
        ingredientes: req.body.ingredientes,
        codigo: req.body.codigo
		});
});

module.exports = router;