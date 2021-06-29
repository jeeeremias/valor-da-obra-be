var express = require('express');
var router = express.Router();

var totalBudget = require('../services/detailedBudget');
var cub = require('../services/cub');

/* GET users listing. */
router.get('/detalhado', function(req, res, next) {
  res.json(totalBudget(req.query));
});
router.get('/cub', function(req, res, next) {
  res.json(cub(req.query));
});

module.exports = router;
