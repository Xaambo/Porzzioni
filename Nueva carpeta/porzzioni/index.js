const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var path = require('path');

const pedidos = require('./routes/pedidos.js');
const clientes = require('./routes/clientes.js');

app.use("/public", express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/pedidos', pedidos);
app.use('/clientes', clientes);

app.get('/', (req, res) => {
	res.render('home');
});

app.all('*', (req, res) => {
	res.send('ERROR 404: SITIO NO ENCONTRADO');
});

app.listen(8080);