const { fetchBin } = require('../models/datesModel');

exports.getBin = (req, res, next) => {
  fetchBin(req.params)
    .then((binDay) => {
      res.status(200).send(binDay);
    })
    .catch((err) => next(err));
};
