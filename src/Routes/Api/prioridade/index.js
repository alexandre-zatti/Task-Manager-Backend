const prioridade = require('express').Router();
const get = require('./get');
const post = require('./post');
const put = require('./put');
const remove = require('./delete');

prioridade.get('/:id?', get);
prioridade.post('/post', post);
prioridade.put('/put/:id?', put);
prioridade.delete('/delete/:id?', remove);

module.exports = prioridade;