const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const { 
    grupo,
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
      await prisma.tarefa.update({
        where: {
          id: parseInt(id),
        },
        data:{
          id_grupo: grupo,
          id_dev: dev,
          id_tipo: tipo,
          id_status: status,
          id_prioridade: prioridade,
          id_complexidade: complexidade,
          tempo_gasto: tempo_gasto,
          titulo: titulo,
          descricao: descricao,
          updated_on: new Date().toISOString()
        }
      })
      .then(() => res.status(200).json('tarefa atualizado com sucesso!'));
    }
   
  } catch (e) {
    res.status(400).json('Ops! ocorreu um erro ao atualizar o tarefa');
    throw e
  }

};