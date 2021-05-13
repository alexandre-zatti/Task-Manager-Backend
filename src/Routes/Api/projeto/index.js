const projeto = require('express').Router();
const get = require('./get');
const post = require('./post');
const put = require('./put');
const remove = require('./delete');

projeto.get('/', get);
projeto.get('/post', post);
projeto.get('/put', put);
projeto.get('/delete', remove);

module.exports = projeto;