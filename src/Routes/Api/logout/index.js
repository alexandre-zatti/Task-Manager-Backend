const logout = require('express').Router();
const post = require('./post');

logout.post('/', post);

module.exports = logout;