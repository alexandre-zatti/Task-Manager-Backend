const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const id = req.params.id;
  
  try {
    if(id){
      await prisma.usuario.findUnique({
        where: {
          id: parseInt(id),
        },
      })
      .then((usuario) => res.status(200).json(usuario));
    }else{
      await prisma.usuario.findMany()
      .then((usuarios) => res.status(200).json(usuarios));
    }

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao buscar pelo(s) usuario(s)');
    throw e
  }

};