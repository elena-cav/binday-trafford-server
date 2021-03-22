const dbConnection = require('../db/dbConnection');

const getNextBin = (binDays) => {
  const todaysDate = new Date();
  const { recyclableItems, area, colour, date } = binDays.find(
    ({ date }) => todaysDate <= date
  );
  return { recyclableItems, area, colour, date: getFormattedDate(date) };
};

const getFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  return new Date(date).toLocaleDateString('en-US', options);
};

const getFormattedBinDays = (binDays) =>
  binDays.map(({ area, colour, date, recyclableItems }) => ({
    recyclableItems,
    area,
    colour,
    date: getFormattedDate(date)
    // recyclableItems
  }));

exports.fetchBinsByArea = ({ area }, { getNextDate }) => {
  return dbConnection
    .select('*')
    .from('binDays')
    .where({ area })
    .leftJoin('colours', 'binDays.colour', 'colours.colour')
    .then((binDays) => {
      return getNextDate ? getNextBin(binDays) : getFormattedBinDays(binDays);
    });
};
