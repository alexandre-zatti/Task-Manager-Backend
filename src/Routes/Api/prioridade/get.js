const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const id = req.params.id;

  try {
    if (id) {
      await prisma.prioridade.findUnique({
        where: {
          id: parseInt(id),
        },
      })
        .then((prioridade) => res.status(200).json(prioridade));
    } else {
      await prisma.prioridade.findMany()
        .then((prioridades) => res.status(200).json(prioridades));
    }

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao buscar pelo(s) prioridade(s)');
    throw e
  }

};