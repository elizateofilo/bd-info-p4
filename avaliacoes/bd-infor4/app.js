const Alunos = require('./model/alunos');
const Professores = require('./model/professores');
const Disciplinas = require('./model/disciplinas');

async function run() {
  try {
    // Listar todos os alunos
    const allAlunos = await Alunos.getAll();
    console.log('Todos os alunos:', allAlunos);

    // Criar um novo aluno
    const newAluno = { nome: 'Pedro', email: 'pedro@example.com' };
    const createdAluno = await Alunos.create(newAluno);
    console.log('Aluno criado:', createdAluno);

    // Atualizar um aluno existente
    const updatedAluno = { nome: 'Pedro Silva', email: 'pedro.silva@example.com' };
    const idToUpdate = 1;
    const result = await Alunos.update(idToUpdate, updatedAluno);
    console.log('Aluno atualizado:', result);

    // Deletar um aluno
    const idToDelete = 2;
    const deleteResult = await Alunos.delete(idToDelete);
    console.log('Aluno deletado:', deleteResult);

    // Listar todos os professores
    const allProfessores = await Professores.getAll();
    console.log('Todos os professores:', allProfessores);

    // Listar todas as disciplinas
    const allDisciplinas = await Disciplinas.getAll();
    console.log('Todas as disciplinas:', allDisciplinas);
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

run();
