const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const id = req.params.id;
  
  try {
    if(id){
      await prisma.complexidade.findUnique({
        where: {
          id: parseInt(id),
        },
      })
      .then((complexidade) => res.status(200).json(complexidade));
    }else{
      await prisma.complexidade.findMany()
      .then((complexidades) => res.status(200).json(complexidades));
    }

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao buscar pelo(s) complexidade(s)');
    throw e
  }

};