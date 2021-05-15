const routes = require('express').Router();
const sistema = require('./Api/sistema/index');
const projeto = require('./Api/projeto/index');
const usuario = require('./Api/usuario/index')
const prioridade = require('./Api/prioridade/index')
const projeto_usuario = require('./Api/projeto_usuario/index')
const comentario = require('./Api/comentario/index')

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Home!' });
});

routes.use('/sistema', sistema);
routes.use('/projeto', projeto);
routes.use('/usuario', usuario);
routes.use('/prioridade', prioridade);
routes.use('/comentario', comentario);

module.exports = routes;