const express = require('express');
const app = express();
const apiRouter = require('./routers/apiRouter.js');
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:8080'
};

// const {
//   handleCustomErrors,
//   handle400s,
//   handle500s,
//   handle405s
// } = require('./errors');
app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', apiRouter);
// app.use(handleCustomErrors);
// app.use(handle400s);
// app.use(handle500s);

module.exports = app;
