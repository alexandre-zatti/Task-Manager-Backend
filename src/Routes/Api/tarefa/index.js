const tarefa = require('express').Router();
const get = require('./get');
const post = require('./post');
const put = require('./put');
const remove = require('./delete');

tarefa.get('/:id?', get);
tarefa.post('/post', post);
tarefa.put('/put/:id?', put);
tarefa.delete('/delete/:id?', remove);

module.exports = tarefa;