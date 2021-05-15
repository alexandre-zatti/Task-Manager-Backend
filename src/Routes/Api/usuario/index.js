const usuario = require('express').Router();
const get = require('./get');
const post = require('./post');
const put = require('./put');
const remove = require('./delete');

usuario.get('/:id?', get);
usuario.post('/post', post);
usuario.put('/put/:id?', put);
usuario.delete('/delete/:id?', remove);

module.exports = usuario;