const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const { nome, criador, sistema } = req.body
  const id = req.params.id;
  
  try {
    if(id){
      await prisma.projeto.update({
        where: {
          id: parseInt(id),
        },
        data:{
          id_criador: criador,
          id_sistema: sistema,
          nome: nome,
          created_on: new Date().toISOString()
        }
      })
      .then(() => res.status(200).json('projeto atualizado com sucesso!'));
    }
   
  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao atualizar o projeto');
    throw e
  }

};