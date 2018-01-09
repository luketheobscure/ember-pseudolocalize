/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let detectLocaleRouter = express.Router();

  detectLocaleRouter.get('/', function(req, res) {
    res.send(req.headers['accept-language'].split(',')[0]);
  });

  app.use('/api/detect-locale', detectLocaleRouter);
};
