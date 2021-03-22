const { fetchBinsByArea } = require('../models/areasModel');

exports.getBinDaysByArea = (req, res, next) => {
  fetchBinsByArea(req.params, req.query)
    .then((binDays) => {
      res.status(200).send(binDays);
    })
    .catch((err) => next(err));
};
