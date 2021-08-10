const express = require('express');
const { random } = require('lodash/fp');
const app = express();
const port = 3000;

app.get('/random', (req, res) => {
    console.log('Request made');
    res.status(200).send(random(0, 10000).toString());
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});