const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const { nome, criador, descricao } = req.body
  
  try {
    await prisma.projeto.create({
      data:{
        id_criador: criador,
        descricao: descricao,
        nome: nome,
        created_on: new Date().toISOString()
      }
    })
    .then(() => res.status(200).json('projeto criado com sucesso!'));

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao criar o projeto');
    throw e
  }

};