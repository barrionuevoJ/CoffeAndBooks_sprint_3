const express = require('express');
const app = express();
const path = require('path')

const port = 3030;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');


const mainRutas = require('./routers/main');
const usersRutas = require('./routers/users');

app.use('/', mainRutas, usersRutas);

app.listen(port, () => console.log(`Servidor funcionando en el puerto ${port}!`));