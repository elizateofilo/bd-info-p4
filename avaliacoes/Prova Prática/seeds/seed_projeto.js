exports.seed = function(knex) {
    return knex('projeto')
      .del()
      .then(function() {
        return knex('autores').insert([
          { nome: 'Fulano', descrição: 'N/A', prazo: '__/__/___' },
          { nome: 'Cicrano', descrição: 'N/A', prazo:'__/__/___' },
           { nome: 'Beltrano', descrição: 'N/A', prazo:'__/__/___'},
        ]);
      })
  };