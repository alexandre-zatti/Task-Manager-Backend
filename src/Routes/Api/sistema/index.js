const sistema = require('express').Router();
const get = require('./get');
const post = require('./post');
const put = require('./put');
const remove = require('./delete');

sistema.get('/', get);
sistema.get('/post', post);
sistema.get('/put', put);
sistema.get('/delete', remove);

module.exports = sistema;