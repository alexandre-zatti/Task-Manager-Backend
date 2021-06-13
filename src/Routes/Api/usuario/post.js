const { PrismaClient, Prisma } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const { nome, email, senha } = req.body
  
  try {

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(senha, salt);

    await prisma.usuario.create({
      data:{
        nome: nome,
        email: email,
        senha: hashPassword,
        created_on: new Date().toISOString()
      }
    })
    .then(() => res.status(200).json('usuario criado com sucesso!'));
    

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao criar o usuario');
    throw e
  }

};