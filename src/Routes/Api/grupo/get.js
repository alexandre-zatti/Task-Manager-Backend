const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const id = req.params.id;
  
  try {
    if(id){
      await prisma.grupo.findUnique({
        where: {
          id: parseInt(id),
        },
      })
      .then((grupo) => res.status(200).json(grupo));
    }else{
      await prisma.grupo.findMany()
      .then((grupos) => res.status(200).json(grupos));
    }

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao buscar pelo(s) grupo(s)');
    throw e
  }

};