var express = require('express');
var router = express.Router();

router.get('/new', function (req, res) {
	res.render('new', { title: 'Mini Message Board' });
});

router.post('/new', function (req, res) {
	console.log(req.body);
	res.status(200).send(`OK!`);
});

/* GET home page. */
router.get('/', function (req, res) {
	res.render('index', { title: 'Mini Message Board' });
});

module.exports = router;
