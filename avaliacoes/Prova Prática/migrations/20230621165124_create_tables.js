exports.up = function(knex) {
    return knex.schema
    .createTable('projeto', function(table) {
      table.increments('id');
      table.string('nome').notNullable();
      table.string('descrição');
      table.String('prazo').notNullable();
    });
};
exports.down = function(knex) {
    return knex.schema
    .dropIfExists('projeto');
};