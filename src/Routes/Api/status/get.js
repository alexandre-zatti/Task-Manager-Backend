const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const id = req.params.id;
  
  try {
    if(id){
      await prisma.status.findUnique({
        where: {
          id: parseInt(id),
        },
      })
      .then((status) => res.status(200).json(status));
    }else{
      await prisma.status.findMany()
      .then((statuss) => res.status(200).json(statuss));
    }

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao buscar pelo(s) status(s)');
    throw e
  }

};