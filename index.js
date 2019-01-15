'use strict';

const express = require('express');
const app = express();

const todos = require('./todos');

app.get('/', async (req, res) => {
    let values = await todos.get();
    res.send(values);
});

app.listen(3000, () => {
    console.log('Server start on port 3000!')
});