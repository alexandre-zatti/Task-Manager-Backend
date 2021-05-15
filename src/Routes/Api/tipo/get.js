const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const id = req.params.id;
  
  try {
    if(id){
      await prisma.tipo.findUnique({
        where: {
          id: parseInt(id),
        },
      })
      .then((tipo) => res.status(200).json(tipo));
    }else{
      await prisma.tipo.findMany()
      .then((tipos) => res.status(200).json(tipos));
    }

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao buscar pelo(s) tipo(s)');
    throw e
  }

};