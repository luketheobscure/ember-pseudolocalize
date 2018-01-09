/* eslint-env node */
const express = require('express');

module.exports = function mockRouter(app) {
  const detectLocaleRouter = express.Router();

  detectLocaleRouter.get('/', (req, res) => {
    res.send(req.headers['accept-language'].split(',')[0]);
  });

  app.use('/api/detect-locale', detectLocaleRouter);
};
