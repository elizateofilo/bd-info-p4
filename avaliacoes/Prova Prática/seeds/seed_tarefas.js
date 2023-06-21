exports.seed = function(knex) {
    return knex('livros')
      .del()
      .then(function() {
        return knex('livros').insert([
          {descrição: 'N/A', status: 'N/A', responsável: 'N/A', autor_id: 1},
          {descrição: 'N/A', status: 'N/A', responsável: 'N/A', autor_id: 2},
          {descrição: 'N/A', status: 'N/A', responsável: 'N/A', autor_id: 3},
        ]);
      })
  };