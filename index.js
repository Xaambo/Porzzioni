const express = require('express');
const app = express();

const clients = require('./routes/clients.js');
const comandes = require('./routes/comandes.js');

app.use('/public', express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/clients', clients);
app.use('/comandes', comandes);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('*', (req, res) => {
    res.render('error');
});

app.listen(8080);