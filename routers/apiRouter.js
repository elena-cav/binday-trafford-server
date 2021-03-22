const apiRouter = require('express').Router();
// const { handle405s, handle404s } = require('../errors');

const datesRouter = require('./datesRouter');
const areasRouter = require('./areasRouter');
apiRouter.use('/dates', datesRouter);

apiRouter.use('/areas', areasRouter);

module.exports = apiRouter;
