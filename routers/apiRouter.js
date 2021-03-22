const apiRouter = require('express').Router();
// const { handle405s, handle404s } = require('../errors');

const datesRouter = require('./datesRouter');
const areasRouter = require('./areasRouter');
const coloursRouter = require('./coloursRouter');

apiRouter.use('/dates', datesRouter);

apiRouter.use('/areas', areasRouter);
apiRouter.use('/colours', coloursRouter);

module.exports = apiRouter;
