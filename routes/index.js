var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Message = mongoose.model('Message');
var messagesController = require('../controllers/messagesController');

// const messages = [
// 	{
// 		text: 'Hi, there!',
// 		user: 'Amando',
// 		added: new Date(),
// 	},
// 	{
// 		text: 'Hello World',
// 		user: 'Charles',
// 		added: new Date(),
// 	},
// ];

router.get('/new', messagesController.newMessage);

router.post('/new', messagesController.addNewMessage);

/* GET home page. */
router.get('/', async function (req, res) {
	const messages = await Message.find({});
	console.log(messages);
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
