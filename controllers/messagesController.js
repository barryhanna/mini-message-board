const mongoose = require('mongoose');
const Message = mongoose.model('Message');

function newMessage(req, res) {
	res.render('new', { title: 'Mini Message Board' });
}

async function addNewMessage(req, res) {
	const message = new Message({
		text: req.body.message,
		user: req.body.username,
		added: new Date(),
	});
	message
		.save()
		.then(() => console.log(`Message by ${req.body.username} saved`));
	console.log(message);
	res.redirect('/');
}

module.exports = {
	newMessage,
	addNewMessage,
};
