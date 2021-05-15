const routes = require('express').Router();
const sistema = require('./Api/sistema/index');
const projeto = require('./Api/projeto/index');
const usuario = require('./Api/usuario/index')

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Home!' });
});

routes.use('/sistema', sistema);
routes.use('/projeto', projeto);
routes.use('/usuario', usuario);

module.exports = routes;