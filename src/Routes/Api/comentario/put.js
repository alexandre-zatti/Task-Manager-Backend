const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const { descricao } = req.body
  const id = req.params.id;

  try {
    if (id) {
      await prisma.comentario.update({
        where: {
          id: parseInt(id),
        },
        data: {
          descricao: descricao,
          created_on: new Date().toISOString()
        }
      })
        .then(() => res.status(200).json('comentario atualizado com sucesso!'));
    }

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao atualizar o comentario');
    throw e
  }

};