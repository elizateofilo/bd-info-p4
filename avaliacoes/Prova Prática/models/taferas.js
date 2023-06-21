const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './SCA.db'
  }
});

class Tarefas {
  static async criarLivro(tarefas) {
    try {
      const [id] = await database('tarefas').insert(tarefas);
      console.log('tarefas criado com ID:', id);
    } catch (error) {
      console.error('Erro ao criar tarefas:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarLivro(id, tarefas) {
    try {
      const result = await database('tarefas').where({ id }).update(tarefas);
      console.log('tarefas atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar tarefas:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterLivro(id) {
    try {
      const autor = await database('tarefas').where({ id }).first();
      console.log('tarefas encontrado:', autor);
    } catch (error) {
      console.error('Erro ao obter tarefas:', error);
    } finally {
      database.destroy();
    }
  }

  static async deleteLivro(id) {
    try {
      const result = await database('tarefass').where({ id }).del();
      console.log('tarefas deletado:', result);
    } catch (error) {
      console.error('Erro ao deletar tarefas:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Tarefas;