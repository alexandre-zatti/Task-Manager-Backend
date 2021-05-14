const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const id = req.params.id;
  
  try {
    if(id){
      await prisma.projeto.findUnique({
        where: {
          id: parseInt(id),
        },
      })
      .then((projeto) => res.status(200).json(projeto));
    }else{
      await prisma.projeto.findMany()
      .then((projetos) => res.status(200).json(projetos));
    }

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao buscar pelo(s) projeto(s)');
    throw e
  }

};