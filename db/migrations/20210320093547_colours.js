exports.up = function (knex) {
  return knex.schema.createTable('colours', (coloursTable) => {
    coloursTable.string('colour').primary();
    coloursTable.text('recyclableItems').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('colours');
};
