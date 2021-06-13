const login = require('express').Router();
const post = require('./post');

login.post('/', post);

module.exports = login;