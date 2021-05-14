const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const { nome } = req.body
  const id = req.params.id;
  
  try {
    if(id){
      await prisma.sistema.update({
        where: {
          id: parseInt(id),
        },
        data:{
          nome: nome,
        }
      })
      .then(() => res.status(200).json('Sistema atualizado com sucesso!'));
    }
   
  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao atualizar o sistema');
    throw e
  }

};