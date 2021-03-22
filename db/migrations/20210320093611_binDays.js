exports.up = function (knex) {
  return knex.schema.createTable('binDays', (binDaysTable) => {
    binDaysTable.date('date').references('dates.date');
    binDaysTable.string('colour').references('colours.colour');
    binDaysTable.string('area').references('areas.area');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('binDays');
};
