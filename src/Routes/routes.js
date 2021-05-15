const routes = require('express').Router();
const sistema = require('./Api/sistema/index');
const projeto = require('./Api/projeto/index');
const usuario = require('./Api/usuario/index')
const prioridade = require('./Api/prioridade/index')

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Home!' });
});

routes.use('/sistema', sistema);
routes.use('/projeto', projeto);
routes.use('/usuario', usuario);
routes.use('/prioridade', prioridade);

module.exports = routes;