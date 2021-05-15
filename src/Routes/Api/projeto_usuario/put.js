const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const { usuario, projeto } = req.body
  const id = req.params.id;

  try {
    if (id) {
      await prisma.projeto_usuario.update({
        where: {
          id: parseInt(id),
        },
        data: {
          id_usuario: usuario,
          id_projeto: projeto,
        }
      })
        .then(() => res.status(200).json('projeto_usuario atualizado com sucesso!'));
    }

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao atualizar o projeto_usuario');
    throw e
  }

};