const datesRouter = require('express').Router();

const { getBin } = require('../controllers/datesController');
// const { handle405s } = require('../errors');

datesRouter.route('/:area/:date').get(getBin);

module.exports = datesRouter;
