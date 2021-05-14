const sistema = require('express').Router();
const get = require('./get');
const post = require('./post');
const put = require('./put');
const remove = require('./delete');

sistema.get('/:id?', get);
sistema.post('/post', post);
sistema.put('/put/:id?', put);
sistema.delete('/delete/:id?', remove);

module.exports = sistema;