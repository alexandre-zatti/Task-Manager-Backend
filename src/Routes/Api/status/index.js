const status = require('express').Router();
const get = require('./get');
const post = require('./post');
const put = require('./put');
const remove = require('./delete');

status.get('/:id?', get);
status.post('/post', post);
status.put('/put/:id?', put);
status.delete('/delete/:id?', remove);

module.exports = status;