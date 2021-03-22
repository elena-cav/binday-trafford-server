exports.up = function (knex) {
  return knex.schema.createTable('dates', (datesTable) => {
    datesTable.date('date').primary();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('dates');
};
