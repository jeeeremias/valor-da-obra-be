var express = require('express');
var router = express.Router();

var acabamentos = require('../services/acabamentos');

/* GET users listing. */
router.get('/acabamentos', function(req, res, next) {
  res.json(acabamentos(req.query.areaUtil));
});

module.exports = router;
