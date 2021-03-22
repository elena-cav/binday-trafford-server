const areasRouter = require('express').Router();

const { getBinDaysByArea } = require('../controllers/areasController');
// const { handle405s } = require('../errors');

areasRouter.route('/:area').get(getBinDaysByArea);

module.exports = areasRouter;
