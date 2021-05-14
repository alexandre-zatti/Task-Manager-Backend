const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const id = req.params.id;
  
  try {
    if(id){
      await prisma.sistema.findUnique({
        where: {
          id: parseInt(id),
        },
      })
      .then((sistema) => res.status(200).json(sistema));
    }else{
      await prisma.sistema.findMany()
      .then((sistemas) => res.status(200).json(sistemas));
    }

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao buscar pelo(s) sistema(s)');
    throw e
  }

};