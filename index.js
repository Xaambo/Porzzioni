const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const clients = require('./routes/clients.js');
const comandes = require('./routes/comandes.js');

var path = require('path');

app.use("/public", express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/clients', clients);
app.use('/comandes', comandes);

app.get('/', (req, res) => {
    res.render('home');
});

app.all('*', (req, res) => {
    res.render('error');
});

app.listen(8080);