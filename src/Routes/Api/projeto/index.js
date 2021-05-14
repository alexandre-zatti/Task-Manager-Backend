const projeto = require('express').Router();
const get = require('./get');
const post = require('./post');
const put = require('./put');
const remove = require('./delete');

projeto.get('/:id?', get);
projeto.post('/post', post);
projeto.put('/put/:id?', put);
projeto.delete('/delete/:id?', remove);

module.exports = projeto;