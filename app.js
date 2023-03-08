const express = require('express');
const app = express();
const hbs = require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
const fs = require('fs');

// Obtener datos del archivo JSON
app.get('/', (req, res) => {
    fs.readFile('data.json', (err, data) => {
        let dataParsed = JSON.parse(data);
        console.log(dataParsed);
        res.render('index', { dataCard: dataParsed.almuerzos});
    });
})

app.listen('3000', () => {
    console.log('Servicio levantado')
})