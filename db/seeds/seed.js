const {
  datesData,
  coloursData,
  binDaysData,
  areasData
} = require('../data/index');
exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return Promise.all([
        knex.insert(areasData).into('areas'),
        knex.insert(datesData).into('dates'),
        knex.insert(coloursData).into('colours')
      ]);
    })
    .then(() => {
      return knex.insert(binDaysData).into('binDays');
    });
};
