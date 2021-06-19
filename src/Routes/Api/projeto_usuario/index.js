const projeto_usuario = require('express').Router();
const get = require('./get');
const post = require('./post');
const remove = require('./delete');

projeto_usuario.get('/:id?', get);
projeto_usuario.get('/id_projeto/:id_projeto?', get);
projeto_usuario.get('/id_usuario/:id_usuario?', get);
projeto_usuario.post('/post', post);
projeto_usuario.delete('/delete/:id?', remove);

module.exports = projeto_usuario;