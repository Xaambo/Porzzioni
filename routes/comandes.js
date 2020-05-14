const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('APARTAT DE COMANDES');
});

router.get('/noves', (req, res) => {
    res.render('novaComanda');
});

router.post('/confirmar', (req, res) => { 
    res.render('confirmarPedido', { 
        tamano: req.body.tamano,
        ingredientes: req.body.ingredientes,
        codigo: req.body.codigo
	});
});

module.exports = router;