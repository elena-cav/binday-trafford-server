const { fetchInfoByColour } = require('../models/coloursModel');

exports.getInfoByColour = (req, res, next) => {
  fetchInfoByColour()
    .then(([recyclableItems]) => {
      res.status(200).send({ recyclableItems });
    })
    .catch((err) => next(err));
};
