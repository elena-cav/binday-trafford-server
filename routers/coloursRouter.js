const coloursRouter = require('express').Router();

const { getInfoByColour } = require('../controllers/coloursController');
// const { handle405s } = require('../errors');

coloursRouter.route('/green').get(getInfoByColour);

module.exports = coloursRouter;
