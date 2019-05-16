const express = require('express');
const app = express();
var path = require('path');

app.use(express.static(__dirname + '/public/'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', {root: path.join(__dirname + '/public/')});
});

app.listen('80', function() {
  console.log('Servidor web escuchando en el puerto 9000');
});
