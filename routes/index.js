var express = require('express');
var router = express.Router();
var cors = require('cors');

var corsOptions = {
  origin: '*',
  methods: 'POST',
  allowHeaders: 'Content-Type'
};

router.options('/', cors(corsOptions));

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'WebLib' });
});

router.post('/', cors(corsOptions), function (req, res) {
  console.log('got post: ' + JSON.stringify(req.body));
  res.json({ 
    msg: req.body.msg,
    url: req.body.url 
  });
});

module.exports = router;