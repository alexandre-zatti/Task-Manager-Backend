const complexidade = require('express').Router();
const get = require('./get');
const post = require('./post');
const put = require('./put');
const remove = require('./delete');

complexidade.get('/:id?', get);
complexidade.post('/post', post);
complexidade.put('/put/:id?', put);
complexidade.delete('/delete/:id?', remove);

module.exports = complexidade;