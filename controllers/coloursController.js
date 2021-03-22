const { fetchInfoByColour } = require('../models/coloursModel');

exports.getInfoByColour = (req, res, next) => {
  fetchInfoByColour()
    .then(([greenItems]) => {
      res.status(200).send(greenItems);
    })
    .catch((err) => next(err));
};
