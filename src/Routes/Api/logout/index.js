const logout = require('express').Router();
const logoutAuth = require('./logoutAuth');

logout.post('/', logoutAuth);

module.exports = logout;