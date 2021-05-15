const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const { criador, comentario_pai, descricao, tarefa } = req.body

  try {
    await prisma.comentario.create({
      data: {
        id_criador: criador,
        id_comentario_pai: comentario_pai,
        id_tarefa: tarefa,
        descricao: descricao,
        created_on: new Date().toISOString()
      }
    })
      .then(() => res.status(200).json('comentario criado com sucesso!'));

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao criar o comentario');
    throw e
  }

};