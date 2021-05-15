const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const id = req.params.id;

  try {
    if (id) {
      await prisma.projeto_usuario.findUnique({
        where: {
          id: parseInt(id),
        },
      })
        .then((projeto_usuario) => res.status(200).json(projeto_usuario));
    } else {
      await prisma.projeto_usuario.findMany()
        .then((projeto_usuarios) => res.status(200).json(projeto_usuarios));
    }

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao buscar pelo(s) projeto_usuario(s)');
    throw e
  }

};