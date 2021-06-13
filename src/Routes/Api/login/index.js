const login = require('express').Router();
const authenticate = require('./authenticate');
const getAuthUser = require('./getAuthUser');

login.post('/', authenticate);
login.get('/getAuthUser', getAuthUser)

module.exports = login;