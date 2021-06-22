const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const id = req.params.id;
  const id_tarefa = req.params.id_tarefa;

  try {
    if (id) {
      await prisma.comentario.findUnique({
        where: {
          id: parseInt(id),
        },
      })
        .then((comentario) => res.status(200).json(comentario));
    }else if(id_tarefa){
      await prisma.comentario.findMany({
        where: {
          id_tarefa: parseInt(id_tarefa),
        },
      })
        .then((comentario) => res.status(200).json(comentario));
    }else {
      await prisma.comentario.findMany()
        .then((comentarios) => res.status(200).json(comentarios));
    }

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao buscar pelo(s) comentario(s)');
    throw e
  }

};