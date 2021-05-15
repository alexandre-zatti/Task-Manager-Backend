const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {
  const id = req.params.id;
  
  try {
    if(id){
      await prisma.tipo.delete({
        where: {
          id: parseInt(id),
        }
      })
      .then(() => res.status(200).json('tipo excluido com sucesso!'));
    }
   
  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao excluir o tipo');
    throw e
  }

};