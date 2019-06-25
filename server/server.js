const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/usuario', (req, res) => {
   res.json('get Usuario');
});

app.post('/usuario', (req, res) => {
    let body = req.body;
    res.json({persona: body});
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({ id });
});

app.delete('/usuario', (req, res) => {
    res.json('delete Usuario');
});

app.listen(3000, () => {
    console.log('Escuchando puerto: ', 3000);
});
