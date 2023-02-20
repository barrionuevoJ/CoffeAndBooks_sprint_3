const express = require('express');
const mainRutas = require('./routers/main')
const app = express();

const port = 3030;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', mainRutas);

app.listen(port, () => console.log(`Servidor funcionando en el puerto ${port}!`));