const comentario = require('express').Router();
const get = require('./get');
const post = require('./post');
const put = require('./put');
const remove = require('./delete');

comentario.get('/:id?', get);
comentario.get('/:id_tarefa?', get);
comentario.post('/post', post);
comentario.put('/put/:id?', put);
comentario.delete('/delete/:id?', remove);

module.exports = comentario;