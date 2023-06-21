const Projeto = require('./models/projeto');
const Tarefas = require('./models/tarefas');


const Projeto1 = {
  nome: 'Buscar Amor',
  descrição: 'Um projeto para trazer mais amor ao mundo',
  prazo: "28 de Dezembro de 2023"
};

const Projeto2 = {
    nome: 'Doar',
    descrição: 'Uns com pouco e outros com mais, porque não dividir!',
    prazo: "15 de Maio de 2024"
  };

  const Projeto3 = {
    nome: 'Estude',
    descrição: 'Todas crianças e adolescentes tem direito a educação, então vamos estudar da melhor forma e consdições',
    prazo: "20 de Outubro de 2025"
  };

Projeto.criarProjeto(Projeto1);
Projeto.criarProjeto(Projeto2);
Projeto.atualizarProjeto(18, Projeto3);
Projeto.deletarProjeto(5);
Projeto.obterProjeto(19);
Projeto.obterProjeto(18);
Projeto.obterProjeto(20);



const Tarefa1 = {
    descrição: 'Fazer uma lista de pessoas que precisam de um abraço',
    status: 'Ativo',
    responsável: "Instituto Federal do Ceará",
    taf_id: 19
  };
  
  const Tarefa2 = {
    descrição: 'Fazer cartaz para mais pessoas ficarem ciente da importância da doação ',
    status: 'Ativo',
    responsável: "Instituto Federal do Ceará",
    taf_id: 18
    };
  
    const Tarefa3 = {
        descrição: 'Começa um clube do livro',
        status: 'Ativo',
        responsável: "Instituto Federal do Ceará",
        taf_id: 20
    };
  

    
Tarefas.criarTarefas(Tarefa1);
Tarefas.criarTarefas(Tarefa2);
Tarefas.atualizarTarefas(14, Tarefa3);
Tarefas.deletarTarefas(6);
Tarefas.obterTarefas(12);
Tarefas.obterTarefas(10);
Tarefas.obterTarefas(24);
