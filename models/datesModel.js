const dbConnection = require('../db/dbConnection');

exports.fetchBin = ({ area, date }) => {
  return dbConnection
    .select('*')
    .from('binDays')
    .where({ date })
    .where({ area })

    .then(([{ date, area, colour }]) => {
      const dateObj = new Date(date).toDateString();

      return { date: dateObj, area, colour };
    });
};
