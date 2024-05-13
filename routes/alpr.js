var express = require('express');
var router = express.Router();
const alpr = require('../controllers/alpr');


router.post('/', function(req, res) {
  alpr.create(req,res);
});

module.exports = router;
