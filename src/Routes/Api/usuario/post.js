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
    .then(() => res.status(200).send({message:'usuario criado com sucesso!'}));
    

  } catch (e) {
    return res.status(400).send({
      message:"Ops! ocorreu um erro criando o usuario"
    })
  }

};