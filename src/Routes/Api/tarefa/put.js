const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const {
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

  const id = req.params.id;
  
  try {
    if(id){

      let id_projeto;
      let id_dev;
      let id_tipo;
      let id_status;
      let id_prioridade;
      let id_complexidade;
  
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
  
      await prisma.tarefa.update({
        where: {
          id: parseInt(id),
        },
        data:{
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
          updated_on: new Date().toISOString()
        }
      })
      .then(() => res.status(200).json('tarefa atualizada com sucesso!'));
    }
  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao atualizar o tarefa');
    throw e
  }

};