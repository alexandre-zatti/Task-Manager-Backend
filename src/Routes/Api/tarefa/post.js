const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const { criador,
          projeto,
          situacao,
          dev, 
          tipo,
          status,
          prioridade,
          complexidade,
          tempo_gasto,
          titulo,
          descricao  
        } = req.body

  try {

    let id_projeto = 0;
    let id_dev = 0;
    let id_tipo = 0;
    let id_status = 0;
    let id_prioridade = 0;
    let id_complexidade = 0;

    if(projeto){
      await prisma.projeto.findFirst({
        where: {
          nome: projeto,
        },
      }).then((result)=>id_projeto = result.id);
    }

    if(dev){
      await prisma.usuario.findFirst({
        where: {
          nome: dev,
        },
      }).then((result)=>id_dev = result.id);
    }
    
    if(tipo){
      await prisma.tipo.findFirst({
        where: {
          nome: tipo,
        },
      }).then((result)=>id_tipo = result.id);
    }

    if(status){
      await prisma.status.findFirst({
        where: {
          nome: status,
        },
      }).then((result)=>id_status = result.id);
    }

    if(prioridade){
      await prisma.prioridade.findFirst({
        where: {
          nome: prioridade,
        },
      }).then((result)=>id_prioridade = result.id);
    }

    if(complexidade){
      await prisma.complexidade.findFirst({
        where: {
          nome: complexidade,
        },
      }).then((result)=>id_complexidade = result.id);
    }

    await prisma.tarefa.create({
      data:{
        id_criador: criador,
        id_projeto: id_projeto,
        id_situacao: situacao ? situacao : 2,
        id_dev: id_dev,
        id_tipo: id_tipo,
        id_status: id_status,
        id_prioridade: id_prioridade,
        id_complexidade: id_complexidade,
        tempo_gasto: parseFloat(tempo_gasto),
        titulo: titulo,
        descricao: descricao,
        created_on: new Date().toISOString(),
        updated_on: new Date().toISOString()
      }
    })
    .then(() => res.status(200).json('tarefa criado com sucesso!'));

  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao criar o tarefa');
    throw e
  }

};