const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

module.exports = async (req, res) => {

  const { criador,
          projeto,
          grupo,
          dev, 
          tarefa_pai, 
          tipo,
          status,
          prioridade,
          complexidade,
          tempo_gasto,
          titulo,
          descricao  
        } = req.body

  try {
    await prisma.tarefa.create({
      data:{
        id_criador: criador,
        id_projeto: projeto,
        id_grupo: grupo,
        id_dev: dev,
        id_tarefa_pai: tarefa_pai,
        id_tipo: tipo,
        id_status: status,
        id_prioridade: prioridade,
        id_complexidade: complexidade,
        tempo_gasto: tempo_gasto,
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