var express = require('express');
var router = express.Router();

const messages = [
	{
		text: 'Hi, there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World',
		user: 'Charles',
		added: new Date(),
	},
];

router.get('/new', function (req, res) {
	res.render('new', { title: 'Mini Message Board' });
});

router.post('/new', function (req, res) {
	messages.push({
		text: req.body.message,
		user: req.body.username,
		added: new Date(),
	});
	console.log(req.body);
	res.redirect('/');
});

/* GET home page. */
router.get('/', function (req, res) {
	const formattedMessages = messages.map(({ text, user, added }) => {
		return {
			text,
			user,
			added: added.toLocaleDateString('en-GB', {
				weekday: 'long',
				month: 'long',
				day: 'numeric',
			}),
		};
	});
	res.render('index', {
		title: 'Mini Message Board',
		messages: [...formattedMessages].reverse(),
	});
});

module.exports = router;
