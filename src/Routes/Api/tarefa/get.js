const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const id = req.params.id;
  
  try {
    if(id){
      await prisma.tarefa.findUnique({
        where: {
          id: parseInt(id),
        },
      })
      .then((tarefa) => res.status(200).json(tarefa));
    }else{
      await prisma.tarefa.findMany()
      .then((tarefas) => res.status(200).json(tarefas));
    }

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao buscar pelo(s) tarefa(s)');
    throw e
  }

};