exports.up = function(knex) {
    return knex.schema
    .createTable('tarefas', function(table) {
      table.increments('id');
      table.string('Descrição').notNullable();
      table.string('Status').notNullable();
      table.string('Responsável').notNullable();
      table.integer('taf_id').unsigned();
      table.foreign('taf_id').references('projeto.id');
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropIfExists('tarefas');
};