const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const { usuario, projeto } = req.body

  try {
    await prisma.projeto_usuario.create({
      data: {
        id_usuario: usuario,
        id_projeto: projeto,
      }
    })
      .then(() => res.status(200).json('projeto_usuario criado com sucesso!'));


  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao criar o projeto_usuario');
    throw e
  }

};