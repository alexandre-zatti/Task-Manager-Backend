const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const { nome } = req.body
  
  try {
    await prisma.complexidade.create({
      data:{
        nome: nome,
        created_on: new Date().toISOString()
      }
    })
    .then(() => res.status(200).json('complexidade criado com sucesso!'));
    

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao criar o complexidade');
    throw e
  }

};