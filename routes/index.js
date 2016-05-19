var express = require('express');
var router = express.Router();
var cors = require('cors');

var corsOptions = {
  origin: '*',
  methods: 'POST',
  allowHeaders: 'Content-Type'
};

var routeRegex = '/:var(app)?';

router.options('/', cors(corsOptions));

/* GET home page. */
router.get(routeRegex, function (req, res) {
  res.render('index', { title: 'WebLib' });
});

/* Post to home page */
router.post(routeRegex, cors(corsOptions), function (req, res) {
  console.log('got post: ' + JSON.stringify(req.body));
  res.json({ 
    msg: req.body.msg,
    url: req.body.url 
  });
});

module.exports = router;