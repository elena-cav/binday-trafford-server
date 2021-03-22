exports.up = function (knex) {
  return knex.schema.createTable('areas', (areasTable) => {
    areasTable.string('area').primary();
    areasTable.string('collectionDay').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('areas');
};
