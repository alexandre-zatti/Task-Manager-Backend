const routes = require('express').Router();
const sistema = require('./Api/sistema/index');
const projeto = require('./Api/projeto/index');
const usuario = require('./Api/usuario/index')
const prioridade = require('./Api/prioridade/index')
const projeto_usuario = require('./Api/projeto_usuario/index')
const comentario = require('./Api/comentario/index')
const grupo = require('./Api/grupo/index')
const tipo = require('./Api/tipo/index')
const status = require('./Api/status/index')
const complexidade = require('./Api/complexidade/index')
const tarefa = require('./Api/tarefa/index')
const login = require('./Api/login/index')
const logout = require('./Api/logout/index')

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Home!' });
});

routes.use('/login', login);
routes.use('/logout', logout);
routes.use('/sistema', sistema);
routes.use('/projeto', projeto);
routes.use('/usuario', usuario);
routes.use('/projeto_usuario', projeto_usuario);
routes.use('/prioridade', prioridade);
routes.use('/comentario', comentario);
routes.use('/grupo', grupo);
routes.use('/tipo', tipo);
routes.use('/status', status);
routes.use('/complexidade', complexidade);
routes.use('/tarefa', tarefa);

module.exports = routes;