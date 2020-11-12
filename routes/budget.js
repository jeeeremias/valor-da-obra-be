var express = require('express');
var router = express.Router();

var totalBudget = require('../services/detailedBudget');

/* GET users listing. */
router.get('/detalhado', function(req, res, next) {
  res.json(totalBudget(req.query.areaTotal, req.query.areaUtil, req.query.padrao));
});

module.exports = router;
