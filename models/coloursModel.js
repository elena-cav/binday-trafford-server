const dbConnection = require('../db/dbConnection');

exports.fetchInfoByColour = () => {
  return dbConnection.select('*').from('colours').where('colour', 'green');
};
