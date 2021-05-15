const projeto_usuario = require('express').Router();
const get = require('./get');
const post = require('./post');
const put = require('./put');
const remove = require('./delete');

projeto_usuario.get('/:id?', get);
projeto_usuario.post('/post', post);
projeto_usuario.put('/put/:id?', put);
projeto_usuario.delete('/delete/:id?', remove);

module.exports = projeto_usuario;