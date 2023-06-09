const mongoose = require('mongoose');
const Message = mongoose.model('Message');
const xss = require('xss');

function newMessage(req, res) {
	res.render('new', { title: 'Mini Message Board' });
}

async function addNewMessage(req, res) {
	const message = new Message({
		text: xss(req.body.message),
		user: xss(req.body.username),
		added: new Date(),
	});
	message.save().then(() => {
		console.log(`Message by ${req.body.username} saved`);
		res.redirect('/');
	});
}

module.exports = {
	newMessage,
	addNewMessage,
};
