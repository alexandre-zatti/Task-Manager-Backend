const grupo = require('express').Router();
const get = require('./get');
const post = require('./post');
const put = require('./put');
const remove = require('./delete');

grupo.get('/:id?', get);
grupo.post('/post', post);
grupo.put('/put/:id?', put);
grupo.delete('/delete/:id?', remove);

module.exports = grupo;