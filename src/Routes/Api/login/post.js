const { PrismaClient, Prisma } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const { nome, senha } = req.body
  
  try {

    let user = {};

    if(nome){
        await prisma.usuario.findUnique({
          where: {
            nome: nome,
          },
        })
        .then((usuario) => user = usuario);
    }

    if(!await bcrypt.compare(senha, user.senha)){
        return res.status(400).send({
            message:"Usuario ou senha invalidos!"
        })
    };

    const token = jwt.sign({_id: user.id}, "segredinho");

    res.cookie('jwt', token, {
      httpOnly:true,
      sameSite: "none",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000
    })

    res.send({
      message:"Login efetuado com sucesso!"
    });

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao fazer login');
    throw e
  }

};