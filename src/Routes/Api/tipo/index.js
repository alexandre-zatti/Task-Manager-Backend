const tipo = require('express').Router();
const get = require('./get');
const post = require('./post');
const put = require('./put');
const remove = require('./delete');

tipo.get('/:id?', get);
tipo.post('/post', post);
tipo.put('/put/:id?', put);
tipo.delete('/delete/:id?', remove);

module.exports = tipo;